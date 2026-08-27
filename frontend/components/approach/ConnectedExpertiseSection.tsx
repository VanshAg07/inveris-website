import { Container } from "@/components/ui/Container";
import { ExpertiseDiagram } from "@/components/approach/ExpertiseDiagram";
import type { ApproachConnectedExpertiseContent } from "@/lib/approach-content";

export function ConnectedExpertiseSection({
  content,
}: {
  content: ApproachConnectedExpertiseContent;
}) {
  const connectedExpertise = content;

  return (
    <section className="py-16 lg:py-24 bg-surface-alt relative overflow-hidden">
      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <span className="block h-px w-10 bg-gold" aria-hidden="true" />

            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              <span className="text-heading">{connectedExpertise.title}</span>
              <br />
              <span className="text-gold">{connectedExpertise.titleAccent}</span>
            </h2>

            <p className="text-paragraph leading-relaxed">
              {connectedExpertise.description}
            </p>

            <div className="bg-white rounded-xl p-6 flex gap-4 shadow-sm border border-border/50">
              <span className="text-4xl text-gold leading-none font-serif" aria-hidden="true">
                &ldquo;
              </span>
              <p className="text-heading font-medium leading-relaxed pt-1">
                {connectedExpertise.quote}
              </p>
            </div>
          </div>

          <ExpertiseDiagram nodes={connectedExpertise.nodes} />
        </div>
      </Container>
    </section>
  );
}
