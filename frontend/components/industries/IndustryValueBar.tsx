import { BarChart3, Handshake, Network, Target, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { MagicCard } from "@/components/magic/magic-card";
import { BlurFade } from "@/components/magic/blur-fade";
import type { IndustriesValueBarContent } from "@/lib/industries-content";

const iconMap = {
  users: Users,
  target: Target,
  network: Network,
  chart: BarChart3,
  handshake: Handshake,
};

export function IndustryValueBar({
  content,
}: {
  content: IndustriesValueBarContent;
}) {
  const { items } = content;
  const title = content.title || "Why Partner With Inveris?";

  return (
    <section className="py-20 lg:py-28 bg-surface-muted">
      <Container>
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-heading md:text-4xl lg:mb-16">
          {title}
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] ?? Users;
            return (
              <BlurFade key={item.id} delay={index * 0.06}>
                <MagicCard className="h-full px-6 py-8 text-center">
                  <Icon size={32} className="mx-auto mb-5 text-gold" strokeWidth={1.25} />
                  <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.12em] text-heading">
                    {item.title}
                  </h3>
                  <p className="mx-auto max-w-xs text-sm leading-relaxed text-paragraph">
                    {item.description}
                  </p>
                </MagicCard>
              </BlurFade>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
