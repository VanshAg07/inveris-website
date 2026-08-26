function validateContact(req, res, next) {
  const { name, email, message } = req.body;

  const errors = [];

  if (!name || typeof name !== "string" || name.trim().length < 2) {
    errors.push("Name is required and must be at least 2 characters.");
  }

  if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push("A valid email address is required.");
  }

  if (!message || typeof message !== "string" || message.trim().length < 10) {
    errors.push("Message is required and must be at least 10 characters.");
  }

  if (errors.length > 0) {
    return res.status(400).json({ success: false, errors });
  }

  next();
}

module.exports = validateContact;
