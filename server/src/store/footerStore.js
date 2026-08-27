const SiteContent = require("../models/SiteContent");
const { defaultFooter } = require("../data/defaultFooter");

const KEY = "footer";

async function readFooter() {
  const doc = await SiteContent.findOneAndUpdate(
    { key: KEY },
    { $setOnInsert: { content: defaultFooter } },
    { new: true, upsert: true }
  ).lean();
  return doc.content;
}

async function writeFooter(content) {
  const doc = await SiteContent.findOneAndUpdate(
    { key: KEY },
    { content },
    { new: true, upsert: true }
  ).lean();
  return doc.content;
}

module.exports = { readFooter, writeFooter };
