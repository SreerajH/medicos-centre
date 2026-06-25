"use client";

import { faqs } from "@/lib/clinic";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function FAQ() {
  return (
    <section id="faqs" className="py-20 lg:py-28 px-5 lg:px-8 bg-paper border-t border-line">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Common questions"
          title="The short answers — straight."
        />
        <div className="mt-10 space-y-2.5">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.04}>
              <details className="group rounded-xl bg-white border border-line open:border-teal-500 open:shadow-card transition-colors">
                <summary className="cursor-pointer list-none p-5 lg:p-6 flex items-start justify-between gap-4">
                  <span className="font-display font-semibold text-ink text-[1rem] lg:text-[1.05rem] leading-snug">
                    {f.q}
                  </span>
                  <span className="flex-shrink-0 mt-0.5 w-7 h-7 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center transition-transform group-open:rotate-45">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M7 2v10M2 7h10" />
                    </svg>
                  </span>
                </summary>
                <div className="px-5 lg:px-6 pb-5 lg:pb-6 -mt-1 text-[0.94rem] text-muted leading-[1.7]">
                  {f.a}
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
