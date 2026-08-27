import { IndustriesGridSection } from "@/components/industries/IndustriesGridSection";
import { IndustryValueBar } from "@/components/industries/IndustryValueBar";
import { OverlayHero } from "@/components/shared/OverlayHero";
import { PageCtaBanner } from "@/components/shared/PageCtaBanner";
import { fetchIndustriesContent } from "@/lib/industries-content";

export const metadata = {
  title: "Industries",
  description:
    "Inveris Solutions LLP serves manufacturing, healthcare, technology, financial services, and more with integrated industry expertise.",
};

export const dynamic = "force-dynamic";

export default async function IndustriesPage() {
  const industries = await fetchIndustriesContent();

  return (
    <>
      <OverlayHero
        tag={industries.hero.tag}
        title={industries.hero.title}
        description={industries.hero.description}
        image={industries.hero.image}
        imageAlt={industries.hero.imageAlt}
      />
      <IndustriesGridSection content={industries.industriesWeServe} />
      <IndustryValueBar content={industries.valueBar} />
      <PageCtaBanner
        title={industries.cta.title}
        description={industries.cta.description}
        cta={industries.cta.cta}
      />
    </>
  );
}
