import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ctaContent } from "@/lib/content";

export function CtaSection() {
  return (
    <section className="py-16 lg:py-24 bg-surface">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-navy leading-tight">
              {ctaContent.title}
            </h2>
            <p className="text-text-body text-lg leading-relaxed">
              {ctaContent.description}
            </p>
            <Button variant="primary" href={ctaContent.cta.href}>
              {ctaContent.cta.label}
              <ArrowRight size={18} />
            </Button>
          </div>

          <div className="relative h-72 lg:h-80 rounded-lg overflow-hidden">
            <Image
              src={ctaContent.image}
              alt="Inveris branded workspace"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
