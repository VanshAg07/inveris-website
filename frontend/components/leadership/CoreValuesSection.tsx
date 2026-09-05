import {
  Award,
  Handshake,
  Lightbulb,
  Mountain,
  Target,
  Users,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { MagicCard } from "@/components/magic/magic-card";
import { Spotlight } from "@/components/magic/spotlight";
import { GridPattern } from "@/components/magic/grid-pattern";
import type { LeadershipValuesContent } from "@/lib/leadership-content";
import { resolveMediaUrl } from "@/lib/home-content";

const iconMap = {
  handshake: Handshake,
  users: Users,
  award: Award,
  lightbulb: Lightbulb,
  mountain: Mountain,
  target: Target,
};

export function CoreValuesSection({
  content,
}: {
  content: LeadershipValuesContent;
}) {
  const values = content;
  const background = resolveMediaUrl(values.backgroundImage);

  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      {background ? (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${background})` }}
        />
      ) : (
        <div aria-hidden="true" className="absolute inset-0 bg-navy" />
      )}
      <div aria-hidden="true" className="absolute inset-0 bg-navy/78" />
      <GridPattern className="opacity-30" />
      <Spotlight className="-top-24 left-1/3" fill="#c4a484" />

      <Container className="relative z-10">
        <div className="mb-12 space-y-3 text-center lg:mb-16">
          {values.tag ? (
            <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">
              {values.tag}
            </p>
          ) : null}
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            {values.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {values.items.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] ?? Target;
            return (
              <MagicCard
                key={item.id}
                className="flex flex-col items-center px-6 py-10 text-center border-white/10 bg-white/5"
                gradientColor="rgba(196,164,132,0.2)"
              >
                <Icon size={32} className="mb-5 text-gold" strokeWidth={1.25} />
                <h3 className="mb-3 text-xs font-bold tracking-[0.12em] text-white uppercase md:text-sm">
                  {item.title}
                </h3>
                <p className="max-w-xs text-sm leading-relaxed text-white/80">
                  {item.description}
                </p>
              </MagicCard>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
