const mongoose = require("mongoose");

const newsletterSubscriberSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, trim: true, lowercase: true, unique: true },
    emailSent: { type: Boolean, default: false },
  },
  { timestamps: true }
);

newsletterSubscriberSchema.index({ createdAt: -1 });

module.exports =
  mongoose.models.NewsletterSubscriber ||
  mongoose.model("NewsletterSubscriber", newsletterSubscriberSchema);
