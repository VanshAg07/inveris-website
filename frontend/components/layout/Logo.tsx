import Link from "next/link";
import Image from "next/image";

export function Logo({ className }: { className?: string; light?: boolean }) {
  return (
    <Link href="/" className={`flex items-center shrink-0 ${className ?? ""}`}>
      <Image
        src="/images/logo.png"
        alt="Inveris Solutions LLP"
        width={280}
        height={100}
        className="h-14 lg:h-16 w-auto object-contain"
        priority
      />
    </Link>
  );
}
