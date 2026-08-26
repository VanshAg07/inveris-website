import { ArrowRight, Building2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { contactPageContent } from "@/lib/content";

export function OfficeSection() {
  const { office } = contactPageContent;

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 items-start">
          <div className="space-y-6">
            <div>
              <span className="block h-px w-8 bg-gold mb-4" aria-hidden="true" />
              <h2 className="text-2xl md:text-3xl font-bold text-heading">{office.title}</h2>
              <p className="text-paragraph mt-2">{office.subtitle}</p>
            </div>

            <Card className="p-5 border border-border flex gap-4">
              <div className="w-11 h-11 rounded-full bg-gold/15 flex items-center justify-center shrink-0">
                <Building2 size={20} className="text-gold" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-bold text-heading text-sm">{office.company}</p>
                <p className="text-sm text-paragraph leading-relaxed mt-1">{office.address}</p>
              </div>
            </Card>

            <Button variant="gold" href={office.directionsUrl} className="inline-flex">
              Get Directions
              <ArrowRight size={18} />
            </Button>
          </div>

          <div className="lg:col-span-2 relative h-80 lg:h-96 rounded-xl overflow-hidden border border-border">
            <iframe
              src={office.mapEmbedUrl}
              title="Inveris Solutions office location"
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
