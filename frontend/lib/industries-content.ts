import { industriesPageContent } from "@/lib/content";
import { getApiBaseUrl } from "@/lib/home-content";

export type IndustriesCtaLink = {
  label: string;
  href: string;
};

export type IndustriesHeroContent = {
  tag: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export type IndustryTimelineItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
};

export type IndustriesWeServeContent = {
  tag: string;
  title: string;
  description: string;
  industries: IndustryTimelineItem[];
};

export type IndustriesValueItem = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type IndustriesValueBarContent = {
  title: string;
  items: IndustriesValueItem[];
};

export type IndustriesCtaContent = {
  title: string;
  description: string;
  cta: IndustriesCtaLink;
};

export type IndustriesPageContent = {
  hero: IndustriesHeroContent;
  industriesWeServe: IndustriesWeServeContent;
  valueBar: IndustriesValueBarContent;
  cta: IndustriesCtaContent;
};

export function getFallbackIndustriesContent(): IndustriesPageContent {
  return {
    hero: { ...industriesPageContent.hero },
    industriesWeServe: {
      tag: industriesPageContent.industriesWeServe.tag,
      title: industriesPageContent.industriesWeServe.title,
      description: industriesPageContent.industriesWeServe.description,
      industries: industriesPageContent.industriesWeServe.industries.map(
        (industry, index) => ({
          id: `industry-${index + 1}`,
          title: industry.title,
          description: industry.description,
          image: industry.image || "",
          icon: industry.icon,
        })
      ),
    },
    valueBar: {
      title: industriesPageContent.valueBar.title,
      items: industriesPageContent.valueBar.items.map((item, index) => ({
        ...item,
        id: `value-${index + 1}`,
      })),
    },
    cta: {
      ...industriesPageContent.cta,
      cta: { ...industriesPageContent.cta.cta },
    },
  };
}

export async function fetchIndustriesContent(): Promise<IndustriesPageContent> {
  try {
    const res = await fetch(`${getApiBaseUrl()}/api/content/industries`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to load industries content");
    const data = await res.json();
    if (!data?.content) throw new Error("Missing industries content");
    return data.content as IndustriesPageContent;
  } catch {
    return getFallbackIndustriesContent();
  }
}
