import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionTag } from "@/components/ui/SectionTag";

interface OverlayHeroProps {
  tag: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export function OverlayHero({
  tag,
  title,
  description,
  image,
  imageAlt,
}: OverlayHeroProps) {
  return (
    <section className="relative min-h-[420px] lg:min-h-[480px] flex items-center overflow-hidden">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-navy/85" />

      <Container className="relative z-10 py-20 lg:py-24">
        <div className="max-w-2xl space-y-5">
          <SectionTag light withLine>
            {tag}
          </SectionTag>

          <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-heading-inverse leading-tight">
            {title}
          </h1>

          <p className="text-base md:text-lg text-paragraph-inverse leading-relaxed max-w-xl">
            {description}
          </p>
        </div>
      </Container>
    </section>
  );
}
