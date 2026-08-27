"use client";

import { useEffect, useState } from "react";
import { LeadershipEditor } from "@/components/admin/LeadershipEditor";
import {
  fetchLeadershipContent,
  getFallbackLeadershipContent,
  type LeadershipPageContent,
} from "@/lib/leadership-content";

export default function AdminLeadershipPage() {
  const [content, setContent] = useState<LeadershipPageContent | null>(null);

  useEffect(() => {
    async function load() {
      try {
        setContent(await fetchLeadershipContent());
      } catch {
        setContent(getFallbackLeadershipContent());
      }
    }
    void load();
  }, []);

  if (!content) {
    return (
      <p className="text-sm text-text-body">Loading leadership content...</p>
    );
  }

  return <LeadershipEditor initialContent={content} />;
}
