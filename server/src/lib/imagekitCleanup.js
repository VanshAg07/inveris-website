const { getImageKit } = require("./imagekit");

function normalizeEndpoint(endpoint) {
  return String(endpoint || "")
    .trim()
    .replace(/\/$/, "");
}

function isImageKitUrl(value) {
  if (typeof value !== "string" || !value) return false;
  if (!/^https?:\/\//i.test(value)) return false;

  const endpoint = normalizeEndpoint(process.env.IMAGEKIT_URL_ENDPOINT);
  if (endpoint && value.startsWith(endpoint)) return true;

  try {
    const host = new URL(value).hostname.toLowerCase();
    return host === "ik.imagekit.io" || host.endsWith(".imagekit.io");
  } catch {
    return false;
  }
}

function collectImageKitUrls(value, out = new Set()) {
  if (typeof value === "string") {
    if (isImageKitUrl(value)) out.add(value.split("?")[0].split("#")[0]);
    return out;
  }

  if (Array.isArray(value)) {
    for (const item of value) collectImageKitUrls(item, out);
    return out;
  }

  if (value && typeof value === "object") {
    for (const item of Object.values(value)) collectImageKitUrls(item, out);
  }

  return out;
}

function getImageKitFilePath(url) {
  try {
    const parsed = new URL(url);
    const endpoint = normalizeEndpoint(process.env.IMAGEKIT_URL_ENDPOINT);

    let pathname = decodeURIComponent(parsed.pathname);

    if (endpoint) {
      const endpointPath = new URL(endpoint).pathname.replace(/\/$/, "");
      if (endpointPath && pathname.startsWith(endpointPath)) {
        pathname = pathname.slice(endpointPath.length) || "/";
      } else {
        // https://ik.imagekit.io/{id}/...
        const parts = pathname.split("/").filter(Boolean);
        if (parts.length >= 2) {
          parts.shift();
          if (parts[0]?.startsWith("tr:")) parts.shift();
          pathname = `/${parts.join("/")}`;
        }
      }
    } else {
      const parts = pathname.split("/").filter(Boolean);
      if (parts.length >= 2) {
        parts.shift();
        if (parts[0]?.startsWith("tr:")) parts.shift();
        pathname = `/${parts.join("/")}`;
      }
    }

    if (!pathname || pathname === "/") return null;
    return pathname.startsWith("/") ? pathname : `/${pathname}`;
  } catch {
    return null;
  }
}

async function findFileIdByUrl(url) {
  const client = getImageKit();
  const filePath = getImageKitFilePath(url);
  if (!filePath) return null;

  const exact = await client.assets.list({
    type: "file",
    limit: 5,
    searchQuery: `path="${filePath}"`,
  });

  if (Array.isArray(exact) && exact[0]?.fileId) {
    return exact[0].fileId;
  }

  const fileName = filePath.split("/").filter(Boolean).pop();
  const folder = filePath.slice(0, filePath.lastIndexOf("/") + 1) || "/";

  if (!fileName) return null;

  const listed = await client.assets.list({
    type: "file",
    path: folder,
    limit: 100,
  });

  if (!Array.isArray(listed)) return null;

  const match =
    listed.find((file) => file.url === url || file.filePath === filePath) ||
    listed.find((file) => file.name === fileName);

  return match?.fileId || null;
}

async function deleteImageKitUrl(url) {
  if (!isImageKitUrl(url)) return false;

  try {
    const fileId = await findFileIdByUrl(url);
    if (!fileId) {
      console.warn("[ImageKit cleanup] File not found for URL:", url);
      return false;
    }

    await getImageKit().files.delete(fileId);
    return true;
  } catch (error) {
    console.error("[ImageKit cleanup] Failed to delete:", url, error?.message || error);
    return false;
  }
}

async function deleteImageKitUrls(urls) {
  const unique = [...new Set((urls || []).filter(Boolean))];
  for (const url of unique) {
    await deleteImageKitUrl(url);
  }
}

async function cleanupRemovedImageKitUrls(previousContent, nextContent) {
  const previous = collectImageKitUrls(previousContent);
  const next = collectImageKitUrls(nextContent);
  const removed = [...previous].filter((url) => !next.has(url));
  if (!removed.length) return;
  await deleteImageKitUrls(removed);
}

module.exports = {
  isImageKitUrl,
  collectImageKitUrls,
  cleanupRemovedImageKitUrls,
  deleteImageKitUrl,
  deleteImageKitUrls,
};
