"use client";

import { clinic } from "@/lib/clinic";
import Reveal from "./Reveal";

const tiles = [
  {
    label: "Book a Lab Test",
    sub: "Slot or walk-in, your choice",
    href: "#book",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3h6M10 3v6.5L5 17.5A3 3 0 0 0 7.5 22h9A3 3 0 0 0 19 17.5L14 9.5V3" />
        <path d="M7.5 13h9" />
      </svg>
    ),
    primary: true,
  },
  {
    label: "Home Collection",
    sub: "Sample picked up at your door",
    href: (clinic as any).whatsappHome,
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11l9-7 9 7" />
        <path d="M5 10v10h14V10" />
        <path d="M10 20v-6h4v6" />
      </svg>
    ),
  },
  {
    label: "Get My Report",
    sub: "Secure online access",
    href: (clinic as any).reportsPortal,
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
        <path d="M14 3v6h6" />
        <path d="M9 14h6M9 18h4" />
      </svg>
    ),
  },
];

export default function QuickTiles() {
  return (
    <section className="relative -mt-6 lg:-mt-10 z-10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-3 lg:gap-4">
          {tiles.map((t, i) => (
            <Reveal key={t.label} delay={i * 0.08}>
              <a
                href={t.href}
                {...(t.external ? { target: "_blank", rel: "noopener" } : {})}
                className={`group relative flex items-center gap-4 p-5 lg:p-6 rounded-2xl border transition-all bg-white shadow-card hover:shadow-lift hover:-translate-y-0.5 ${
                  t.primary
                    ? "border-amber/40"
                    : "border-line hover:border-teal-500"
                }`}
              >
                <span
                  className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                    t.primary
                      ? "bg-amber-soft text-amber-hover"
                      : "bg-teal-100 text-teal-700"
                  }`}
                >
                  <span className="w-6 h-6 block">{t.icon}</span>
                </span>
                <div className="min-w-0">
                  <div className="font-display font-semibold text-ink text-[1.05rem] leading-tight">
                    {t.label}
                  </div>
                  <div className="text-[0.85rem] text-muted mt-1 leading-snug">
                    {t.sub}
                  </div>
                </div>
                <span className="ml-auto text-teal-700 text-[1.1rem] transition-transform group-hover:translate-x-0.5" aria-hidden>
                  →
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
