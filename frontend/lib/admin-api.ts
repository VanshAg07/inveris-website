import { getApiBaseUrl, type HomeContent } from "@/lib/home-content";
import type { FooterContent } from "@/lib/footer-content";

const TOKEN_KEY = "inveris-admin-token";

export function getAdminToken() {
  if (typeof window === "undefined") return "";
  return localStorage.getItem(TOKEN_KEY) || "";
}

export function setAdminToken(token: string) {
  localStorage.setItem(TOKEN_KEY, token);
}

export function clearAdminToken() {
  localStorage.removeItem(TOKEN_KEY);
}

async function adminFetch(path: string, init: RequestInit = {}) {
  const headers = new Headers(init.headers);
  const token = getAdminToken();
  if (token) headers.set("Authorization", `Bearer ${token}`);
  if (!(init.body instanceof FormData) && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }

  const res = await fetch(`${getApiBaseUrl()}${path}`, {
    ...init,
    headers,
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data.message || "Request failed");
  }
  return data;
}

export async function loginAdmin(email: string, password: string) {
  const data = await adminFetch("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
  setAdminToken(data.token);
  return data.admin as { email: string };
}

export async function fetchAdminSession() {
  const data = await adminFetch("/api/auth/me");
  return data.admin as { email: string };
}

export async function saveHomeContent(content: HomeContent) {
  const data = await adminFetch("/api/content/home", {
    method: "PUT",
    body: JSON.stringify(content),
  });
  return data.content as HomeContent;
}

export async function saveFooterContent(content: FooterContent) {
  const data = await adminFetch("/api/content/footer", {
    method: "PUT",
    body: JSON.stringify(content),
  });
  return data.content as FooterContent;
}

export async function uploadAdminImage(file: File) {
  const form = new FormData();
  form.append("image", file);
  const data = await adminFetch("/api/upload", {
    method: "POST",
    body: form,
  });
  return data.url as string;
}
