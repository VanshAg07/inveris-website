import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionTag } from "@/components/ui/SectionTag";

interface PageHeroProps {
  tag: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export function PageHero({ tag, title, description, image, imageAlt }: PageHeroProps) {
  return (
    <section className="relative bg-navy overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[420px] lg:min-h-[480px]">
        <Container className="flex items-center py-16 lg:py-20 lg:pr-12">
          <div className="max-w-xl space-y-5">
            <SectionTag light withLine>
              {tag}
            </SectionTag>

            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-heading-inverse leading-tight">
              {title}
            </h1>

            <p className="text-base md:text-lg text-paragraph-inverse leading-relaxed">
              {description}
            </p>
          </div>
        </Container>

        <div className="relative h-64 lg:h-auto min-h-[280px]">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/40 to-transparent lg:from-navy/80 lg:via-transparent" />
        </div>
      </div>
    </section>
  );
}
