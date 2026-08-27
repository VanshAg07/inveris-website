"use client";

import { useEffect, useState } from "react";
import { ServicesEditor } from "@/components/admin/ServicesEditor";
import {
  fetchServicesContent,
  getFallbackServicesContent,
  type ServicesPageContent,
} from "@/lib/services-content";

export default function AdminServicesPage() {
  const [content, setContent] = useState<ServicesPageContent | null>(null);

  useEffect(() => {
    async function load() {
      try {
        setContent(await fetchServicesContent());
      } catch {
        setContent(getFallbackServicesContent());
      }
    }
    void load();
  }, []);

  if (!content) {
    return <p className="text-sm text-text-body">Loading services content...</p>;
  }

  return <ServicesEditor initialContent={content} />;
}
