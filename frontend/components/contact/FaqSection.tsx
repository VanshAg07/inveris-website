"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { contactPageContent } from "@/lib/content";
import { cn } from "@/lib/cn";

export function FaqSection() {
  const { faq } = contactPageContent;
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <Container className="max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-heading text-center mb-10 lg:mb-12">
          {faq.title}
        </h2>

        <div className="divide-y divide-border border-y border-border">
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-heading text-sm md:text-base">
                    {item.question}
                  </span>
                  <span
                    className={cn(
                      "w-8 h-8 rounded-full border border-border flex items-center justify-center shrink-0 text-paragraph",
                      isOpen && "bg-surface-muted"
                    )}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>

                {isOpen && (
                  <p className="pb-5 text-sm text-paragraph leading-relaxed -mt-1">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 space-y-4">
          <div className="flex justify-center -space-x-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full bg-surface-muted border-2 border-white flex items-center justify-center text-xs font-bold text-paragraph"
              >
                {String.fromCharCode(64 + i)}
              </div>
            ))}
          </div>
          <p className="font-bold text-heading">{faq.stillHaveQuestions}</p>
          <Link
            href={faq.cta.href}
            className="inline-flex text-sm font-semibold text-gold hover:text-gold-dark transition-colors"
          >
            {faq.cta.label} →
          </Link>
        </div>
      </Container>
    </section>
  );
}
