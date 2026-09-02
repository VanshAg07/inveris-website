const SiteContent = require("../models/SiteContent");
const { defaultServices } = require("../data/defaultServices");

const KEY = "services";

function withConsultingCall(content) {
  const fallback = defaultServices.consultingCall;
  if (!content || typeof content !== "object") return defaultServices;

  const incoming = content.consultingCall;
  const { whyItMatters: _removed, ...rest } = content;

  return {
    ...rest,
    consultingCall: {
      tag: incoming?.tag || fallback.tag,
      title: incoming?.title || fallback.title,
      description: incoming?.description || fallback.description,
      submitLabel: incoming?.submitLabel || fallback.submitLabel,
      images:
        Array.isArray(incoming?.images) && incoming.images.length > 0
          ? incoming.images
          : fallback.images,
    },
  };
}

async function readServices() {
  const doc = await SiteContent.findOneAndUpdate(
    { key: KEY },
    { $setOnInsert: { content: defaultServices } },
    { new: true, upsert: true }
  ).lean();
  return withConsultingCall(doc.content);
}

async function writeServices(content) {
  const normalized = withConsultingCall(content);
  const doc = await SiteContent.findOneAndUpdate(
    { key: KEY },
    { content: normalized },
    { new: true, upsert: true }
  ).lean();
  return withConsultingCall(doc.content);
}

async function resetServices() {
  return writeServices(defaultServices);
}

module.exports = { readServices, writeServices, resetServices };
