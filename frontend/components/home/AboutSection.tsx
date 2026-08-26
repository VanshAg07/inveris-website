import Image from "next/image";
import {
  Puzzle,
  Target,
  Shield,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconCircle } from "@/components/ui/IconCircle";
import { Card } from "@/components/ui/Card";
import { aboutContent } from "@/lib/content";

const iconMap = {
  puzzle: Puzzle,
  target: Target,
  shield: Shield,
  growth: TrendingUp,
};

export function AboutSection() {
  return (
    <section className="py-16 lg:py-24 bg-surface">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <SectionHeading
              tag={aboutContent.tag}
              title={aboutContent.title}
            />
            <p className="text-text-body leading-relaxed">{aboutContent.description}</p>
            <Button variant="primary" href={aboutContent.cta.href}>
              {aboutContent.cta.label}
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aboutContent.features.map((feature) => {
              const Icon = iconMap[feature.icon as keyof typeof iconMap];
              return (
                <Card key={feature.title} hover className="overflow-hidden">
                  <div className="relative h-36">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 300px"
                    />
                    <div className="absolute inset-0 bg-navy/30" />
                    <div className="absolute top-3 left-3">
                      <IconCircle variant="white" size="sm">
                        <Icon size={18} />
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
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
