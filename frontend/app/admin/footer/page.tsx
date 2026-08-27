"use client";

import { useEffect, useState } from "react";
import { FooterEditor } from "@/components/admin/FooterEditor";
import {
  fetchFooterContent,
  getFallbackFooterContent,
  type FooterContent,
} from "@/lib/footer-content";

export default function AdminFooterPage() {
  const [content, setContent] = useState<FooterContent | null>(null);

  useEffect(() => {
    async function load() {
      try {
        setContent(await fetchFooterContent());
      } catch {
        setContent(getFallbackFooterContent());
      }
    }
    void load();
  }, []);

  if (!content) {
    return <p className="text-sm text-text-body">Loading footer content...</p>;
  }

  return <FooterEditor initialContent={content} />;
}
