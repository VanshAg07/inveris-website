import {
  FileCheck,
  PieChart,
  Shield,
  Target,
  Users,
} from "lucide-react";
import { cn } from "@/lib/cn";

type NodeIcon = "users" | "finance" | "compliance" | "risk" | "strategy";
type NodePosition = "top" | "top-right" | "bottom-right" | "bottom-left" | "top-left";
type NodeAlign = "left" | "right";

interface DiagramNode {
  label: string;
  description: string;
  icon: NodeIcon;
  position: NodePosition;
  align: NodeAlign;
}

const iconMap = {
  users: Users,
  finance: PieChart,
  compliance: FileCheck,
  risk: Shield,
  strategy: Target,
};

const positionStyles: Record<NodePosition, string> = {
  top: "top-[2%] left-1/2 -translate-x-1/2",
  "top-right": "top-[18%] right-[2%]",
  "bottom-right": "bottom-[18%] right-[2%]",
  "bottom-left": "bottom-[18%] left-[2%]",
  "top-left": "top-[18%] left-[2%]",
};

export function ExpertiseDiagram({ nodes }: { nodes: DiagramNode[] }) {
  return (
    <div className="relative w-full max-w-lg mx-auto aspect-square">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 400 400"
        aria-hidden="true"
      >
        <circle
          cx="200"
          cy="200"
          r="130"
          fill="none"
          stroke="var(--color-gold)"
          strokeWidth="1"
          strokeDasharray="4 6"
          opacity="0.4"
        />
        {nodes.map((_, i) => {
          const angles = [-90, -18, 54, 126, 198];
          const rad = (angles[i] * Math.PI) / 180;
          const x2 = 200 + Math.cos(rad) * 130;
          const y2 = 200 + Math.sin(rad) * 130;
          return (
            <line
              key={i}
              x1="200"
              y1="200"
              x2={x2}
              y2={y2}
              stroke="var(--color-gold)"
              strokeWidth="1"
              strokeDasharray="4 4"
              opacity="0.5"
            />
          );
        })}
      </svg>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="w-20 h-20 rounded-full bg-navy flex items-center justify-center shadow-lg">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
            <path
              d="M18 4L32 12V24L18 32L4 24V12L18 4Z"
              stroke="var(--color-gold)"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M18 10L26 14V22L18 26L10 22V14L18 10Z"
              stroke="var(--color-gold)"
              strokeWidth="1"
              fill="none"
            />
          </svg>
        </div>
      </div>

      {nodes.map((node) => {
        const Icon = iconMap[node.icon];
        const textOnLeft = node.align === "left";

        return (
          <div
            key={node.label}
            className={cn("absolute flex items-center gap-3", positionStyles[node.position])}
          >
            {textOnLeft && (
              <div className="text-right max-w-[120px] hidden sm:block">
                <p className="text-xs font-bold text-heading tracking-wide">{node.label}</p>
                <p className="text-[10px] text-paragraph leading-snug">{node.description}</p>
              </div>
            )}

            <div className="w-12 h-12 rounded-full bg-white border border-border flex items-center justify-center shrink-0 shadow-sm">
              <Icon size={20} className="text-navy" strokeWidth={1.5} />
            </div>

            {!textOnLeft && (
              <div className="text-left max-w-[120px] hidden sm:block">
                <p className="text-xs font-bold text-heading tracking-wide">{node.label}</p>
                <p className="text-[10px] text-paragraph leading-snug">{node.description}</p>
              </div>
            )}

            <div className="sm:hidden text-left max-w-[100px]">
              <p className="text-xs font-bold text-heading">{node.label}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
