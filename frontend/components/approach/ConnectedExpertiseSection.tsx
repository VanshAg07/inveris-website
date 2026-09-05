import { Container } from "@/components/ui/Container";
import { ExpertiseDiagram } from "@/components/approach/ExpertiseDiagram";
import { MagicCard } from "@/components/magic/magic-card";
import type { ApproachConnectedExpertiseContent } from "@/lib/approach-content";

export function ConnectedExpertiseSection({
  content,
}: {
  content: ApproachConnectedExpertiseContent;
}) {
  const connectedExpertise = content;

  return (
    <section className="relative overflow-hidden bg-surface-alt py-20 lg:py-28">
      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <span className="block h-px w-10 bg-gold" aria-hidden="true" />
            <h2 className="text-3xl md:text-5xl font-bold leading-[1.12]">
              <span className="text-heading">{connectedExpertise.title}</span>
              <br />
              <span className="text-gold">{connectedExpertise.titleAccent}</span>
            </h2>
            <p className="text-paragraph leading-relaxed">{connectedExpertise.description}</p>
            <MagicCard className="p-6">
              <div className="flex gap-4">
                <span className="text-4xl text-gold leading-none font-display" aria-hidden="true">
                  &ldquo;
                </span>
                <p className="text-heading font-medium leading-relaxed pt-1">
                  {connectedExpertise.quote}
                </p>
              </div>
            </MagicCard>
          </div>
          <ExpertiseDiagram nodes={connectedExpertise.nodes} />
        </div>
      </Container>
    </section>
  );
}
