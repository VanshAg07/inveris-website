import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";

export function Logo({ className, light }: { className?: string; light?: boolean }) {
  return (
    <Link href="/" className={cn("flex items-center shrink-0", className)}>
      <Image
        src="/images/logo.png"
        alt="Inveris Solutions LLP"
        width={280}
        height={100}
        className={cn(
          "h-10 sm:h-11 lg:h-12 w-auto object-contain object-left transition-[filter] duration-300",
          light && "brightness-0 invert"
        )}
        priority
      />
    </Link>
  );
}
