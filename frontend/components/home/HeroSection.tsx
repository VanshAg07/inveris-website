"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionTag } from "@/components/ui/SectionTag";
import { CmsImage } from "@/components/ui/CmsImage";
import { Spotlight } from "@/components/magic/spotlight";
import { BackgroundBeams } from "@/components/magic/background-beams";
import { GridPattern } from "@/components/magic/grid-pattern";
import { Meteors } from "@/components/magic/meteors";
import { TextGenerate } from "@/components/magic/text-generate";
import { BorderBeam } from "@/components/magic/border-beam";
import { HomeIcon } from "@/lib/home-icons";
import { resolveMediaUrl, type HomeHeroContent } from "@/lib/home-content";

export function HeroSection({ content }: { content: HomeHeroContent }) {
  const background = resolveMediaUrl(content.backgroundImage);

  return (
    <section className="relative flex min-h-[calc(100svh)] items-center overflow-hidden bg-navy">
      {background ? (
        <CmsImage
          src={content.backgroundImage}
          alt={content.backgroundImageAlt || ""}
          fill
          priority
          className="object-cover object-center opacity-35"
          sizes="100vw"
        />
      ) : null}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(196,164,132,0.18),transparent_45%),linear-gradient(to_bottom,rgba(7,16,31,0.55),rgba(7,16,31,0.92))]" />
      <GridPattern className="opacity-50" />
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="#c4a484" />
      <BackgroundBeams />
      <Meteors number={14} />

      <Container className="relative z-10 pt-[calc(var(--header-height)+3.5rem)] pb-24">
        <div className="max-w-3xl space-y-7">
          {content.tag ? (
            <div className="relative inline-flex">
              <SectionTag light>{content.tag}</SectionTag>
              <BorderBeam size={48} duration={9} />
            </div>
          ) : null}

          {content.title ? (
            <h1 className="text-4xl md:text-6xl lg:text-[4.15rem] font-bold text-heading-inverse leading-[1.05] tracking-tight">
              <TextGenerate text={content.title} />
            </h1>
          ) : null}

          {content.description ? (
            <p className="text-base md:text-lg text-paragraph-inverse leading-relaxed max-w-2xl">
              {content.description}
            </p>
          ) : null}

          <div className="flex flex-wrap gap-4 pt-2">
            {content.primaryCta?.label ? (
              <Button variant="gold" size="lg" href="/about">
                {content.primaryCta.label}
                <HomeIcon name="arrowRight" size={18} />
              </Button>
            ) : null}
            {content.secondaryCta?.label ? (
              <Button variant="light" size="lg" href="/services">
                {content.secondaryCta.label}
              </Button>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
