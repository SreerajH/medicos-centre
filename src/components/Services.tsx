"use client";

import { services } from "@/lib/clinic";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const icons: Record<string, JSX.Element> = {
  lab: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3h6M10 3v6.5L5 17.5A3 3 0 0 0 7.5 22h9A3 3 0 0 0 19 17.5L14 9.5V3" />
      <path d="M7.5 13h9" />
    </svg>
  ),
  pathology: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2a10 10 0 0 1 10 10c0 5.5-10 10-10 10S2 17.5 2 12A10 10 0 0 1 12 2Z" />
    </svg>
  ),
  usg: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12c3 0 3-4 6-4s3 8 6 8 3-4 6-4" />
      <path d="M3 17c3 0 3-4 6-4s3 4 6 4 3-2 6-2" />
    </svg>
  ),
  ecg: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12h4l2-6 4 12 2-6h6" />
    </svg>
  ),
  pft: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v18" />
      <path d="M6 8c0 4 0 8 3 11M18 8c0 4 0 8-3 11" />
      <path d="M9 6a3 3 0 0 1 6 0" />
    </svg>
  ),
  tmt: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="17" cy="6" r="2" />
      <path d="M10 22l2-7 4 1 2 5" />
      <path d="M5 13l4-1 2 3" />
      <path d="M11 12l4-4 3 1" />
    </svg>
  ),
};

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 px-5 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="What we test"
          title="A complete diagnostic suite, under one roof."
          sub="From a routine CBC to a cardiac stress test — six modalities, run by trained specialists, with reports you can rely on."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {services.map((s, i) => (
            <Reveal key={s.key} delay={(i % 3) * 0.06}>
              <article className="group h-full rounded-2xl border border-line bg-white p-6 lg:p-7 transition-all hover:border-teal-500 hover:-translate-y-0.5 hover:shadow-card flex flex-col">
                <span className="w-11 h-11 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center mb-5">
                  <span className="w-6 h-6 block">{icons[s.key]}</span>
                </span>
                <h3 className="font-display font-semibold text-ink text-[1.125rem]">
                  {s.name}
                </h3>
                <p className="mt-2 text-[0.92rem] text-muted leading-[1.65]">
                  {s.line}
                </p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {s.panels.slice(0, 4).map((p) => (
                    <li key={p} className="text-[0.72rem] font-medium font-mono text-teal-900 bg-teal-100/70 rounded-full px-2.5 py-1">
                      {p}
                    </li>
                  ))}
                </ul>
                <a
                  href="#book"
                  className="mt-6 inline-flex items-center gap-1.5 text-[0.88rem] font-semibold text-teal-700 self-start"
                >
                  Book this test
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10 text-center">
            <a
              href="#packages"
              className="inline-flex items-center gap-1.5 text-[0.95rem] font-semibold text-teal-700 hover:text-teal-900 transition-colors"
            >
              View all health packages
              <span aria-hidden>→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
