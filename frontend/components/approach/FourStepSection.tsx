import { Container } from "@/components/ui/Container";
import { SectionTag } from "@/components/ui/SectionTag";
import { ApproachStepCard } from "@/components/approach/ApproachStepCard";
import type { ApproachFourStepsContent } from "@/lib/approach-content";

export function FourStepSection({
  content,
}: {
  content: ApproachFourStepsContent;
}) {
  const fourSteps = content;

  return (
    <section className="py-16 lg:py-24 bg-navy relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <Container className="relative">
        <div className="text-center space-y-4 mb-14 lg:mb-16 max-w-3xl mx-auto">
          <SectionTag light withLine className="justify-center">
            {fourSteps.tag}
          </SectionTag>
          <h2 className="text-3xl md:text-4xl font-bold text-heading-inverse leading-tight">
            {fourSteps.title}
          </h2>
          <p className="text-base md:text-lg text-paragraph-inverse leading-relaxed">
            {fourSteps.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-6 relative">
          {fourSteps.steps.map((step) => (
            <ApproachStepCard
              key={step.id}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
              items={step.items}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
