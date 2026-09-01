import { aboutPageContent } from "@/lib/content";
import { getApiBaseUrl } from "@/lib/home-content";

export type AboutCtaLink = {
  label: string;
  href: string;
};

export type AboutHeroContent = {
  tag: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export type AboutWhoWeAreContent = {
  tag: string;
  title: string;
  paragraphs: string[];
  highlightPhrase: string;
  cta: AboutCtaLink;
  image: string;
  imageAlt: string;
  card: {
    title: string;
    description: string;
  };
};

export type AboutMissionFooter = {
  icon: string;
  prefix: string;
  highlight: string;
};

export type AboutVisionFooter = {
  icon: string;
  text: string;
};

export type AboutMissionBlock = {
  tag: string;
  title: string;
  icon: string;
  items: string[];
  footer: AboutMissionFooter;
};

export type AboutVisionBlock = {
  tag: string;
  title: string;
  icon: string;
  items: string[];
  footer: AboutVisionFooter;
};

export type AboutMissionVisionContent = {
  backgroundImage: string;
  mission: AboutMissionBlock;
  vision: AboutVisionBlock;
};

export type AboutCtaContent = {
  title: string;
  description: string;
  cta: AboutCtaLink;
};

export type AboutPageContent = {
  hero: AboutHeroContent;
  whoWeAre: AboutWhoWeAreContent;
  missionVision: AboutMissionVisionContent;
  cta: AboutCtaContent;
};

export function getFallbackAboutContent(): AboutPageContent {
  return {
    hero: { ...aboutPageContent.hero },
    whoWeAre: {
      ...aboutPageContent.whoWeAre,
      imageAlt: "Modern glass office building",
    },
    missionVision: {
      backgroundImage: aboutPageContent.missionVision.backgroundImage,
      mission: {
        ...aboutPageContent.missionVision.mission,
        items: [...aboutPageContent.missionVision.mission.items],
        footer: { ...aboutPageContent.missionVision.mission.footer },
      },
      vision: {
        ...aboutPageContent.missionVision.vision,
        items: [...aboutPageContent.missionVision.vision.items],
        footer: { ...aboutPageContent.missionVision.vision.footer },
      },
    },
    cta: {
      ...aboutPageContent.cta,
      cta: { ...aboutPageContent.cta.cta },
    },
  };
}

export async function fetchAboutContent(): Promise<AboutPageContent> {
  try {
    const res = await fetch(`${getApiBaseUrl()}/api/content/about`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to load about content");
    const data = await res.json();
    if (!data?.content) throw new Error("Missing about content");
    return data.content as AboutPageContent;
  } catch {
    return getFallbackAboutContent();
  }
}
