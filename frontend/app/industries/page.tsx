import { IndustriesGridSection } from "@/components/industries/IndustriesGridSection";
import { IndustryValueBar } from "@/components/industries/IndustryValueBar";
import { OverlayHero } from "@/components/shared/OverlayHero";
import { PageCtaBanner } from "@/components/shared/PageCtaBanner";
import { industriesPageContent } from "@/lib/content";

export const metadata = {
  title: "Industries",
  description:
    "Inveris Solutions LLP serves manufacturing, healthcare, technology, financial services, and more with integrated industry expertise.",
};

export default function IndustriesPage() {
  const { hero, cta } = industriesPageContent;

  return (
    <>
      <OverlayHero
        tag={hero.tag}
        title={hero.title}
        description={hero.description}
        image={hero.image}
        imageAlt={hero.imageAlt}
      />
      <IndustriesGridSection />
      <IndustryValueBar />
      <PageCtaBanner
        title={cta.title}
        description={cta.description}
        cta={cta.cta}
        phone={cta.phone}
      />
    </>
  );
}
