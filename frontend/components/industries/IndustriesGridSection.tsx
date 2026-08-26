import { Container } from "@/components/ui/Container";
import { SectionTag } from "@/components/ui/SectionTag";
import { IndustryCard } from "@/components/industries/IndustryCard";
import { industriesPageContent } from "@/lib/content";

export function IndustriesGridSection() {
  const { industriesWeServe } = industriesPageContent;

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-12 lg:mb-16 items-start">
          <div className="space-y-4">
            <SectionTag withLine>{industriesWeServe.tag}</SectionTag>
            <h2 className="text-3xl md:text-4xl font-bold text-heading leading-tight">
              {industriesWeServe.title}
            </h2>
          </div>
          <p className="text-paragraph leading-relaxed lg:pt-8">
            {industriesWeServe.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {industriesWeServe.industries.map((industry) => (
            <IndustryCard
              key={industry.title}
              title={industry.title}
              description={industry.description}
              icon={industry.icon}
              href={industry.href}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
