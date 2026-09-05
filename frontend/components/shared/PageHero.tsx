import { cn } from "@/lib/cn";
import { CmsImage } from "@/components/ui/CmsImage";
import { Container } from "@/components/ui/Container";
import { SectionTag } from "@/components/ui/SectionTag";
import { Spotlight } from "@/components/magic/spotlight";
import { GridPattern } from "@/components/magic/grid-pattern";

export const PAGE_HERO_HEIGHT =
  "min-h-[calc(460px+var(--header-height))] lg:min-h-[calc(560px+var(--header-height))]";
export const PAGE_HERO_PADDING =
  "pt-[calc(var(--header-height)+4rem)] pb-16 lg:pt-[calc(var(--header-height)+5.5rem)] lg:pb-20";

interface PageHeroProps {
  tag: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export function PageHero({ tag, title, description, image, imageAlt }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div className="absolute inset-y-0 right-0 hidden lg:block w-[78%]">
        <CmsImage
          src={image}
          alt={imageAlt}
          fill
          priority
          className="object-cover object-center"
          sizes="78vw"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-r from-navy from-[0%] via-navy/80 via-[22%] to-navy/20 to-[70%]"
        />
      </div>
      <GridPattern className="opacity-30" />
      <Spotlight className="-top-40 left-10" fill="#c4a484" />

      <Container className="relative z-10">
        <div className={cn("flex flex-col lg:block", PAGE_HERO_HEIGHT)}>
          <div className={cn("flex flex-1 items-center lg:max-w-[42%]", PAGE_HERO_PADDING)}>
            <div className="max-w-xl space-y-5">
              <SectionTag light>{tag}</SectionTag>
              <h1 className="text-3xl md:text-5xl lg:text-[3.1rem] font-bold text-heading-inverse leading-[1.1]">
                {title}
              </h1>
              <p className="text-base md:text-lg text-paragraph-inverse leading-relaxed">
                {description}
              </p>
            </div>
          </div>

          <div className="relative h-64 min-h-[240px] lg:hidden">
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
              className="absolute inset-0 bg-linear-to-b from-navy via-navy/30 to-transparent"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
