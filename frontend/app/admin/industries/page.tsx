"use client";

import { useEffect, useState } from "react";
import { IndustriesEditor } from "@/components/admin/IndustriesEditor";
import {
  fetchIndustriesContent,
  getFallbackIndustriesContent,
  type IndustriesPageContent,
} from "@/lib/industries-content";

export default function AdminIndustriesPage() {
  const [content, setContent] = useState<IndustriesPageContent | null>(null);

  useEffect(() => {
    async function load() {
      try {
        setContent(await fetchIndustriesContent());
      } catch {
        setContent(getFallbackIndustriesContent());
      }
    }
    void load();
  }, []);

  if (!content) {
    return <p className="text-sm text-text-body">Loading industries content...</p>;
  }

  return <IndustriesEditor initialContent={content} />;
}
