import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

interface PageCtaBannerProps {
  title: string;
  description: string;
  cta: { label: string; href: string };
}

export function PageCtaBanner({ title, description, cta }: PageCtaBannerProps) {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          className="absolute right-0 top-1/2 -translate-y-1/2 h-full w-1/2 text-gold"
          viewBox="0 0 400 400"
          fill="none"
          preserveAspectRatio="xMaxYMid slice"
        >
          <path
            d="M320 80 L380 110 L380 170 L320 200 L260 170 L260 110 Z"
            stroke="currentColor"
            strokeWidth="0.75"
          />
          <path
            d="M260 170 L320 200 L320 260 L260 290 L200 260 L200 200 Z"
            stroke="currentColor"
            strokeWidth="0.75"
          />
          <path
            d="M200 200 L260 230 L260 290 L200 320 L140 290 L140 230 Z"
            stroke="currentColor"
            strokeWidth="0.75"
          />
          <path
            d="M320 200 L380 230 L380 290 L320 320 L260 290 L260 230 Z"
            stroke="currentColor"
            strokeWidth="0.75"
          />
          <path
            d="M380 110 L440 140 L440 200 L380 230 L320 200 L320 140 Z"
            stroke="currentColor"
            strokeWidth="0.75"
          />
          <path
            d="M380 230 L440 260 L440 320 L380 350 L320 320 L320 260 Z"
            stroke="currentColor"
            strokeWidth="0.75"
          />
          <path
            d="M200 80 L260 110 L260 170 L200 200 L140 170 L140 110 Z"
            stroke="currentColor"
            strokeWidth="0.75"
          />
          <path
            d="M140 170 L200 200 L200 260 L140 290 L80 260 L80 200 Z"
            stroke="currentColor"
            strokeWidth="0.75"
          />
        </svg>
      </div>

      <Container className="relative z-10 py-14 lg:py-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-2xl space-y-4">
            <span className="block h-px w-10 bg-gold" aria-hidden="true" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-heading-inverse leading-tight">
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
      </Container>
    </section>
  );
}
