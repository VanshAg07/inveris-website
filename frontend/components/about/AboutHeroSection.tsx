import { PageHero } from "@/components/shared/PageHero";
import { aboutPageContent } from "@/lib/content";

export function AboutHeroSection() {
  const { hero } = aboutPageContent;

  return (
    <PageHero
      tag={hero.tag}
      title={hero.title}
      description={hero.description}
      image={hero.image}
      imageAlt={hero.imageAlt}
    />
  );
}
