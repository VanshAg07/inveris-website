import { BarChart3, ShieldCheck, Target, User } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTag } from "@/components/ui/SectionTag";
import { MagicCard } from "@/components/magic/magic-card";
import { BlurFade } from "@/components/magic/blur-fade";
import type { LeadershipPhilosophyContent } from "@/lib/leadership-content";

const iconMap = {
  user: User,
  target: Target,
  shield: ShieldCheck,
  chart: BarChart3,
};

export function LeadershipPhilosophySection({
  content,
}: {
  content: LeadershipPhilosophyContent;
}) {
  const philosophy = content;

  return (
    <section className="py-20 lg:py-28 bg-surface-alt">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-5">
            <SectionTag>{philosophy.tag}</SectionTag>
            <h2 className="text-3xl md:text-5xl font-bold text-heading leading-[1.12]">
              {philosophy.title}
            </h2>
            <p className="text-paragraph leading-relaxed">{philosophy.description}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {philosophy.items.map((item, index) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap] ?? Target;
              return (
                <BlurFade key={item.id} delay={index * 0.06}>
                  <MagicCard className="flex h-full gap-4 p-5">
                    <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                      <Icon size={22} className="text-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-bold text-heading text-sm mb-1.5">{item.title}</h3>
                      <p className="text-sm text-paragraph leading-relaxed">{item.description}</p>
                    </div>
                  </MagicCard>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
