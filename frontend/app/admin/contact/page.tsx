"use client";

import { useEffect, useState } from "react";
import { ContactEditor } from "@/components/admin/ContactEditor";
import {
  fetchContactContent,
  getFallbackContactContent,
  type ContactPageContent,
} from "@/lib/contact-content";

export default function AdminContactPage() {
  const [content, setContent] = useState<ContactPageContent | null>(null);

  useEffect(() => {
    async function load() {
      try {
        setContent(await fetchContactContent());
      } catch {
        setContent(getFallbackContactContent());
      }
    }
    void load();
  }, []);

  if (!content) {
    return <p className="text-sm text-text-body">Loading contact content...</p>;
  }

  return <ContactEditor initialContent={content} />;
}
