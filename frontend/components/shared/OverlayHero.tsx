import { CmsImage } from "@/components/ui/CmsImage";
import { Container } from "@/components/ui/Container";
import { SectionTag } from "@/components/ui/SectionTag";
import { PAGE_HERO_HEIGHT, PAGE_HERO_PADDING } from "@/components/shared/PageHero";
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
    <section
      className={cn(
        "relative flex items-center overflow-hidden",
        PAGE_HERO_HEIGHT
      )}
    >
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
        className="absolute inset-0 bg-linear-to-r from-navy/70 from-[0%] via-navy/35 via-[40%] to-navy/10 to-[100%]"
      />

      <Container className={cn("relative z-10", PAGE_HERO_PADDING)}>
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
