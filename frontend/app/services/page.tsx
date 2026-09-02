import { PageHero } from "@/components/shared/PageHero";
import { PageCtaBanner } from "@/components/shared/PageCtaBanner";
import { ConsultingCallSection } from "@/components/services/ConsultingCallSection";
import { ServicesOfferSection } from "@/components/services/ServicesOfferSection";
import { fetchServicesContent } from "@/lib/services-content";

export const metadata = {
  title: "Services",
  description:
    "Explore Inveris Solutions LLP integrated service lines — management consulting, recruitment, compliance & financial services, and internal audit.",
};

export const dynamic = "force-dynamic";

export default async function ServicesPage() {
  const services = await fetchServicesContent();

  return (
    <>
      <PageHero
        tag={services.hero.tag}
        title={services.hero.title}
        description={services.hero.description}
        image={services.hero.image}
        imageAlt={services.hero.imageAlt}
      />
      <ServicesOfferSection content={services.offer} />
      <ConsultingCallSection content={services.consultingCall} />
      <PageCtaBanner
        title={services.cta.title}
        description={services.cta.description}
        cta={services.cta.cta}
      />
    </>
  );
}
