import { Container } from "@/components/ui/Container";
import { CmsImage } from "@/components/ui/CmsImage";
import { SectionTag } from "@/components/ui/SectionTag";
import { cn } from "@/lib/cn";
import { PAGE_HERO_HEIGHT, PAGE_HERO_PADDING } from "@/components/shared/PageHero";
import type { ApproachHeroContent } from "@/lib/approach-content";

function PathStepBadge({
  number,
  title,
  className,
}: {
  number: string;
  title: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "absolute bg-white rounded-lg px-3 py-2 shadow-md border border-border/50 z-10",
        className
      )}
    >
      <span className="text-xs font-bold text-gold">{number}</span>
      <p className="text-sm font-semibold text-heading whitespace-nowrap">{title}</p>
    </div>
  );
}

export function ApproachHeroSection({ content }: { content: ApproachHeroContent }) {
  const hero = content;

  return (
    <section className="relative overflow-hidden bg-surface-alt">
      <div className={cn("grid grid-cols-1 lg:grid-cols-2", PAGE_HERO_HEIGHT)}>
        <Container className={cn("flex items-center lg:pr-12 relative z-10", PAGE_HERO_PADDING)}>
          <div className="max-w-xl space-y-5">
            <SectionTag withLine>{hero.tag}</SectionTag>

            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-heading leading-tight">
              {hero.title}
            </h1>

            <p className="text-base md:text-lg text-paragraph leading-relaxed">
              {hero.description}
            </p>
          </div>
        </Container>

        <div className="relative h-80 lg:h-auto min-h-[320px]">
          <CmsImage
            src={hero.image}
            alt={hero.imageAlt || hero.title}
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-alt via-surface-alt/30 to-transparent" />

          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 600 540"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
          >
            <path
              d="M80 420 C180 380, 260 320, 340 260 S460 120, 520 60"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeDasharray="8 6"
              opacity="0.9"
            />
            <circle cx="80" cy="420" r="6" fill="#c4a484" />
            <circle cx="200" cy="360" r="6" fill="#c4a484" />
            <circle cx="320" cy="270" r="6" fill="#c4a484" />
            <circle cx="440" cy="170" r="6" fill="#c4a484" />
            <circle cx="520" cy="60" r="6" fill="#c4a484" />
            <path
              d="M518 48 L528 58 L518 68 L508 58 Z"
              fill="#c4a484"
            />
          </svg>

          {hero.pathSteps.map((step) => (
            <PathStepBadge
              key={step.id}
              number={step.number}
              title={step.title}
              className={step.position}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
