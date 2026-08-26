import Image from "next/image";
import { ArrowRight, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionTag } from "@/components/ui/SectionTag";
import { aboutPageContent } from "@/lib/content";

export function WhoWeAreSection() {
  const { whoWeAre } = aboutPageContent;

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <SectionTag withLine>{whoWeAre.tag}</SectionTag>

            <h2 className="text-3xl md:text-4xl font-bold text-heading leading-tight">
              {whoWeAre.title}
            </h2>

            <div className="space-y-4 text-paragraph leading-relaxed">
              {whoWeAre.paragraphs.map((paragraph, index) => {
                const isLast = index === whoWeAre.paragraphs.length - 1;
                if (isLast && whoWeAre.highlightPhrase) {
                  const parts = paragraph.split(whoWeAre.highlightPhrase);
                  return (
                    <p key={index}>
                      <strong className="font-semibold text-heading">
                        {whoWeAre.highlightPhrase}
                      </strong>
                      {parts[1]}
                    </p>
                  );
                }
                return <p key={index}>{paragraph}</p>;
              })}
            </div>

            <Button variant="primary" href={whoWeAre.cta.href}>
              {whoWeAre.cta.label}
              <ArrowRight size={18} />
            </Button>
          </div>

          <div className="relative">
            <div className="relative h-[420px] lg:h-[480px] rounded-2xl overflow-hidden">
              <Image
                src={whoWeAre.image}
                alt="Modern glass office building"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <Card className="absolute bottom-6 right-0 lg:-right-6 max-w-sm p-6 shadow-lg border-0">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-full border-2 border-gold flex items-center justify-center shrink-0">
                  <Users size={18} className="text-gold" />
                </div>
              </div>
              <h3 className="font-bold text-heading text-lg mb-2">
                {whoWeAre.card.title}
              </h3>
              <p className="text-sm text-paragraph leading-relaxed">
                {whoWeAre.card.description}
              </p>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
