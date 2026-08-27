import { servicesPageContent } from "@/lib/content";
import { getApiBaseUrl } from "@/lib/home-content";

export type ServicesCtaLink = {
  label: string;
  href: string;
};

export type ServicesHeroContent = {
  tag: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export type ServicesLineItem = {
  id: string;
  title: string;
  description: string;
  items: string[];
  image: string;
  icon: string;
  imagePosition: "left" | "right";
};

export type ServicesOfferContent = {
  tag: string;
  title: string;
  description: string;
  serviceLines: ServicesLineItem[];
};

export type ServicesWhyItem = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type ServicesWhyContent = {
  tag: string;
  title: string;
  items: ServicesWhyItem[];
};

export type ServicesCtaContent = {
  title: string;
  description: string;
  cta: ServicesCtaLink;
};

export type ServicesPageContent = {
  hero: ServicesHeroContent;
  offer: ServicesOfferContent;
  whyItMatters: ServicesWhyContent;
  cta: ServicesCtaContent;
};

export function getFallbackServicesContent(): ServicesPageContent {
  return {
    hero: { ...servicesPageContent.hero },
    offer: {
      tag: servicesPageContent.offer.tag,
      title: servicesPageContent.offer.title,
      description: servicesPageContent.offer.description,
      serviceLines: servicesPageContent.offer.serviceLines.map((line, index) => ({
        ...line,
        id: `line-${index + 1}`,
        items: [...line.items],
      })),
    },
    whyItMatters: {
      tag: servicesPageContent.whyItMatters.tag,
      title: servicesPageContent.whyItMatters.title,
      items: servicesPageContent.whyItMatters.items.map((item, index) => ({
        ...item,
        id: `why-${index + 1}`,
      })),
    },
    cta: {
      ...servicesPageContent.cta,
      cta: { ...servicesPageContent.cta.cta },
    },
  };
}

export async function fetchServicesContent(): Promise<ServicesPageContent> {
  try {
    const res = await fetch(`${getApiBaseUrl()}/api/content/services`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to load services content");
    const data = await res.json();
    if (!data?.content) throw new Error("Missing services content");
    return data.content as ServicesPageContent;
  } catch {
    return getFallbackServicesContent();
  }
}
