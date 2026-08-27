import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionTag } from "@/components/ui/SectionTag";
import { IconCircle } from "@/components/ui/IconCircle";
import { Card } from "@/components/ui/Card";
import { CmsImage } from "@/components/ui/CmsImage";
import { HomeIcon, type HomeIconName } from "@/lib/home-icons";
import { resolveMediaUrl, type HomeAboutContent } from "@/lib/home-content";

export function AboutSection({ content }: { content: HomeAboutContent }) {
  const background = resolveMediaUrl(content.backgroundImage);

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {background ? (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: `url(${background})` }}
        />
      ) : (
        <div aria-hidden="true" className="absolute inset-0 bg-surface-muted" />
      )}
      <div aria-hidden="true" className="absolute inset-0 bg-surface/90" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              {content.tag ? (
                <SectionTag className="text-sm md:text-base tracking-[0.18em]">
                  {content.tag}
                </SectionTag>
              ) : null}
              {content.title ? (
                <h2 className="text-3xl md:text-4xl font-bold leading-tight text-heading">
                  {content.title}
                </h2>
              ) : null}
            </div>
            {content.description ? (
              <p className="text-text-body leading-relaxed">{content.description}</p>
            ) : null}
            {content.cta?.label ? (
              <Button variant="primary" href="/about">
                {content.cta.label}
              </Button>
            ) : null}
          </div>

          {content.features.length ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {content.features.map((feature) => (
                <Card key={feature.id} hover className="overflow-hidden">
                  <div className="relative h-36 bg-navy/10">
                    {feature.image ? (
                      <CmsImage
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 300px"
                      />
                    ) : null}
                    <div className="absolute inset-0 bg-navy/30" />
                    <div className="absolute top-3 left-3">
                      <IconCircle variant="white" size="sm">
                        <HomeIcon name={feature.icon as HomeIconName} size={18} className="text-gold" />
                      </IconCircle>
                    </div>
                  </div>
                  <div className="p-4 space-y-2">
                    <h3 className="font-bold text-navy text-sm">{feature.title}</h3>
                    <p className="text-xs text-text-body leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
