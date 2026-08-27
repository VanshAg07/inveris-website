import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SiteFrame } from "@/components/layout/SiteFrame";
import { siteConfig } from "@/lib/content";
import { fetchFooterContent } from "@/lib/footer-content";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    type: "website",
    url: siteConfig.url,
    images: [
      {
        url: "/images/Logo.jpeg",
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/images/Logo.jpeg"],
  },
  icons: {
    icon: "/images/Logo.jpeg",
    apple: "/images/Logo.jpeg",
  },
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const footer = await fetchFooterContent();

  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <SiteFrame footer={footer}>{children}</SiteFrame>
      </body>
    </html>
  );
}
