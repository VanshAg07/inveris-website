import {
  Award,
  Handshake,
  Lightbulb,
  Mountain,
  Target,
  Users,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import type { LeadershipValuesContent } from "@/lib/leadership-content";
import { resolveMediaUrl } from "@/lib/home-content";
import { cn } from "@/lib/cn";

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
    <section className="relative overflow-hidden py-16 lg:py-24">
      {background ? (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: `url(${background})` }}
        />
      ) : (
        <div aria-hidden="true" className="absolute inset-0 bg-surface-muted" />
      )}
      <div aria-hidden="true" className="absolute inset-0 bg-black/60" />

      <Container className="relative z-10">
        <div className="mb-12 space-y-3 text-center lg:mb-16">
          {values.tag ? (
            <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">
              {values.tag}
            </p>
          ) : null}
          <h2 className="font-serif text-2xl font-bold tracking-wide text-white uppercase md:text-3xl lg:text-4xl">
            {values.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {values.items.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] ?? Target;
            const showDesktopDivider = index % 3 !== 2;

            return (
              <div
                key={item.id}
                className={cn(
                  "flex flex-col items-center px-6 py-10 text-center sm:px-8 lg:py-14",
                  index % 3 !== 0 && "lg:pl-14",
                  index % 3 !== 2 && "lg:pr-14"
                )}
              >
                <div
                  className={cn(
                    "relative flex w-full flex-col items-center",
                    showDesktopDivider &&
                      "lg:after:absolute lg:after:top-0 lg:after:right-0 lg:after:bottom-0 lg:after:w-0.5 lg:after:bg-white/40",
                    "sm:max-lg:odd:after:absolute sm:max-lg:odd:after:top-0 sm:max-lg:odd:after:right-0 sm:max-lg:odd:after:bottom-0 sm:max-lg:odd:after:w-0.5 sm:max-lg:odd:after:bg-white/40"
                  )}
                >
                  <Icon size={32} className="mb-5 text-gold" strokeWidth={1.25} />
                  <h3 className="mb-3 text-xs font-bold tracking-[0.12em] text-white uppercase md:text-sm">
                    {item.title}
                  </h3>
                  <p className="max-w-xs text-sm leading-relaxed text-white/80">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
