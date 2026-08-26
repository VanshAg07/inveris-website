import { Search, PenLine, Play, BarChart3 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconCircle } from "@/components/ui/IconCircle";
import { approachContent } from "@/lib/content";

const iconMap = {
  search: Search,
  pen: PenLine,
  play: Play,
  chart: BarChart3,
};

export function ApproachSection() {
  return (
    <section className="py-16 lg:py-24 bg-navy relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <Container className="relative">
        <SectionHeading
          tag={approachContent.tag}
          title={approachContent.title}
          align="center"
          light
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px border-t-2 border-dashed border-gold/40" />

          {approachContent.steps.map((step) => {
            const Icon = iconMap[step.icon as keyof typeof iconMap];
            return (
              <div key={step.number} className="text-center space-y-4 relative">
                <div className="flex justify-center">
                  <IconCircle variant="gold" size="lg">
                    <Icon size={24} />
                  </IconCircle>
                </div>

                <div>
                  <span className="text-gold text-sm font-bold">{step.number}.</span>
                  <h3 className="text-white font-bold text-lg mt-1">{step.title}</h3>
                </div>

                <p className="text-white/70 text-sm leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
