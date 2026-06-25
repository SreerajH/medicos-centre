"use client";

import { packages } from "@/lib/clinic";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Packages() {
  return (
    <section id="packages" className="py-20 lg:py-28 px-5 lg:px-8 bg-paper border-y border-line">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Health packages"
          title="Curated panels — without the prescription tennis."
          sub="Each package combines the tests your doctor most often orders together, at a single bundled price. Sample collection at the centre or at home."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {packages.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.06}>
              <article
                className={`relative h-full rounded-2xl bg-white border p-6 transition-all hover:-translate-y-0.5 hover:shadow-card flex flex-col ${
                  "featured" in p && p.featured
                    ? "border-amber/50 shadow-card"
                    : "border-line hover:border-teal-500"
                }`}
              >
                {"featured" in p && p.featured && (
                  <span className="absolute -top-2.5 left-6 px-2.5 py-0.5 rounded-full bg-amber text-white text-[0.65rem] font-bold uppercase tracking-[0.12em]">
                    Most popular
                  </span>
                )}
                <h3 className="font-display font-semibold text-teal-900 text-[1.075rem]">
                  {p.name}
                </h3>
                <div className="mt-1 text-[0.78rem] font-mono text-muted">
                  {p.tests} tests included
                </div>
                <p className="mt-4 text-[0.88rem] text-muted leading-[1.6]">
                  {p.summary}
                </p>
                <div className="mt-5 pt-5 border-t border-line">
                  <div className="font-display font-bold text-teal-900 text-[1.45rem] leading-none">
                    {p.price}
                  </div>
                  <div className="text-[0.78rem] text-muted mt-1">{p.suited}</div>
                </div>
                <a
                  href="#book"
                  className={`mt-5 inline-flex items-center justify-center w-full h-11 rounded-full text-[0.88rem] font-semibold transition-colors ${
                    "featured" in p && p.featured
                      ? "bg-amber text-white hover:bg-amber-hover"
                      : "border border-teal-700/40 text-teal-900 hover:bg-teal-100"
                  }`}
                >
                  Book this package
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
