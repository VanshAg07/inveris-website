import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { BorderBeam } from "@/components/magic/border-beam";
import { Meteors } from "@/components/magic/meteors";
import { GridPattern } from "@/components/magic/grid-pattern";

interface PageCtaBannerProps {
  title: string;
  description: string;
  cta: { label: string; href: string };
}

export function PageCtaBanner({ title, description, cta }: PageCtaBannerProps) {
  return (
    <section className="relative overflow-hidden bg-navy">
      <GridPattern />
      <Meteors number={8} />
      <div className="pointer-events-none absolute right-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-gold/15 blur-3xl" />

      <Container className="relative z-10 py-16 lg:py-20">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 lg:p-12 backdrop-blur-xl">
          <BorderBeam size={110} duration={11} />
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl space-y-4">
              <SectionLine />
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-heading-inverse leading-tight">
                {title}
              </h2>
              <p className="text-paragraph-inverse text-base md:text-lg leading-relaxed">
                {description}
              </p>
            </div>

            <div className="flex flex-col items-start lg:items-end gap-4 shrink-0">
              <Button variant="gold" size="lg" href={cta.href}>
                {cta.label}
                <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function SectionLine() {
  return <span className="block h-px w-10 bg-gold" aria-hidden="true" />;
}
