const express = require("express");
const multer = require("multer");
const { toFile } = require("@imagekit/nodejs");
const requireAuth = require("../middleware/requireAuth");
const { getImageKit } = require("../lib/imagekit");
const {
  deleteImageKitUrl,
  deleteImageKitUrls,
  isImageKitUrl,
} = require("../lib/imagekitCleanup");

const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 8 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    if (file.mimetype && file.mimetype.startsWith("image/")) {
      return cb(null, true);
    }
    cb(new Error("Only image files are allowed"));
  },
});

router.post("/", requireAuth, (req, res) => {
  upload.single("image")(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ success: false, message: err.message });
    }
    if (!req.file) {
      return res.status(400).json({ success: false, message: "No image uploaded" });
    }

    try {
      const fileName = req.file.originalname || `upload-${Date.now()}.jpg`;
      const result = await getImageKit().files.upload({
        file: await toFile(req.file.buffer, fileName),
        fileName,
        folder: "/inveris",
        useUniqueFileName: true,
      });

      return res.json({
        success: true,
        url: result.url,
        fileId: result.fileId,
      });
    } catch (error) {
      console.error("[ImageKit upload]", error);
      return res.status(500).json({ success: false, message: "Failed to upload image" });
    }
  });
});

router.post("/delete", requireAuth, async (req, res) => {
  const url = typeof req.body?.url === "string" ? req.body.url : "";
  const urls = Array.isArray(req.body?.urls) ? req.body.urls : [];

  const targets = [...(url ? [url] : []), ...urls].filter(
    (entry) => typeof entry === "string" && isImageKitUrl(entry)
  );

  if (!targets.length) {
    return res.status(400).json({
      success: false,
      message: "Provide an ImageKit url or urls array to delete",
    });
  }

  try {
    if (targets.length === 1) {
      await deleteImageKitUrl(targets[0]);
    } else {
      await deleteImageKitUrls(targets);
    }
    return res.json({ success: true });
  } catch (error) {
    console.error("[ImageKit delete]", error);
    return res.status(500).json({ success: false, message: "Failed to delete image" });
  }
});

module.exports = router;
