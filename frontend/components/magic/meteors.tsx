import { cn } from "@/lib/cn";

const METEORS = [
  { top: "8%", left: "12%", delay: "0.2s", duration: "6s" },
  { top: "18%", left: "72%", delay: "0.8s", duration: "8s" },
  { top: "28%", left: "38%", delay: "1.1s", duration: "5s" },
  { top: "42%", left: "88%", delay: "0.4s", duration: "9s" },
  { top: "6%", left: "54%", delay: "1.4s", duration: "7s" },
  { top: "62%", left: "18%", delay: "0.6s", duration: "10s" },
  { top: "74%", left: "64%", delay: "1.7s", duration: "6s" },
  { top: "36%", left: "8%", delay: "0.3s", duration: "8s" },
  { top: "52%", left: "46%", delay: "1.2s", duration: "7s" },
  { top: "14%", left: "92%", delay: "0.9s", duration: "5s" },
  { top: "84%", left: "32%", delay: "0.5s", duration: "9s" },
  { top: "22%", left: "24%", delay: "1.6s", duration: "6s" },
  { top: "68%", left: "78%", delay: "0.1s", duration: "8s" },
  { top: "46%", left: "58%", delay: "1.3s", duration: "7s" },
];

export function Meteors({ number = 12, className }: { number?: number; className?: string }) {
  return (
    <>
      {METEORS.slice(0, number).map((meteor, index) => (
        <span
          key={index}
          className={cn(
            "animate-meteor pointer-events-none absolute h-0.5 w-0.5 rotate-[215deg] rounded-full bg-gold shadow-[0_0_0_1px_#ffffff10]",
            "before:absolute before:top-1/2 before:h-px before:w-[50px] before:-translate-y-1/2 before:bg-linear-to-r before:from-gold before:to-transparent before:content-['']",
            className
          )}
          style={{
            top: meteor.top,
            left: meteor.left,
            animationDelay: meteor.delay,
            animationDuration: meteor.duration,
          }}
        />
      ))}
    </>
  );
}
