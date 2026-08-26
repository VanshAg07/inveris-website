import { BarChart3, ShieldCheck, Target, User } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTag } from "@/components/ui/SectionTag";
import { leadershipPageContent } from "@/lib/content";

const iconMap = {
  user: User,
  target: Target,
  shield: ShieldCheck,
  chart: BarChart3,
};

export function LeadershipPhilosophySection() {
  const { philosophy } = leadershipPageContent;

  return (
    <section className="py-16 lg:py-24 bg-surface-alt">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-5">
            <SectionTag withLine>{philosophy.tag}</SectionTag>
            <h2 className="text-3xl md:text-4xl font-bold text-heading leading-tight">
              {philosophy.title}
            </h2>
            <p className="text-paragraph leading-relaxed">{philosophy.description}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {philosophy.items.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <div key={item.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-alt border border-border flex items-center justify-center shrink-0">
                    <Icon size={22} className="text-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-bold text-heading text-sm mb-1.5">{item.title}</h3>
                    <p className="text-sm text-paragraph leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
