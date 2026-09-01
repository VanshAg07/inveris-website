const SiteContent = require("../models/SiteContent");
const { defaultContact } = require("../data/defaultContact");

const KEY = "contact";

async function readContact() {
  const doc = await SiteContent.findOneAndUpdate(
    { key: KEY },
    { $setOnInsert: { content: defaultContact } },
    { new: true, upsert: true }
  ).lean();
  return doc.content;
}

async function writeContact(content) {
  const doc = await SiteContent.findOneAndUpdate(
    { key: KEY },
    { content },
    { new: true, upsert: true }
  ).lean();
  return doc.content;
}

async function resetContact() {
  return writeContact(defaultContact);
}

module.exports = { readContact, writeContact, resetContact };
