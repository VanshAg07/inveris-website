const express = require("express");
const requireAuth = require("../middleware/requireAuth");
const { readHome, writeHome, resetHome } = require("../store/homeStore");
const { readFooter, writeFooter } = require("../store/footerStore");

const router = express.Router();

function isHomeContent(body) {
  return (
    body &&
    typeof body === "object" &&
    body.hero &&
    Array.isArray(body.valuePropositions) &&
    body.about &&
    body.services &&
    body.approach &&
    body.cta
  );
}

function isFooterContent(body) {
  return (
    body &&
    typeof body === "object" &&
    typeof body.companyName === "string" &&
    typeof body.description === "string" &&
    Array.isArray(body.links) &&
    body.contact &&
    typeof body.contact.title === "string" &&
    Array.isArray(body.contact.social) &&
    typeof body.copyright === "string"
  );
}

router.get("/home", async (_req, res) => {
  try {
    return res.json({ success: true, content: await readHome() });
  } catch (error) {
    console.error("[Home content read]", error);
    return res.status(500).json({ success: false, message: "Failed to load home content" });
  }
});

router.put("/home", requireAuth, async (req, res) => {
  if (!isHomeContent(req.body)) {
    return res.status(400).json({ success: false, message: "Invalid home content payload" });
  }

  try {
    const content = await writeHome(req.body);
    return res.json({ success: true, content });
  } catch (error) {
    console.error("[Home content write]", error);
    return res.status(500).json({ success: false, message: "Failed to save home content" });
  }
});

router.post("/home/reset", requireAuth, async (_req, res) => {
  try {
    const content = await resetHome();
    return res.json({ success: true, content });
  } catch (error) {
    console.error("[Home content reset]", error);
    return res.status(500).json({ success: false, message: "Failed to reset home content" });
  }
});

router.get("/footer", async (_req, res) => {
  try {
    return res.json({ success: true, content: await readFooter() });
  } catch (error) {
    console.error("[Footer content read]", error);
    return res.status(500).json({ success: false, message: "Failed to load footer content" });
  }
});

router.put("/footer", requireAuth, async (req, res) => {
  if (!isFooterContent(req.body)) {
    return res.status(400).json({ success: false, message: "Invalid footer content payload" });
  }

  try {
    const content = await writeFooter(req.body);
    return res.json({ success: true, content });
  } catch (error) {
    console.error("[Footer content write]", error);
    return res.status(500).json({ success: false, message: "Failed to save footer content" });
  }
});

module.exports = router;
