"use client";

import { Container } from "@/components/ui/Container";
import { SectionTag } from "@/components/ui/SectionTag";
import { CmsImage } from "@/components/ui/CmsImage";
import { Timeline } from "@/components/ui/timeline";
import type { IndustriesWeServeContent } from "@/lib/industries-content";

export function IndustriesGridSection({
  content,
}: {
  content: IndustriesWeServeContent;
}) {
  const data = content.industries.map((industry) => ({
    title: industry.title,
    content: (
      <div className="space-y-6">
        <p className="text-base leading-relaxed text-paragraph md:text-lg">
          {industry.description}
        </p>
        {industry.image ? (
          <div className="overflow-hidden rounded-2xl transition-transform duration-500 ease-out hover:scale-[1.03]">
            <CmsImage
              src={industry.image}
              alt={industry.title}
              width={900}
              height={560}
              className="h-40 w-full object-cover shadow-[var(--shadow-card)] md:h-52 lg:h-60"
            />
          </div>
        ) : null}
      </div>
    ),
  }));

  return (
    <section className="bg-surface py-16 lg:py-24">
      <Container>
        <div className="mb-8 grid grid-cols-1 items-start gap-8 lg:mb-4 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <SectionTag withLine>{content.tag}</SectionTag>
            <h2 className="text-3xl leading-tight font-bold text-heading md:text-4xl">
              {content.title}
            </h2>
          </div>
          <p className="leading-relaxed text-paragraph lg:pt-8">
            {content.description}
          </p>
        </div>

        <Timeline data={data} />
      </Container>
    </section>
  );
}
