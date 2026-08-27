import { PageHero } from "@/components/shared/PageHero";
import type { AboutHeroContent } from "@/lib/about-content";

export function AboutHeroSection({ content }: { content: AboutHeroContent }) {
  return (
    <PageHero
      tag={content.tag}
      title={content.title}
      description={content.description}
      image={content.image}
      imageAlt={content.imageAlt}
    />
  );
}
