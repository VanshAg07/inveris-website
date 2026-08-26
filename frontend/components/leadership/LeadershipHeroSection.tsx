import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionTag } from "@/components/ui/SectionTag";
import { leadershipPageContent } from "@/lib/content";

export function LeadershipHeroSection() {
  const { hero } = leadershipPageContent;

  return (
    <section className="relative bg-navy overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[480px] lg:min-h-[520px]">
        <Container className="flex items-center py-16 lg:py-20 lg:pr-12 relative z-10">
          <div className="max-w-xl space-y-6">
            <SectionTag light withLine>
              {hero.tag}
            </SectionTag>

            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight">
              <span className="text-heading-inverse">{hero.titleWhite}</span>
              <br />
              <span className="text-gold">{hero.titleAccent}</span>
            </h1>

            <div className="space-y-4">
              <p className="text-base md:text-lg text-paragraph-inverse leading-relaxed">
                {hero.paragraphs[0]}
              </p>
              <span className="block h-px w-10 bg-gold" aria-hidden="true" />
              <p className="text-base md:text-lg text-paragraph-inverse leading-relaxed">
                {hero.paragraphs[1]}
              </p>
            </div>
          </div>
        </Container>

        <div className="relative h-72 lg:h-auto min-h-[300px]">
          <Image
            src={hero.image}
            alt={hero.imageAlt}
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}
