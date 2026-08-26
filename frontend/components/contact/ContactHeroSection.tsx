import Image from "next/image";
import { Phone, ShieldCheck, User } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTag } from "@/components/ui/SectionTag";
import { contactPageContent } from "@/lib/content";

const iconMap = {
  phone: Phone,
  shield: ShieldCheck,
  user: User,
};

export function ContactHeroSection() {
  const { hero } = contactPageContent;

  return (
    <section className="relative bg-navy overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[480px] lg:min-h-[520px]">
        <Container className="flex items-center py-16 lg:py-20 lg:pr-12 relative z-10">
          <div className="max-w-xl space-y-8">
            <div className="space-y-5">
              <SectionTag light withLine>
                {hero.tag}
              </SectionTag>

              <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight">
                <span className="text-heading-inverse">{hero.titleWhite}</span>
                <br />
                <span className="text-gold">{hero.titleAccent}</span>
              </h1>

              <p className="text-base md:text-lg text-paragraph-inverse leading-relaxed">
                {hero.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2 border-t border-white/10">
              {hero.trustItems.map((item, index) => {
                const Icon = iconMap[item.icon];
                const isLast = index === hero.trustItems.length - 1;

                return (
                  <div
                    key={item.title}
                    className={`flex gap-3 ${!isLast ? "sm:border-r sm:border-white/10 sm:pr-4" : ""}`}
                  >
                    <div className="w-10 h-10 rounded-full border border-gold/60 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-heading-inverse">{item.title}</p>
                      <p className="text-xs text-paragraph-inverse mt-0.5">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>

        <div className="relative h-72 lg:h-auto min-h-[300px]">
          <Image
            src={hero.image}
            alt={hero.imageAlt}
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/70 to-navy/30" />
        </div>
      </div>
    </section>
  );
}
