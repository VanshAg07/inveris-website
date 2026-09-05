"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionTag } from "@/components/ui/SectionTag";
import { ServiceLineCard } from "@/components/services/ServiceLineCard";
import { ServiceEnquiryModal } from "@/components/services/ServiceEnquiryModal";
import { BlurFade } from "@/components/magic/blur-fade";
import type { ServicesOfferContent } from "@/lib/services-content";

export function ServicesOfferSection({ content }: { content: ServicesOfferContent }) {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <section className="py-20 lg:py-28 bg-surface">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-12 lg:mb-16 items-start">
          <div className="space-y-4">
            <SectionTag>{content.tag}</SectionTag>
            <h2 className="text-3xl md:text-5xl font-bold text-heading leading-[1.12]">
              {content.title}
            </h2>
          </div>
          <p className="text-paragraph leading-relaxed lg:pt-8">{content.description}</p>
        </div>

        <div className="space-y-6">
          {content.serviceLines.map((service, index) => (
            <BlurFade key={service.id} delay={index * 0.06}>
              <ServiceLineCard
                title={service.title}
                description={service.description}
                items={service.items}
                image={service.image}
                icon={service.icon}
                onEnquire={setSelectedService}
              />
            </BlurFade>
          ))}
        </div>
      </Container>
      <ServiceEnquiryModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
}
