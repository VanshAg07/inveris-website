const SiteContent = require("../models/SiteContent");
const { defaultIndustries } = require("../data/defaultIndustries");

const KEY = "industries";

async function readIndustries() {
  const doc = await SiteContent.findOneAndUpdate(
    { key: KEY },
    { $setOnInsert: { content: defaultIndustries } },
    { new: true, upsert: true }
  ).lean();
  return doc.content;
}

async function writeIndustries(content) {
  const doc = await SiteContent.findOneAndUpdate(
    { key: KEY },
    { content },
    { new: true, upsert: true }
  ).lean();
  return doc.content;
}

async function resetIndustries() {
  return writeIndustries(defaultIndustries);
}

module.exports = { readIndustries, writeIndustries, resetIndustries };
