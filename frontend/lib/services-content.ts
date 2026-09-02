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

export type ServicesCtaContent = {
  title: string;
  description: string;
  cta: ServicesCtaLink;
};

export type ServicesConsultingImage = {
  id: string;
  src: string;
  alt: string;
};

export type ServicesConsultingCallContent = {
  tag: string;
  title: string;
  description: string;
  submitLabel: string;
  images: ServicesConsultingImage[];
};

export type ServicesPageContent = {
  hero: ServicesHeroContent;
  offer: ServicesOfferContent;
  consultingCall: ServicesConsultingCallContent;
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
    consultingCall: {
      tag: servicesPageContent.consultingCall.tag,
      title: servicesPageContent.consultingCall.title,
      description: servicesPageContent.consultingCall.description,
      submitLabel: servicesPageContent.consultingCall.submitLabel,
      images: servicesPageContent.consultingCall.images.map((image, index) => ({
        ...image,
        id: image.id || `consult-img-${index + 1}`,
      })),
    },
    cta: {
      ...servicesPageContent.cta,
      cta: { ...servicesPageContent.cta.cta },
    },
  };
}

function withConsultingCall(content: ServicesPageContent): ServicesPageContent {
  const fallback = getFallbackServicesContent().consultingCall;
  const incoming = content.consultingCall;
  const { whyItMatters: _removed, ...rest } = content as ServicesPageContent & {
    whyItMatters?: unknown;
  };

  return {
    ...rest,
    consultingCall: incoming
      ? {
          tag: incoming.tag || fallback.tag,
          title: incoming.title || fallback.title,
          description: incoming.description || fallback.description,
          submitLabel: incoming.submitLabel || fallback.submitLabel,
          images:
            Array.isArray(incoming.images) && incoming.images.length > 0
              ? incoming.images.map((image, index) => ({
                  id: image.id || `consult-img-${index + 1}`,
                  src: image.src || "",
                  alt: image.alt || "",
                }))
              : fallback.images,
        }
      : fallback,
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
    return withConsultingCall(data.content as ServicesPageContent);
  } catch {
    return getFallbackServicesContent();
  }
}
