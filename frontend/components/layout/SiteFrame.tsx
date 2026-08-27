"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { NavProvider } from "@/components/providers/NavProvider";
import type { FooterContent } from "@/lib/footer-content";

export function SiteFrame({
  children,
  footer,
}: {
  children: React.ReactNode;
  footer: FooterContent;
}) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <NavProvider>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer content={footer} />
    </NavProvider>
  );
}
