const SiteContent = require("../models/SiteContent");
const { defaultApproach } = require("../data/defaultApproach");

const KEY = "approach";

async function readApproach() {
  const doc = await SiteContent.findOneAndUpdate(
    { key: KEY },
    { $setOnInsert: { content: defaultApproach } },
    { new: true, upsert: true }
  ).lean();
  return doc.content;
}

async function writeApproach(content) {
  const doc = await SiteContent.findOneAndUpdate(
    { key: KEY },
    { content },
    { new: true, upsert: true }
  ).lean();
  return doc.content;
}

async function resetApproach() {
  return writeApproach(defaultApproach);
}

module.exports = { readApproach, writeApproach, resetApproach };
