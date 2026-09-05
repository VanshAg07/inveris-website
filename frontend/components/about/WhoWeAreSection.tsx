import { ArrowRight, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionTag } from "@/components/ui/SectionTag";
import { CmsImage } from "@/components/ui/CmsImage";
import { MagicCard } from "@/components/magic/magic-card";
import { BorderBeam } from "@/components/magic/border-beam";
import { BlurFade } from "@/components/magic/blur-fade";
import type { AboutWhoWeAreContent } from "@/lib/about-content";

export function WhoWeAreSection({ content }: { content: AboutWhoWeAreContent }) {
  return (
    <section className="py-20 lg:py-28 bg-surface">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <BlurFade className="space-y-6">
            <SectionTag>{content.tag}</SectionTag>
            <h2 className="text-3xl md:text-5xl font-bold text-heading leading-[1.12]">
              {content.title}
            </h2>
            <div className="space-y-4 text-paragraph leading-relaxed">
              {content.paragraphs.map((paragraph, index) => {
                const isLast = index === content.paragraphs.length - 1;
                if (isLast && content.highlightPhrase) {
                  const parts = paragraph.split(content.highlightPhrase);
                  return (
                    <p key={`${index}-${paragraph.slice(0, 24)}`}>
                      <strong className="font-semibold text-heading">
                        {content.highlightPhrase}
                      </strong>
                      {parts[1]}
                    </p>
                  );
                }
                return <p key={`${index}-${paragraph.slice(0, 24)}`}>{paragraph}</p>;
              })}
            </div>
            <Button variant="primary" href={content.cta.href}>
              {content.cta.label}
              <ArrowRight size={18} />
            </Button>
          </BlurFade>

          <BlurFade delay={0.12} className="relative">
            <div className="relative h-[420px] lg:h-[480px] rounded-[2rem] overflow-hidden">
              <CmsImage
                src={content.image}
                alt={content.imageAlt || ""}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <MagicCard className="absolute bottom-6 right-0 lg:-right-6 max-w-[22rem] p-6 lg:p-7 bg-white/90 backdrop-blur-xl">
              <BorderBeam size={70} duration={10} />
              <div className="mb-4 flex items-start gap-3">
                <Users size={28} strokeWidth={1.75} className="mt-0.5 shrink-0 text-gold" />
                <h3 className="text-xl font-bold leading-snug text-heading">
                  {content.card.title.split(". ").map((line, index, lines) => (
                    <span key={line} className="block">
                      {index < lines.length - 1 ? `${line}.` : line}
                    </span>
                  ))}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-paragraph">
                {content.card.description}
              </p>
            </MagicCard>
          </BlurFade>
        </div>
      </Container>
    </section>
  );
}
