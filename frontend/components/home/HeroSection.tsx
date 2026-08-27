import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionTag } from "@/components/ui/SectionTag";
import { CmsImage } from "@/components/ui/CmsImage";
import { HomeIcon } from "@/lib/home-icons";
import { resolveMediaUrl, type HomeHeroContent } from "@/lib/home-content";

export function HeroSection({ content }: { content: HomeHeroContent }) {
  const background = resolveMediaUrl(content.backgroundImage);

  return (
    <section className="relative min-h-[600px] lg:min-h-[680px] flex items-center">
      {background ? (
        <CmsImage
          src={content.backgroundImage}
          alt={content.backgroundImageAlt || ""}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      ) : (
        <div className="absolute inset-0 bg-navy" />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/30" />

      <Container className="relative z-10 py-20">
        <div className="max-w-2xl space-y-6">
          {content.tag ? <SectionTag>{content.tag}</SectionTag> : null}

          {content.title ? (
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-heading leading-[1.15]">
              {content.title}
            </h1>
          ) : null}

          {content.description ? (
            <p className="text-base md:text-lg text-paragraph leading-relaxed max-w-xl">
              {content.description}
            </p>
          ) : null}

          <div className="flex flex-wrap gap-4 pt-2">
            {content.primaryCta?.label ? (
              <Button variant="primary" href="/about">
                {content.primaryCta.label}
                <HomeIcon name="arrowRight" size={18} />
              </Button>
            ) : null}
            {content.secondaryCta?.label ? (
              <Button variant="outline" href="/services">
                {content.secondaryCta.label}
              </Button>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
