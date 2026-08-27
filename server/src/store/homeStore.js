const SiteContent = require("../models/SiteContent");
const { defaultHome } = require("../data/defaultHome");

const KEY = "home";

async function readHome() {
  const doc = await SiteContent.findOneAndUpdate(
    { key: KEY },
    { $setOnInsert: { content: defaultHome } },
    { new: true, upsert: true }
  ).lean();
  return doc.content;
}

async function writeHome(content) {
  const doc = await SiteContent.findOneAndUpdate(
    { key: KEY },
    { content },
    { new: true, upsert: true }
  ).lean();
  return doc.content;
}

async function resetHome() {
  return writeHome(defaultHome);
}

module.exports = { readHome, writeHome, resetHome };
