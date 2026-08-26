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
import { servicesPageContent } from "@/lib/content";

const iconMap = {
  network: Network,
  target: Target,
  chart: BarChart3,
  shield: ShieldCheck,
  users: Users,
};

export function WhyItMattersSection() {
  const { whyItMatters } = servicesPageContent;

  return (
    <section className="py-16 lg:py-24 bg-surface-muted">
      <Container>
        <Card className="border-0 bg-surface-alt p-8 lg:p-12">
          <div className="text-center space-y-4 mb-10 lg:mb-12">
            <SectionTag withLine className="justify-center">
              {whyItMatters.tag}
            </SectionTag>
            <h2 className="text-2xl md:text-3xl font-bold text-heading">
              {whyItMatters.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-0">
            {whyItMatters.items.map((item, index) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap];
              const isLast = index === whyItMatters.items.length - 1;

              return (
                <div
                  key={item.title}
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
