import { PageHero } from "@/components/shared/PageHero";
import { PageCtaBanner } from "@/components/shared/PageCtaBanner";
import { ServicesOfferSection } from "@/components/services/ServicesOfferSection";
import { WhyItMattersSection } from "@/components/services/WhyItMattersSection";
import { servicesPageContent } from "@/lib/content";

export const metadata = {
  title: "Services",
  description:
    "Explore Inveris Solutions LLP integrated service lines — management consulting, recruitment, compliance & financial services, and internal audit.",
};

export default function ServicesPage() {
  const { hero, cta } = servicesPageContent;

  return (
    <>
      <PageHero
        tag={hero.tag}
        title={hero.title}
        description={hero.description}
        image={hero.image}
        imageAlt={hero.imageAlt}
      />
      <ServicesOfferSection />
      <WhyItMattersSection />
      <PageCtaBanner
        title={cta.title}
        description={cta.description}
        cta={cta.cta}
      />
    </>
  );
}
