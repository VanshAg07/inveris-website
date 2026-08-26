import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionTag } from "@/components/ui/SectionTag";
import { heroContent } from "@/lib/content";

export function HeroSection() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[680px] flex items-center">
      <Image
        src={heroContent.backgroundImage}
        alt="Modern corporate skyscrapers"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/30" />

      <Container className="relative z-10 py-20">
        <div className="max-w-2xl space-y-6">
          <SectionTag>{heroContent.tag}</SectionTag>

          <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-heading leading-[1.15]">
            {heroContent.title}
          </h1>

          <p className="text-base md:text-lg text-paragraph leading-relaxed max-w-xl">
            {heroContent.description}
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Button variant="primary" href={heroContent.primaryCta.href}>
              {heroContent.primaryCta.label}
              <ArrowRight size={18} />
            </Button>
            <Button variant="outline" href={heroContent.secondaryCta.href}>
              {heroContent.secondaryCta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
