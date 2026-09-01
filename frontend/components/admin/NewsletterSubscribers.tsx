"use client";

import { useEffect, useState } from "react";
import {
  deleteNewsletterSubscriber,
  fetchNewsletterSubscribers,
  type NewsletterSubscriber,
} from "@/lib/admin-api";

function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export function NewsletterSubscribers({
  embedded = false,
}: {
  embedded?: boolean;
}) {
  const [subscribers, setSubscribers] = useState<NewsletterSubscriber[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [busyId, setBusyId] = useState("");
  const [copied, setCopied] = useState(false);

  async function load() {
    setError("");
    const data = await fetchNewsletterSubscribers();
    setSubscribers(data);
  }

  useEffect(() => {
    async function start() {
      try {
        await load();
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unable to load subscribers");
      } finally {
        setLoading(false);
      }
    }
    void start();
  }, []);

  async function remove(item: NewsletterSubscriber) {
    if (!window.confirm(`Remove ${item.email} from the newsletter list?`)) return;
    setBusyId(item.id);
    setError("");
    try {
      await deleteNewsletterSubscriber(item.id);
      setSubscribers((prev) => prev.filter((row) => row.id !== item.id));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to delete subscriber");
    } finally {
      setBusyId("");
    }
  }

  async function copyEmails() {
    const list = subscribers.map((item) => item.email).join("\n");
    if (!list) return;
    try {
      await navigator.clipboard.writeText(list);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setError("Unable to copy emails");
    }
  }

  const HeadingTag = embedded ? "h2" : "h1";

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <HeadingTag className="text-2xl font-bold text-navy">Newsletter emails</HeadingTag>
          <p className="mt-1 text-sm text-text-body">
            {loading
              ? "Loading subscribed emails..."
              : `${subscribers.length} ${subscribers.length === 1 ? "email has" : "emails have"} subscribed from the footer form.`}
          </p>
        </div>
        <div className="flex items-center gap-2">
          {subscribers.length ? (
            <button
              type="button"
              onClick={() => void copyEmails()}
              className="rounded-md border border-border px-3 py-1.5 text-xs font-semibold text-navy hover:bg-surface-muted"
            >
              {copied ? "Copied" : "Copy all emails"}
            </button>
          ) : null}
          <button
            type="button"
            onClick={() => {
              setLoading(true);
              void load().finally(() => setLoading(false));
            }}
            className="rounded-md border border-border px-3 py-1.5 text-xs font-semibold text-navy hover:bg-surface-muted"
          >
            Refresh
          </button>
        </div>
      </div>

      {error ? <p className="text-sm text-red-600">{error}</p> : null}

      {loading ? (
        <p className="text-sm text-text-body">Loading subscribers...</p>
      ) : subscribers.length === 0 ? (
        <div className="rounded-xl border border-dashed border-border bg-white px-6 py-16 text-center">
          <p className="text-lg font-semibold text-navy">No subscribers yet</p>
          <p className="mt-1 text-sm text-text-body">
            New newsletter signups from the footer will show up here.
          </p>
        </div>
      ) : (
        <div className="overflow-hidden rounded-xl border border-border bg-white">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-border bg-surface-muted text-xs font-semibold uppercase tracking-wide text-navy">
              <tr>
                <th className="px-5 py-3">Email</th>
                <th className="px-5 py-3">Subscribed on</th>
                <th className="px-5 py-3">Notice emailed</th>
                <th className="px-5 py-3" />
              </tr>
            </thead>
            <tbody>
              {subscribers.map((item) => (
                <tr key={item.id} className="border-b border-border last:border-0">
                  <td className="px-5 py-3 font-medium text-navy">
                    <a href={`mailto:${item.email}`} className="hover:text-gold">
                      {item.email}
                    </a>
                  </td>
                  <td className="px-5 py-3 text-text-body">{formatDate(item.createdAt)}</td>
                  <td className="px-5 py-3 text-text-body">
                    {item.emailSent ? "Sent" : "Not sent"}
                  </td>
                  <td className="px-5 py-3 text-right">
                    <button
                      type="button"
                      disabled={busyId === item.id}
                      onClick={() => void remove(item)}
                      className="rounded-md border border-red-200 px-3 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-50 disabled:opacity-60"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
