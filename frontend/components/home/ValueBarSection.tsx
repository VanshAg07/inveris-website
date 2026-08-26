import {
  User,
  Network,
  Layers,
  TrendingUp,
  Clock,
  Handshake,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { valuePropositions } from "@/lib/content";

const iconMap = {
  user: User,
  network: Network,
  layers: Layers,
  trending: TrendingUp,
  clock: Clock,
  handshake: Handshake,
};

export function ValueBarSection() {
  return (
    <section className="bg-surface border-y border-border py-10 lg:py-12">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
          {valuePropositions.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <div key={item.title} className="text-center space-y-3 px-2">
                <div className="flex justify-center">
                  <Icon className="w-8 h-8 text-gold stroke-[1.5]" />
                </div>
                <h3 className="text-sm font-bold text-navy leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-text-body leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
