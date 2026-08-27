const express = require("express");
const multer = require("multer");
const { toFile } = require("@imagekit/nodejs");
const requireAuth = require("../middleware/requireAuth");
const { getImageKit } = require("../lib/imagekit");

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

module.exports = router;
