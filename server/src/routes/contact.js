const express = require("express");
const validateContact = require("../middleware/validateContact");

const router = express.Router();

router.post("/", validateContact, (req, res) => {
  const { name, email, company, phone, enquiryType, subject, message } = req.body;

  const submission = {
    name: name.trim(),
    email: email.trim(),
    company: company?.trim() || "",
    phone: phone?.trim() || "",
    enquiryType: enquiryType?.trim() || "",
    subject: subject?.trim() || "",
    message: message.trim(),
    submittedAt: new Date().toISOString(),
  };

  console.log("[Contact Submission]", submission);

  return res.status(200).json({
    success: true,
    message: "Thank you for reaching out. We will get back to you soon.",
  });
});

module.exports = router;
