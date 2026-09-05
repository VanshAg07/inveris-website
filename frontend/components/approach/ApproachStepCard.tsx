import { BarChart3, PenLine, Play, Search } from "lucide-react";
import { MagicCard } from "@/components/magic/magic-card";
import { BorderBeam } from "@/components/magic/border-beam";
import { cn } from "@/lib/cn";

type StepIcon = "search" | "pen" | "play" | "chart";

interface ApproachStepCardProps {
  number: string;
  title: string;
  description: string;
  icon: string;
  items: string[];
  className?: string;
}

const iconMap: Record<StepIcon, typeof Search> = {
  search: Search,
  pen: PenLine,
  play: Play,
  chart: BarChart3,
};

export function ApproachStepCard({
  number,
  title,
  description,
  icon,
  items,
  className,
}: ApproachStepCardProps) {
  const Icon = iconMap[icon as StepIcon] ?? Search;

  return (
    <div className={cn("relative pt-8", className)}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
        <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center shadow-[0_10px_30px_rgba(196,164,132,0.4)]">
          <Icon size={24} className="text-navy" strokeWidth={1.5} />
        </div>
      </div>
      <MagicCard className="h-full border-white/10 bg-white/5 p-6 pt-10 backdrop-blur-xl" gradientColor="rgba(196,164,132,0.18)">
        <BorderBeam size={70} duration={10} />
        <span className="block text-sm font-bold text-gold mb-2">{number}</span>
        <h3 className="text-lg font-bold text-heading-inverse mb-3">{title}</h3>
        <p className="text-sm text-paragraph-inverse leading-relaxed mb-4">{description}</p>
        <span className="block h-px w-8 bg-gold mb-4" aria-hidden="true" />
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item} className="flex gap-2 text-sm text-paragraph-inverse">
              <span className="text-gold shrink-0">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </MagicCard>
    </div>
  );
}
