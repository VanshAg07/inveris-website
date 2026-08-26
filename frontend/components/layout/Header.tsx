"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { useNav } from "@/components/providers/NavProvider";
import { navLinks } from "@/lib/content";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = usePathname();
  const { isOpen, toggle, close } = useNav();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <Container>
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Logo />

          <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors relative py-1",
                    isActive
                      ? "text-navy after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gold"
                      : "text-text-body hover:text-navy"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Button variant="gold" size="sm" href="/contact">
              Contact Us
            </Button>
          </div>

          <button
            className="lg:hidden p-2 text-navy"
            onClick={toggle}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <nav className="lg:hidden pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={close}
                    className={cn(
                      "px-3 py-2.5 rounded text-sm font-medium transition-colors",
                      isActive
                        ? "bg-surface-muted text-navy"
                        : "text-text-body hover:bg-surface-muted hover:text-navy"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-2">
                <Button variant="gold" size="sm" href="/contact" className="w-full">
                  Contact Us
                </Button>
              </div>
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
}
