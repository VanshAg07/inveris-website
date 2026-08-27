"use client";

import { useEffect, useState } from "react";
import { AboutEditor } from "@/components/admin/AboutEditor";
import {
  fetchAboutContent,
  getFallbackAboutContent,
  type AboutPageContent,
} from "@/lib/about-content";

export default function AdminAboutPage() {
  const [content, setContent] = useState<AboutPageContent | null>(null);

  useEffect(() => {
    async function load() {
      try {
        setContent(await fetchAboutContent());
      } catch {
        setContent(getFallbackAboutContent());
      }
    }
    void load();
  }, []);

  if (!content) {
    return <p className="text-sm text-text-body">Loading about content...</p>;
  }

  return <AboutEditor initialContent={content} />;
}
