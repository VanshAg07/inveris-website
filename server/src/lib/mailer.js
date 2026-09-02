const { Resend } = require("resend");

const DEFAULT_NOTIFY_EMAIL = "vanshagarwal0144@gmail.com";
const DEFAULT_FROM = "Inveris Website <onboarding@resend.dev>";

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
}

function row(label, value) {
  if (!value) return "";
  return `<tr>
    <td style="padding:8px 0;color:#64748b;font-size:13px;width:140px;vertical-align:top;">${escapeHtml(label)}</td>
    <td style="padding:8px 0;color:#0f172a;font-size:14px;white-space:pre-wrap;">${escapeHtml(value)}</td>
  </tr>`;
}

async function sendContactNotification(submission) {
  const resend = getResend();
  const to = process.env.CONTACT_NOTIFY_EMAIL || DEFAULT_NOTIFY_EMAIL;
  const from = process.env.RESEND_FROM_EMAIL || DEFAULT_FROM;

  if (!resend) {
    console.warn(
      "[Contact email] RESEND_API_KEY is not set. Submission was saved, but no email was sent."
    );
    return false;
  }

  const isConsultingCall = /consulting call/i.test(
    `${submission.enquiryType || ""} ${submission.subject || ""}`
  );

  const heading = isConsultingCall
    ? "New consulting call request"
    : "New contact form submission";
  const subject = isConsultingCall
    ? `New consulting call request from ${submission.name}`
    : submission.subject
      ? `New Inveris enquiry: ${submission.subject}`
      : `New Inveris enquiry from ${submission.name}`;
  const intro = isConsultingCall
    ? "Someone requested a consulting call from the Inveris services page."
    : "New contact form submission from the Inveris website.";

  const text = [
    intro,
    "",
    `Name: ${submission.name}`,
    `Email: ${submission.email}`,
    submission.company ? `Company: ${submission.company}` : null,
    submission.phone ? `Phone: ${submission.phone}` : null,
    submission.enquiryType ? `Enquiry type: ${submission.enquiryType}` : null,
    submission.subject ? `Subject: ${submission.subject}` : null,
    "",
    "Message:",
    submission.message,
  ]
    .filter((line) => line !== null)
    .join("\n");

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;padding:24px;background:#f8fafc;">
      <div style="background:#0b1f3a;color:#fff;padding:20px 24px;border-radius:12px 12px 0 0;">
        <p style="margin:0;letter-spacing:0.2em;font-size:11px;color:#c9a227;">INVERIS</p>
        <h1 style="margin:8px 0 0;font-size:20px;">${heading}</h1>
      </div>
      <div style="background:#fff;padding:24px;border:1px solid #e2e8f0;border-top:0;border-radius:0 0 12px 12px;">
        <table style="width:100%;border-collapse:collapse;">
          ${row("Name", submission.name)}
          ${row("Email", submission.email)}
          ${row("Company", submission.company)}
          ${row("Phone", submission.phone)}
          ${row("Enquiry type", submission.enquiryType)}
          ${row("Subject", submission.subject)}
          ${row("Message", submission.message)}
        </table>
      </div>
    </div>
  `;

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: submission.email,
    subject,
    text,
    html,
  });

  if (error) {
    throw new Error(error.message || "Resend failed to send email");
  }

  return true;
}

async function sendNewsletterNotification(email) {
  const resend = getResend();
  const to = process.env.CONTACT_NOTIFY_EMAIL || DEFAULT_NOTIFY_EMAIL;
  const from = process.env.RESEND_FROM_EMAIL || DEFAULT_FROM;

  if (!resend) {
    console.warn(
      "[Newsletter email] RESEND_API_KEY is not set. Subscriber was saved, but no email was sent."
    );
    return false;
  }

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `New newsletter subscriber: ${email}`,
    text: `A new subscriber joined the Inveris newsletter.\n\nEmail: ${email}`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;padding:24px;background:#f8fafc;">
        <div style="background:#0b1f3a;color:#fff;padding:20px 24px;border-radius:12px 12px 0 0;">
          <p style="margin:0;letter-spacing:0.2em;font-size:11px;color:#c9a227;">INVERIS</p>
          <h1 style="margin:8px 0 0;font-size:20px;">New newsletter subscriber</h1>
        </div>
        <div style="background:#fff;padding:24px;border:1px solid #e2e8f0;border-top:0;border-radius:0 0 12px 12px;">
          <table style="width:100%;border-collapse:collapse;">
            ${row("Email", email)}
          </table>
        </div>
      </div>
    `,
  });

  if (error) {
    throw new Error(error.message || "Resend failed to send email");
  }

  return true;
}

module.exports = { sendContactNotification, sendNewsletterNotification, DEFAULT_NOTIFY_EMAIL };
