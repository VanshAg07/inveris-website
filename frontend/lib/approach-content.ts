import { approachPageContent } from "@/lib/content";
import { getApiBaseUrl } from "@/lib/home-content";

export type ApproachCtaLink = {
  label: string;
  href: string;
};

export type ApproachPathStep = {
  id: string;
  number: string;
  title: string;
  position: string;
};

export type ApproachHeroContent = {
  tag: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  pathSteps: ApproachPathStep[];
};

export type ApproachFourStepItem = {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
  items: string[];
};

export type ApproachFourStepsContent = {
  tag: string;
  title: string;
  subtitle: string;
  steps: ApproachFourStepItem[];
};

export type ApproachExpertiseNode = {
  id: string;
  label: string;
  description: string;
  icon: string;
  position: string;
  align: string;
};

export type ApproachConnectedExpertiseContent = {
  title: string;
  titleAccent: string;
  description: string;
  quote: string;
  nodes: ApproachExpertiseNode[];
};

export type ApproachCtaContent = {
  title: string;
  description: string;
  cta: ApproachCtaLink;
};

export type ApproachPageContent = {
  hero: ApproachHeroContent;
  fourSteps: ApproachFourStepsContent;
  connectedExpertise: ApproachConnectedExpertiseContent;
  cta: ApproachCtaContent;
};

export function getFallbackApproachContent(): ApproachPageContent {
  return {
    hero: {
      tag: approachPageContent.hero.tag,
      title: approachPageContent.hero.title,
      description: approachPageContent.hero.description,
      image: approachPageContent.hero.image,
      imageAlt: approachPageContent.hero.imageAlt,
      pathSteps: approachPageContent.hero.pathSteps.map((step, index) => ({
        ...step,
        id: `path-${index + 1}`,
      })),
    },
    fourSteps: {
      tag: approachPageContent.fourSteps.tag,
      title: approachPageContent.fourSteps.title,
      subtitle: approachPageContent.fourSteps.subtitle,
      steps: approachPageContent.fourSteps.steps.map((step, index) => ({
        ...step,
        id: `step-${index + 1}`,
        items: [...step.items],
      })),
    },
    connectedExpertise: {
      title: approachPageContent.connectedExpertise.title,
      titleAccent: approachPageContent.connectedExpertise.titleAccent,
      description: approachPageContent.connectedExpertise.description,
      quote: approachPageContent.connectedExpertise.quote,
      nodes: approachPageContent.connectedExpertise.nodes.map((node, index) => ({
        ...node,
        id: `node-${index + 1}`,
      })),
    },
    cta: {
      ...approachPageContent.cta,
      cta: { ...approachPageContent.cta.cta },
    },
  };
}

export async function fetchApproachContent(): Promise<ApproachPageContent> {
  try {
    const res = await fetch(`${getApiBaseUrl()}/api/content/approach`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to load approach content");
    const data = await res.json();
    if (!data?.content) throw new Error("Missing approach content");
    return data.content as ApproachPageContent;
  } catch {
    return getFallbackApproachContent();
  }
}
