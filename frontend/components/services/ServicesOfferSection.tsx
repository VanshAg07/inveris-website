import { Container } from "@/components/ui/Container";
import { SectionTag } from "@/components/ui/SectionTag";
import { ServiceLineCard } from "@/components/services/ServiceLineCard";
import { servicesPageContent } from "@/lib/content";

export function ServicesOfferSection() {
  const { offer } = servicesPageContent;

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-12 lg:mb-16 items-start">
          <div className="space-y-4">
            <SectionTag withLine>{offer.tag}</SectionTag>
            <h2 className="text-3xl md:text-4xl font-bold text-heading leading-tight">
              {offer.title}
            </h2>
          </div>
          <p className="text-paragraph leading-relaxed lg:pt-8">{offer.description}</p>
        </div>

        <div className="space-y-6">
          {offer.serviceLines.map((service) => (
            <ServiceLineCard
              key={service.title}
              title={service.title}
              description={service.description}
              items={service.items}
              image={service.image}
              icon={service.icon}
              imagePosition={service.imagePosition}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
