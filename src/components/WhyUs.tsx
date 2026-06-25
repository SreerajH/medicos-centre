"use client";

import { whyUs } from "@/lib/clinic";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function WhyUs() {
  return (
    <section id="about" className="py-20 lg:py-28 px-5 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Why Medicos Centre"
          title="Authority built over four decades, not four years."
        />
        <div className="mt-14 grid md:grid-cols-3 gap-8 lg:gap-12">
          {whyUs.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.08}>
              <div className="relative">
                <div className="inline-flex items-baseline gap-2 mb-3">
                  <span className="font-display font-bold text-teal-900 leading-none text-[2.25rem]">
                    {w.stat}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-ink text-[1.125rem]">
                  {w.title}
                </h3>
                <p className="mt-2 text-[0.95rem] text-muted leading-[1.7]">
                  {w.note}
                </p>
                <div className="mt-5 h-px bg-line" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
