import {
  BarChart3,
  Handshake,
  Network,
  Target,
  Users,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { industriesPageContent } from "@/lib/content";

const iconMap = {
  users: Users,
  target: Target,
  network: Network,
  chart: BarChart3,
  handshake: Handshake,
};

export function IndustryValueBar() {
  const { valueBar } = industriesPageContent;

  return (
    <section className="py-12 lg:py-14 bg-surface-muted border-y border-border">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-0">
          {valueBar.items.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            const isLast = index === valueBar.items.length - 1;

            return (
              <div
                key={item.title}
                className={`text-center px-4 ${
                  !isLast ? "lg:border-r lg:border-border" : ""
                }`}
              >
                <div className="flex justify-center mb-3">
                  <Icon size={26} className="text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-heading text-sm mb-2">{item.title}</h3>
                <p className="text-xs text-paragraph leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
