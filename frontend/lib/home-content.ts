import {
  aboutContent,
  approachContent,
  ctaContent,
  heroContent,
  servicesContent,
  valuePropositions,
} from "@/lib/content";

export type CtaLink = {
  label: string;
  href: string;
};

export type HomeHeroContent = {
  tag: string;
  title: string;
  description: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
  backgroundImage: string;
  backgroundImageAlt: string;
};

export type HomeValueItem = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type HomeAboutFeature = {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
};

export type HomeAboutContent = {
  tag: string;
  title: string;
  description: string;
  cta: CtaLink;
  backgroundImage: string;
  features: HomeAboutFeature[];
};

export type HomeServiceItem = {
  id: string;
  title: string;
  icon: string;
  image: string;
  items: string[];
  href: string;
  linkLabel: string;
};

export type HomeServicesContent = {
  tag: string;
  title: string;
  services: HomeServiceItem[];
};

export type HomeApproachStep = {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
};

export type HomeApproachContent = {
  tag: string;
  title: string;
  steps: HomeApproachStep[];
};

export type HomeCtaContent = {
  title: string;
  description: string;
  cta: CtaLink;
  image: string;
  imageAlt: string;
};

export type HomeContent = {
  hero: HomeHeroContent;
  valuePropositions: HomeValueItem[];
  about: HomeAboutContent;
  services: HomeServicesContent;
  approach: HomeApproachContent;
  cta: HomeCtaContent;
};

export function getFallbackHomeContent(): HomeContent {
  return {
    hero: {
      ...heroContent,
      backgroundImageAlt: "Modern corporate skyscrapers",
    },
    valuePropositions: valuePropositions.map((item, index) => ({
      ...item,
      id: `vp-${index + 1}`,
    })),
    about: {
      ...aboutContent,
      features: aboutContent.features.map((feature, index) => ({
        ...feature,
        id: `feat-${index + 1}`,
      })),
    },
    services: {
      tag: servicesContent.tag,
      title: servicesContent.title,
      services: servicesContent.services.map((service, index) => ({
        ...service,
        id: `svc-${index + 1}`,
        linkLabel: "Learn More",
      })),
    },
    approach: {
      tag: approachContent.tag,
      title: approachContent.title,
      steps: approachContent.steps.map((step, index) => ({
        ...step,
        id: `step-${index + 1}`,
      })),
    },
    cta: {
      ...ctaContent,
      imageAlt: "Inveris branded workspace",
    },
  };
}

export function getApiBaseUrl() {
  return process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";
}

export function resolveMediaUrl(src: string) {
  if (!src) return "";
  if (src.startsWith("http://") || src.startsWith("https://")) return src;
  if (src.startsWith("/uploads/")) return `${getApiBaseUrl()}${src}`;
  return src;
}

export async function fetchHomeContent(): Promise<HomeContent> {
  try {
    const res = await fetch(`${getApiBaseUrl()}/api/content/home`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to load home content");
    const data = await res.json();
    if (!data?.content) throw new Error("Missing home content");
    return data.content as HomeContent;
  } catch {
    return getFallbackHomeContent();
  }
}
