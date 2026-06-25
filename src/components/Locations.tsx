"use client";

import { locations } from "@/lib/clinic";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Locations() {
  return (
    <section id="locations" className="py-20 lg:py-28 px-5 lg:px-8 bg-paper border-y border-line">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Three states, one network"
          title="Wherever you are in the North, we're close."
          sub="A flagship 10,000 sq ft lab in Chandigarh and sample-collection centres across Punjab and Haryana. One network, one report portal."
        />

        <div className="mt-12 grid md:grid-cols-3 gap-4 lg:gap-6">
          {locations.map((loc, i) => (
            <Reveal key={loc.state} delay={i * 0.08}>
              <article className="relative h-full rounded-2xl bg-white border border-line overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-teal-700 to-teal-500" />
                <div className="p-6 lg:p-7">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-[0.7rem] uppercase tracking-[0.15em] font-semibold text-teal-700">
                      {loc.tag}
                    </div>
                    <StateMark state={loc.state} />
                  </div>
                  <h3
                    className="font-display font-bold text-teal-900 leading-[1.1]"
                    style={{ fontSize: "clamp(1.4rem, 2.4vw, 1.85rem)" }}
                  >
                    {loc.state}
                  </h3>
                  <p className="mt-3 text-[0.92rem] text-ink leading-[1.6]">
                    {loc.address}
                  </p>
                  <p className="mt-2 text-[0.85rem] text-muted leading-[1.6]">
                    {loc.detail}
                  </p>
                  <a
                    href={loc.href}
                    {...(loc.href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})}
                    className="mt-5 inline-flex items-center gap-1.5 text-[0.9rem] font-semibold text-teal-700 hover:text-teal-900 transition-colors"
                  >
                    {loc.cta}
                    <span aria-hidden>→</span>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function StateMark({ state }: { state: string }) {
  const initial = state[0];
  return (
    <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-teal-100 text-teal-900 font-display font-bold text-[0.95rem]">
      {initial}
    </span>
  );
}
