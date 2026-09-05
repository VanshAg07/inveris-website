import { CmsImage } from "@/components/ui/CmsImage";
import { Container } from "@/components/ui/Container";
import { SectionTag } from "@/components/ui/SectionTag";
import { PAGE_HERO_HEIGHT, PAGE_HERO_PADDING } from "@/components/shared/PageHero";
import { Spotlight } from "@/components/magic/spotlight";
import { GridPattern } from "@/components/magic/grid-pattern";
import { cn } from "@/lib/cn";

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
    <section className={cn("relative flex items-center overflow-hidden", PAGE_HERO_HEIGHT)}>
      <CmsImage
        src={image}
        alt={imageAlt}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(7,16,31,0.88),rgba(7,16,31,0.45),rgba(7,16,31,0.2))]"
      />
      <GridPattern className="opacity-25" />
      <Spotlight className="-top-32 left-20" fill="#c4a484" />

      <Container className={cn("relative z-10", PAGE_HERO_PADDING)}>
        <div className="max-w-2xl space-y-5">
          <SectionTag light>{tag}</SectionTag>
          <h1 className="text-3xl md:text-5xl lg:text-[3.1rem] font-bold text-heading-inverse leading-[1.1]">
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
