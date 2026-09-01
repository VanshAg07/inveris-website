const NewsletterSubscriber = require("../models/NewsletterSubscriber");

function toSubscriber(doc) {
  if (!doc) return null;
  return {
    id: String(doc._id),
    email: doc.email,
    emailSent: Boolean(doc.emailSent),
    createdAt: doc.createdAt instanceof Date ? doc.createdAt.toISOString() : doc.createdAt,
  };
}

async function subscribe(email) {
  try {
    const doc = await NewsletterSubscriber.create({ email });
    return { subscriber: toSubscriber(doc), created: true };
  } catch (error) {
    if (error && error.code === 11000) {
      const existing = await NewsletterSubscriber.findOne({ email }).lean();
      return { subscriber: toSubscriber(existing), created: false };
    }
    throw error;
  }
}

async function listSubscribers() {
  const docs = await NewsletterSubscriber.find().sort({ createdAt: -1 }).lean();
  return docs.map(toSubscriber);
}

async function setEmailSent(id, emailSent) {
  const doc = await NewsletterSubscriber.findByIdAndUpdate(
    id,
    { emailSent: Boolean(emailSent) },
    { returnDocument: "after" }
  ).lean();
  return toSubscriber(doc);
}

async function deleteSubscriber(id) {
  const doc = await NewsletterSubscriber.findByIdAndDelete(id).lean();
  return toSubscriber(doc);
}

module.exports = {
  subscribe,
  listSubscribers,
  setEmailSent,
  deleteSubscriber,
};
