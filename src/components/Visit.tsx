"use client";

import { clinic } from "@/lib/clinic";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Visit() {
  return (
    <section id="contact" className="py-20 lg:py-28 px-5 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Visit us"
          title="Right at the heart of Chandigarh — Sector 22."
          sub="Opposite the Parade Ground, easy parking, walkable from Bus Stand 17."
        />
        <div className="mt-12 grid lg:grid-cols-[1fr_1.2fr] gap-6 lg:gap-10">
          <Reveal>
            <div className="rounded-2xl bg-white border border-line p-6 lg:p-7 h-full">
              <h3 className="font-display font-semibold text-teal-900 text-[1.05rem]">
                Address
              </h3>
              <p className="mt-2 text-[0.95rem] text-ink leading-[1.7]">
                {clinic.address.line1}<br />
                {clinic.address.line2}<br />
                {clinic.address.city} {clinic.address.zip}
              </p>
              <a
                href={clinic.mapsLink}
                target="_blank"
                rel="noopener"
                className="mt-3 inline-flex items-center gap-1.5 text-[0.88rem] font-semibold text-teal-700"
              >
                Get directions <span aria-hidden>→</span>
              </a>
              <div className="mt-6 pt-6 border-t border-line">
                <h3 className="font-display font-semibold text-teal-900 text-[1.05rem]">
                  Hours
                </h3>
                <ul className="mt-3 space-y-1.5 text-[0.92rem]">
                  {clinic.hours.map((h) => (
                    <li key={h.day} className="flex items-center justify-between">
                      <span className="text-muted">{h.day}</span>
                      <span className="font-mono text-ink">{h.value}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-[0.82rem] text-muted">{clinic.homeCollection}</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-2xl overflow-hidden border border-line h-full min-h-[360px] lg:min-h-[440px] bg-paper">
              <iframe
                src={clinic.mapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, display: "block", minHeight: 360 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${clinic.name} on Google Maps`}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
