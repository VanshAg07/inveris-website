import { ArrowRight, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionTag } from "@/components/ui/SectionTag";
import { CmsImage } from "@/components/ui/CmsImage";
import type { AboutWhoWeAreContent } from "@/lib/about-content";

export function WhoWeAreSection({ content }: { content: AboutWhoWeAreContent }) {
  return (
    <section className="py-16 lg:py-24 bg-surface">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <SectionTag withLine>{content.tag}</SectionTag>

            <h2 className="text-3xl md:text-4xl font-bold text-heading leading-tight">
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
          </div>

          <div className="relative">
            <div className="relative h-[420px] lg:h-[480px] rounded-2xl overflow-hidden">
              <CmsImage
                src={content.image}
                alt={content.imageAlt || ""}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <Card className="absolute bottom-6 right-0 lg:-right-6 max-w-[22rem] rounded-2xl border-0 p-6 lg:p-7">
              <div className="mb-4 flex items-start gap-3">
                <Users
                  size={28}
                  strokeWidth={1.75}
                  className="mt-0.5 shrink-0 text-gold"
                />
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
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
