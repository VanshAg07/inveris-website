import { Container } from "@/components/ui/Container";
import { CmsImage } from "@/components/ui/CmsImage";
import { SectionTag } from "@/components/ui/SectionTag";
import { PAGE_HERO_HEIGHT, PAGE_HERO_PADDING } from "@/components/shared/PageHero";
import type { ContactHeroContent } from "@/lib/contact-content";
import { cn } from "@/lib/cn";

export function ContactHeroSection({ content }: { content: ContactHeroContent }) {
  const hero = content;

  return (
    <section className="relative overflow-hidden bg-navy">
      <div className="absolute inset-y-0 right-0 hidden w-[78%] lg:block">
        <CmsImage
          src={hero.image}
          alt={hero.imageAlt || hero.titleWhite}
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
          <div className={cn("flex flex-1 items-center lg:max-w-[52%]", PAGE_HERO_PADDING)}>
            <div className="max-w-3xl space-y-5">
              <SectionTag light withLine>
                {hero.tag}
              </SectionTag>

              <h1 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
                <span className="text-heading-inverse">{hero.titleWhite}</span>
                <br />
                <span className="text-gold">{hero.titleAccent}</span>
              </h1>

              <p className="max-w-2xl text-base leading-relaxed text-paragraph-inverse md:text-lg">
                {hero.description}
              </p>
            </div>
          </div>

          <div className="relative h-72 min-h-[300px] lg:hidden">
            <CmsImage
              src={hero.image}
              alt={hero.imageAlt || hero.titleWhite}
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
