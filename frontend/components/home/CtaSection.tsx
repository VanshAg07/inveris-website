import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CmsImage } from "@/components/ui/CmsImage";
import { HomeIcon } from "@/lib/home-icons";
import { type HomeCtaContent } from "@/lib/home-content";

export function CtaSection({ content }: { content: HomeCtaContent }) {
  return (
    <section className="py-16 lg:py-24 bg-surface">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            {content.title ? (
              <h2 className="text-3xl md:text-4xl font-bold text-navy leading-tight">
                {content.title}
              </h2>
            ) : null}
            {content.description ? (
              <p className="text-text-body text-lg leading-relaxed">
                {content.description}
              </p>
            ) : null}
            {content.cta?.label ? (
              <Button
                variant="primary"
                href="/contact"
                className="group/cta transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)]"
              >
                {content.cta.label}
                <HomeIcon
                  name="arrowRight"
                  size={18}
                  className="transition-transform duration-300 group-hover/cta:translate-x-1"
                />
              </Button>
            ) : null}
          </div>

          {content.image ? (
            <div className="group relative h-72 lg:h-80 overflow-hidden rounded-lg transition-transform duration-500 ease-out hover:scale-[1.03]">
              <CmsImage
                src={content.image}
                alt={content.imageAlt || ""}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
