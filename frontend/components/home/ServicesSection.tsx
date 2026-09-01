import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconCircle } from "@/components/ui/IconCircle";
import { CmsImage } from "@/components/ui/CmsImage";
import { HomeIcon, type HomeIconName } from "@/lib/home-icons";
import { type HomeServicesContent } from "@/lib/home-content";

export function ServicesSection({ content }: { content: HomeServicesContent }) {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden bg-surface-muted">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-linear-to-br from-gold/8 via-surface-muted to-navy/5"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 right-0 h-80 w-80 rounded-full bg-gold/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-0 h-80 w-80 rounded-full bg-navy/8 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(10, 26, 47, 0.08) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <Container className="relative z-10">
        <SectionHeading
          tag={content.tag}
          title={content.title}
          align="center"
          className="mb-12 lg:mb-14"
        />

        {content.services.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
            {content.services.map((service) => (
              <Link
                key={service.id}
                href="/services"
                className="group relative flex cursor-pointer flex-col rounded-xl border border-border/70 bg-surface transition-all duration-500 ease-out hover:-translate-y-2 hover:border-gold/40 hover:shadow-[var(--shadow-card-hover)]"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="relative h-36 overflow-hidden rounded-t-xl bg-navy/10">
                  {service.image ? (
                    <CmsImage
                      src={service.image}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 300px"
                    />
                  ) : null}
                  <div className="absolute inset-0 bg-linear-to-t from-navy/85 via-navy/35 to-navy/10 transition-opacity duration-500 group-hover:from-navy/75" />
                </div>

                <div className="absolute left-1/2 top-36 z-20 -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 group-hover:-translate-y-[calc(50%+4px)] group-hover:scale-105">
                  <IconCircle variant="navy" size="md" className="ring-4 ring-surface">
                    <HomeIcon name={service.icon as HomeIconName} size={24} className="text-gold" />
                  </IconCircle>
                </div>

                <div className="relative z-10 flex flex-1 flex-col rounded-b-xl bg-surface px-5 pb-6 pt-10">
                  <h3 className="mb-4 text-center font-bold text-navy transition-colors duration-300 group-hover:text-gold-dark">
                    {service.title}
                  </h3>

                  {service.items.length ? (
                    <ul className="mb-6 flex-1 space-y-2.5">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm text-text-body transition-transform duration-300 group-hover:translate-x-0.5"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold transition-all duration-300 group-hover:scale-125 group-hover:bg-gold-light" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {service.linkLabel ? (
                    <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors duration-300 group-hover:text-gold">
                      {service.linkLabel}
                      <HomeIcon
                        name="arrowRight"
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>
                  ) : null}
                </div>
              </Link>
            ))}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
