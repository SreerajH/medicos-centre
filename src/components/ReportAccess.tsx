"use client";

import { useState } from "react";
import { clinic } from "@/lib/clinic";
import Reveal from "./Reveal";

export default function ReportAccess() {
  const [patientId, setPatientId] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = encodeURIComponent(patientId.trim());
    const url = id
      ? `${clinic.reportsPortal}/?patientId=${id}`
      : clinic.reportsPortal;
    window.open(url, "_blank", "noopener");
  };

  return (
    <section id="reports" className="py-20 lg:py-28 px-5 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="relative rounded-3xl bg-teal-900 text-white overflow-hidden">
            <Decor />
            <div className="relative px-6 sm:px-10 lg:px-14 py-12 lg:py-16 grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-[0.72rem] font-semibold tracking-[0.16em] uppercase text-teal-300">
                  <span className="inline-block w-6 h-px bg-teal-300" />
                  Secure patient portal
                </div>
                <h2
                  className="mt-3 font-display font-bold leading-[1.08] text-balance"
                  style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
                >
                  Your report, online — securely.
                </h2>
                <p className="mt-4 text-[1rem] text-teal-100/90 leading-[1.7] max-w-lg">
                  No more chasing paper copies. Reports are uploaded to your private
                  portal — tied to your patient ID and accessible anywhere.
                </p>
                <ol className="mt-6 space-y-2.5 text-[0.92rem] text-teal-100/90">
                  {[
                    "Book your test (online, on-call, or in person).",
                    "We process the sample and upload your report.",
                    "Sign in with your patient ID to view or download.",
                  ].map((s, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-teal-300/20 text-teal-300 text-[0.7rem] font-bold flex items-center justify-center font-mono">
                        {i + 1}
                      </span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-6 lg:p-7 backdrop-blur">
                <label className="block text-[0.78rem] uppercase tracking-[0.14em] font-semibold text-teal-300 mb-2">
                  Patient ID
                </label>
                <form onSubmit={submit} className="space-y-3">
                  <input
                    value={patientId}
                    onChange={(e) => setPatientId(e.target.value)}
                    placeholder="e.g. MC-2024-04123"
                    className="w-full h-12 px-4 rounded-xl bg-white text-ink placeholder:text-muted font-mono text-[0.95rem] focus:outline-none focus:ring-2 focus:ring-teal-300"
                  />
                  <button
                    type="submit"
                    className="w-full h-12 rounded-xl bg-amber hover:bg-amber-hover font-semibold text-white text-[0.95rem] transition-colors"
                  >
                    Access My Report →
                  </button>
                  <p className="text-[0.78rem] text-teal-100/70 leading-[1.6]">
                    Powered by our secure lab portal —{" "}
                    <span className="font-mono text-teal-300">reports.medicoscentre.com</span>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Decor() {
  return (
    <svg className="absolute right-0 top-0 h-full w-1/2 opacity-[0.07] pointer-events-none" viewBox="0 0 400 400" aria-hidden>
      {Array.from({ length: 12 }).map((_, i) => (
        <circle key={i} cx="400" cy="200" r={40 + i * 28} fill="none" stroke="white" />
      ))}
    </svg>
  );
}
