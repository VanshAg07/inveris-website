import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Code,
  Factory,
  GraduationCap,
  HeartPulse,
  Landmark,
  Plane,
  ShoppingCart,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { IconCircle } from "@/components/ui/IconCircle";
import { cn } from "@/lib/cn";

type IndustryIcon =
  | "manufacturing"
  | "retail"
  | "healthcare"
  | "technology"
  | "banking"
  | "education"
  | "realEstate"
  | "travel";

interface IndustryCardProps {
  title: string;
  description: string;
  icon: IndustryIcon;
  href?: string;
  className?: string;
}

const iconMap = {
  manufacturing: Factory,
  retail: ShoppingCart,
  healthcare: HeartPulse,
  technology: Code,
  banking: Landmark,
  education: GraduationCap,
  realEstate: Building2,
  travel: Plane,
};

export function IndustryCard({
  title,
  description,
  icon,
  href = "/contact",
  className,
}: IndustryCardProps) {
  const Icon = iconMap[icon];

  return (
    <Card className={cn("p-6 lg:p-8 text-center border border-border h-full flex flex-col", className)}>
      <div className="flex justify-center mb-5">
        <IconCircle variant="navy" size="md">
          <Icon size={22} strokeWidth={1.5} />
        </IconCircle>
      </div>

      <h3 className="font-bold text-heading text-lg mb-3">{title}</h3>
      <p className="text-sm text-paragraph leading-relaxed mb-6 flex-1">{description}</p>

      <Link
        href={href}
        className="inline-flex items-center justify-center gap-1 text-sm font-semibold text-heading hover:text-gold transition-colors mt-auto"
      >
        Learn More
        <ArrowRight size={16} />
      </Link>
    </Card>
  );
}
