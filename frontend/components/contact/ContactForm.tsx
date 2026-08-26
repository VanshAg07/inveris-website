"use client";

import { useState } from "react";
import { ArrowRight, Lock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { contactPageContent } from "@/lib/content";

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  enquiryType: string;
  subject: string;
  message: string;
}

const inputClass =
  "w-full px-4 py-3 rounded border border-border bg-white text-heading text-sm placeholder:text-paragraph-muted focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold";

export function ContactForm() {
  const { form } = contactPageContent;

  const initialForm: FormData = {
    name: "",
    email: "",
    company: "",
    phone: "",
    enquiryType: "",
    subject: "",
    message: "",
  };

  const [formState, setFormState] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<string[]>([]);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrors([]);
    setSuccessMessage("");

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";
      const res = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrors(data.errors || [data.message || "Something went wrong."]);
        setStatus("error");
        return;
      }

      setSuccessMessage(data.message);
      setFormState(initialForm);
      setStatus("success");
    } catch {
      setErrors(["Unable to reach the server. Please try again later."]);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-heading mb-1.5">
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formState.name}
            onChange={handleChange}
            className={inputClass}
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-heading mb-1.5">
            Work Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formState.email}
            onChange={handleChange}
            className={inputClass}
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-heading mb-1.5">
          Company Name
        </label>
        <input
          id="company"
          name="company"
          type="text"
          value={formState.company}
          onChange={handleChange}
          className={inputClass}
          placeholder="Your company"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-heading mb-1.5">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formState.phone}
            onChange={handleChange}
            className={inputClass}
            placeholder="+91 00000 00000"
          />
        </div>
        <div>
          <label htmlFor="enquiryType" className="block text-sm font-medium text-heading mb-1.5">
            Enquiry Type
          </label>
          <select
            id="enquiryType"
            name="enquiryType"
            value={formState.enquiryType}
            onChange={handleChange}
            className={`${inputClass} appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%2716%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%2364748b%27 stroke-width=%272%27%3E%3Cpath d=%27M6 9l6 6 6-6%27/%3E%3C/svg%3E')] bg-[length:16px] bg-[right_12px_center] bg-no-repeat pr-10`}
          >
            <option value="">Select enquiry type</option>
            {form.enquiryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-heading mb-1.5">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={formState.subject}
          onChange={handleChange}
          className={inputClass}
          placeholder="What is this regarding?"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-heading mb-1.5">
          How can we help you?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formState.message}
          onChange={handleChange}
          className={`${inputClass} resize-none`}
          placeholder="Tell us about your business needs..."
        />
      </div>

      {status === "success" && (
        <div className="p-4 rounded bg-green-50 border border-green-200 text-green-800 text-sm">
          {successMessage}
        </div>
      )}

      {status === "error" && errors.length > 0 && (
        <div className="p-4 rounded bg-red-50 border border-red-200 text-red-800 text-sm space-y-1">
          {errors.map((err) => (
            <p key={err}>{err}</p>
          ))}
        </div>
      )}

      <Button type="submit" variant="primary" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Send Message"}
        <ArrowRight size={18} />
      </Button>

      <p className="flex items-center gap-2 text-xs text-paragraph">
        <Lock size={14} className="shrink-0" />
        {form.privacyNote}
      </p>
    </form>
  );
}
