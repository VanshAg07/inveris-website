"use client";

import { Check, Crown, Shield, ShieldCheck, Users } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { IconCircle } from "@/components/ui/IconCircle";
import { CmsImage } from "@/components/ui/CmsImage";

type ServiceIcon = "consulting" | "recruitment" | "compliance" | "audit";

interface ServiceLineCardProps {
  title: string;
  description: string;
  items: string[];
  image: string;
  icon: string;
  onEnquire: (service: string) => void;
}

const iconMap = {
  consulting: Crown,
  recruitment: Users,
  compliance: ShieldCheck,
  audit: Shield,
};

export function ServiceLineCard({
  title,
  description,
  items,
  image,
  icon,
  onEnquire,
}: ServiceLineCardProps) {
  const Icon = iconMap[icon as ServiceIcon] ?? Crown;

  return (
    <Card className="overflow-hidden border-0 transition-all duration-300 hover:border-gold/40">
      <button
        type="button"
        onClick={() => onEnquire(title)}
        className="grid w-full cursor-pointer grid-cols-1 text-left lg:grid-cols-[minmax(280px,38%)_1fr]"
      >
        <div className="relative h-56 sm:h-64 lg:h-auto lg:min-h-[280px]">
          <CmsImage
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 38vw"
          />
        </div>

        <div className="flex flex-col p-6 lg:p-8">
          <div className="flex items-center gap-4">
            <IconCircle variant="navy" size="md">
              <Icon size={22} strokeWidth={1.5} />
            </IconCircle>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-heading">{title}</h3>
              <span className="mt-2 block h-0.5 w-10 bg-gold" aria-hidden="true" />
              <p className="mt-2 text-xs font-semibold tracking-wide text-gold">
                Click to enquire
              </p>
            </div>
          </div>

          <p className="mt-5 text-sm md:text-base text-paragraph leading-relaxed">
            {description}
          </p>

          <ul className="mt-6 space-y-3">
            {items.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm text-paragraph md:text-base">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-gold">
                  <Check size={10} className="text-gold" strokeWidth={3} />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </button>
    </Card>
  );
}
