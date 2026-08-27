const SiteContent = require("../models/SiteContent");
const { defaultServices } = require("../data/defaultServices");

const KEY = "services";

async function readServices() {
  const doc = await SiteContent.findOneAndUpdate(
    { key: KEY },
    { $setOnInsert: { content: defaultServices } },
    { new: true, upsert: true }
  ).lean();
  return doc.content;
}

async function writeServices(content) {
  const doc = await SiteContent.findOneAndUpdate(
    { key: KEY },
    { content },
    { new: true, upsert: true }
  ).lean();
  return doc.content;
}

async function resetServices() {
  return writeServices(defaultServices);
}

module.exports = { readServices, writeServices, resetServices };
