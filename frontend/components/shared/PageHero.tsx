import { cn } from "@/lib/cn";
import { CmsImage } from "@/components/ui/CmsImage";
import { Container } from "@/components/ui/Container";
import { SectionTag } from "@/components/ui/SectionTag";

export const PAGE_HERO_HEIGHT = "min-h-[420px] lg:min-h-[520px]";
export const PAGE_HERO_PADDING = "py-16 lg:py-20";

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
          className="absolute inset-y-0 left-0 w-[32%] backdrop-blur-md"
          style={{
            maskImage: "linear-gradient(to right, black 0%, black 40%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, black 0%, black 40%, transparent 100%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-r from-navy from-[0%] via-navy/70 via-[18%] to-transparent to-[36%]"
        />
      </div>

      <Container className="relative z-10">
        <div className={cn("flex flex-col lg:block", PAGE_HERO_HEIGHT)}>
          <div className={cn("flex flex-1 items-center lg:max-w-[36%]", PAGE_HERO_PADDING)}>
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
