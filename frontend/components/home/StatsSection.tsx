import { Building2, Grid3X3, Heart, Link2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { statsContent } from "@/lib/content";

const iconMap = {
  building: Building2,
  grid: Grid3X3,
  heart: Heart,
  link: Link2,
};

export function StatsSection() {
  return (
    <section className="py-14 lg:py-16 bg-surface-muted border-y border-border">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {statsContent.map((stat) => {
            const Icon = iconMap[stat.icon as keyof typeof iconMap];
            return (
              <div key={stat.label} className="text-center space-y-2">
                <div className="flex justify-center mb-1">
                  <Icon className="w-6 h-6 text-gold stroke-[1.5]" />
                </div>
                <p className="text-3xl md:text-4xl font-bold text-navy">{stat.value}</p>
                <p className="text-sm text-text-body">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
