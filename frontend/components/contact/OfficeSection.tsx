import { ArrowRight, Building2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MagicCard } from "@/components/magic/magic-card";
import { BorderBeam } from "@/components/magic/border-beam";
import type { ContactOfficeContent } from "@/lib/contact-content";

export function OfficeSection({ content }: { content: ContactOfficeContent }) {
  const office = content;

  return (
    <section className="bg-surface-muted py-20 lg:py-28">
      <Container>
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-3 lg:gap-12">
          <div className="space-y-6">
            <div>
              <span className="mb-4 block h-px w-8 bg-gold" aria-hidden="true" />
              <h2 className="text-2xl font-bold text-heading md:text-4xl">{office.title}</h2>
              <p className="mt-2 text-paragraph">{office.subtitle}</p>
            </div>
            <MagicCard className="flex gap-4 p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/15">
                <Building2 size={20} className="text-gold" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-sm font-bold text-heading">{office.company}</p>
                <p className="mt-1 text-sm leading-relaxed text-paragraph">{office.address}</p>
              </div>
            </MagicCard>
            <Button
              variant="gold"
              href={office.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              Get Directions
              <ArrowRight size={18} />
            </Button>
          </div>

          <MagicCard className="relative h-80 overflow-hidden lg:col-span-2 lg:h-96">
            <BorderBeam size={100} duration={12} />
            <iframe
              src={office.mapEmbedUrl}
              title="Inveris Solutions office location"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </MagicCard>
        </div>
      </Container>
    </section>
  );
}
