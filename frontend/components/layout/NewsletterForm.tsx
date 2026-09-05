"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { getApiBaseUrl } from "@/lib/home-content";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch(`${getApiBaseUrl()}/api/newsletter`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(data.message || "Something went wrong.");
        return;
      }

      setStatus("success");
      setMessage(data.message || "Thanks for subscribing to our newsletter.");
      setEmail("");
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 5000);
    } catch {
      setStatus("error");
      setMessage("Unable to reach the server. Please try again later.");
    }
  }

  return (
    <div className="space-y-3 pt-2">
      <h4 className="font-display text-heading-inverse text-lg font-medium">Subscribe to newsletter</h4>
      <form
        onSubmit={(event) => void handleSubmit(event)}
        className="flex max-w-sm items-center rounded-full border border-white/15 bg-white/8 p-1 pl-4 backdrop-blur-md"
      >
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
          className="min-w-0 flex-1 bg-transparent py-2 pr-2 text-sm text-heading-inverse placeholder:text-white/50 outline-none"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          aria-label="Subscribe"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold text-navy hover:bg-gold-light disabled:opacity-60"
        >
          <ArrowRight size={16} strokeWidth={2.5} />
        </button>
      </form>
      {message ? (
        <p className={`text-xs ${status === "error" ? "text-red-300" : "text-gold"}`}>{message}</p>
      ) : null}
    </div>
  );
}
