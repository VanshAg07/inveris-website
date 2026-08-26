import { Container } from "@/components/ui/Container";
import { ExpertiseDiagram } from "@/components/approach/ExpertiseDiagram";
import { approachPageContent } from "@/lib/content";

export function ConnectedExpertiseSection() {
  const { connectedExpertise } = approachPageContent;

  return (
    <section className="py-16 lg:py-24 bg-surface-alt relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50 Q25 30 50 50 T100 50' fill='none' stroke='%230a1a2f' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

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
