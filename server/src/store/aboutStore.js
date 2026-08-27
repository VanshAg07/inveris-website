const SiteContent = require("../models/SiteContent");
const { defaultAbout } = require("../data/defaultAbout");

const KEY = "about";

async function readAbout() {
  const doc = await SiteContent.findOneAndUpdate(
    { key: KEY },
    { $setOnInsert: { content: defaultAbout } },
    { new: true, upsert: true }
  ).lean();
  return doc.content;
}

async function writeAbout(content) {
  const doc = await SiteContent.findOneAndUpdate(
    { key: KEY },
    { content },
    { new: true, upsert: true }
  ).lean();
  return doc.content;
}

async function resetAbout() {
  return writeAbout(defaultAbout);
}

module.exports = { readAbout, writeAbout, resetAbout };
