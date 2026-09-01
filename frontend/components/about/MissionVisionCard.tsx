import { Check, Diamond, TrendingUp } from "lucide-react";
import { GoGoal } from "react-icons/go";
import { PiEyeLight } from "react-icons/pi";
import { Card } from "@/components/ui/Card";
import { IconCircle } from "@/components/ui/IconCircle";
import { SectionTag } from "@/components/ui/SectionTag";
import { cn } from "@/lib/cn";

type CardIcon = "target" | "eye";

interface MissionVisionCardProps {
  tag: string;
  title: string;
  icon: string;
  items: string[];
  footer:
    | { icon: string; prefix: string; highlight: string }
    | { icon: string; text: string };
  className?: string;
}

const cardIconMap = {
  target: GoGoal,
  eye: PiEyeLight,
};

const footerIconMap = {
  diamond: Diamond,
  chart: TrendingUp,
};

export function MissionVisionCard({
  tag,
  title,
  icon,
  items,
  footer,
  className,
}: MissionVisionCardProps) {
  const CardIcon = cardIconMap[icon as CardIcon] ?? cardIconMap.target;
  const FooterIcon = footerIconMap[footer.icon as keyof typeof footerIconMap] ?? footerIconMap.diamond;

  return (
    <Card className={cn("p-6 lg:p-8 flex flex-col h-full", className)}>
      <IconCircle variant="navy" size="md" className="mb-6">
        <CardIcon size={36} />
      </IconCircle>

      <SectionTag withLine className="mb-4">
        {tag}
      </SectionTag>

      <h3 className="text-xl md:text-2xl font-bold text-heading leading-snug mb-6">
        {title}
      </h3>

      <ul className="space-y-4 mb-8 flex-1">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm text-paragraph leading-relaxed">
            <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full border-2 border-gold flex items-center justify-center">
              <Check size={10} className="text-gold" strokeWidth={3} />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="rounded-lg border border-white/40 bg-white/35 p-4 flex items-start gap-3 backdrop-blur-md">
        <FooterIcon size={20} className="text-gold shrink-0 mt-0.5" strokeWidth={1.5} />
        {"prefix" in footer ? (
          <p className="text-sm text-heading leading-relaxed">
            {footer.prefix}{" "}
            <strong className="font-semibold">{footer.highlight}</strong>
          </p>
        ) : (
          <p className="text-sm font-semibold text-heading leading-relaxed">
            {footer.text}
          </p>
        )}
      </div>
    </Card>
  );
}
