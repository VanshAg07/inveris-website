import {
  BarChart3,
  Network,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionTag } from "@/components/ui/SectionTag";
import type { ServicesWhyContent } from "@/lib/services-content";

const iconMap = {
  network: Network,
  target: Target,
  chart: BarChart3,
  shield: ShieldCheck,
  users: Users,
};

export function WhyItMattersSection({ content }: { content: ServicesWhyContent }) {
  return (
    <section className="py-16 lg:py-24 bg-surface-muted">
      <Container>
        <Card className="border-0 bg-surface-alt p-8 lg:p-12">
          <div className="text-center space-y-4 mb-10 lg:mb-12">
            <SectionTag withLine className="justify-center">
              {content.tag}
            </SectionTag>
            <h2 className="text-2xl md:text-3xl font-bold text-heading">
              {content.title}
            </h2>
          </div>

          <div
            className={`grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-0 ${
              content.items.length >= 5
                ? "lg:grid-cols-5"
                : content.items.length === 4
                  ? "lg:grid-cols-4"
                  : content.items.length === 3
                    ? "lg:grid-cols-3"
                    : "lg:grid-cols-2"
            }`}
          >
            {content.items.map((item, index) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap] ?? Network;
              const isLast = index === content.items.length - 1;

              return (
                <div
                  key={item.id}
                  className={`text-center px-4 ${
                    !isLast ? "lg:border-r lg:border-border" : ""
                  }`}
                >
                  <div className="flex justify-center mb-4">
                    <Icon size={28} className="text-gold" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-bold text-heading text-sm mb-2">{item.title}</h3>
                  <p className="text-xs text-paragraph leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </Card>
      </Container>
    </section>
  );
}
