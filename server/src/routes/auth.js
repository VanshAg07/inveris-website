const express = require("express");
const jwt = require("jsonwebtoken");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@inveris.com";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";
const JWT_SECRET = process.env.JWT_SECRET || "inveris-admin-secret";

router.post("/login", (req, res) => {
  const email = String(req.body?.email || "").trim().toLowerCase();
  const password = String(req.body?.password || "");

  if (email !== ADMIN_EMAIL.toLowerCase() || password !== ADMIN_PASSWORD) {
    return res.status(401).json({ success: false, message: "Invalid email or password" });
  }

  const token = jwt.sign({ email: ADMIN_EMAIL, role: "admin" }, JWT_SECRET, {
    expiresIn: "7d",
  });

  return res.json({
    success: true,
    token,
    admin: { email: ADMIN_EMAIL },
  });
});

router.get("/me", requireAuth, (req, res) => {
  return res.json({
    success: true,
    admin: { email: req.admin.email },
  });
});

module.exports = router;
