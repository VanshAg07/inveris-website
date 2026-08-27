"use client";

import { useEffect, useState } from "react";
import { HomeEditor } from "@/components/admin/HomeEditor";
import { fetchHomeContent, getFallbackHomeContent, type HomeContent } from "@/lib/home-content";

export default function AdminHomePage() {
  const [content, setContent] = useState<HomeContent | null>(null);

  useEffect(() => {
    async function load() {
      try {
        setContent(await fetchHomeContent());
      } catch {
        setContent(getFallbackHomeContent());
      }
    }
    void load();
  }, []);

  if (!content) {
    return <p className="text-sm text-text-body">Loading home content...</p>;
  }

  return <HomeEditor initialContent={content} />;
}
