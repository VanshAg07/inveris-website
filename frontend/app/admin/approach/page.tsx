"use client";

import { useEffect, useState } from "react";
import { ApproachEditor } from "@/components/admin/ApproachEditor";
import {
  fetchApproachContent,
  getFallbackApproachContent,
  type ApproachPageContent,
} from "@/lib/approach-content";

export default function AdminApproachPage() {
  const [content, setContent] = useState<ApproachPageContent | null>(null);

  useEffect(() => {
    async function load() {
      try {
        setContent(await fetchApproachContent());
      } catch {
        setContent(getFallbackApproachContent());
      }
    }
    void load();
  }, []);

  if (!content) {
    return <p className="text-sm text-text-body">Loading approach content...</p>;
  }

  return <ApproachEditor initialContent={content} />;
}
