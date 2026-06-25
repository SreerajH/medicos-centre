"use client";

import { motion, useReducedMotion } from "framer-motion";
import { clinic } from "@/lib/clinic";

const words = [
  "40 years",
  "of trusted",
  "diagnostics.",
];

const line2 = ["From Chandigarh", "to the entire", "North."];

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative pt-28 lg:pt-36 pb-16 lg:pb-24 overflow-hidden">
      <BackgroundGrid />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-8 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="inline-flex items-center gap-2 text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-teal-700 bg-teal-100 rounded-full pl-2 pr-3.5 py-1.5 mb-6"
          >
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-teal-700 text-white text-[10px]">★</span>
            Serving North India since 1984
          </motion.div>

          <h1 className="font-display font-bold text-teal-900 leading-[1.05] tracking-tight text-balance"
              style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}>
            <span className="block">
              {words.map((w, i) => (
                <motion.span
                  key={i}
                  initial={reduce ? false : { opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.06, ease: "easeOut" }}
                  className="inline-block mr-2.5"
                >
                  {w}
                </motion.span>
              ))}
            </span>
            <span className="block text-teal-700">
              {line2.map((w, i) => (
                <motion.span
                  key={i}
                  initial={reduce ? false : { opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.32 + i * 0.06, ease: "easeOut" }}
                  className="inline-block mr-2.5"
                >
                  {w}
                </motion.span>
              ))}
            </span>
          </h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-6 text-[1.075rem] text-muted leading-[1.7] max-w-xl"
          >
            Serving <strong className="text-ink font-semibold">Punjab, Haryana and Himachal Pradesh</strong> since 1984.
            A 10,000 sq ft laboratory, 100+ specialists, and reports you can trust.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#book"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-[0.95rem] font-semibold text-white bg-amber rounded-full hover:bg-amber-hover transition-colors shadow-[0_14px_30px_-14px_rgba(232,145,42,0.55)]"
            >
              Book a Test
              <span aria-hidden>→</span>
            </a>
            <a
              href={clinic.whatsappHome}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-[0.95rem] font-semibold text-teal-900 border border-teal-700/40 rounded-full hover:bg-teal-100 transition-colors"
            >
              Book Home Collection
            </a>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.95 }}
            className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3 text-[0.85rem] text-muted"
          >
            <div className="flex items-center gap-2">
              <Dot /> Walk-ins welcome
            </div>
            <div className="flex items-center gap-2">
              <Dot /> Same-day reports
            </div>
            <div className="flex items-center gap-2">
              <Dot /> Online report access
            </div>
          </motion.div>
        </div>

        <HeroVisual reduce={!!reduce} />
      </div>
    </section>
  );
}

function Dot() {
  return <span className="inline-block w-1.5 h-1.5 rounded-full bg-teal-500" />;
}

function BackgroundGrid() {
  return (
    <>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-teal-100/60 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[640px] bg-grid opacity-50" style={{ maskImage: "linear-gradient(to bottom, black 0%, black 35%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 35%, transparent 100%)" }} />
    </>
  );
}

function HeroVisual({ reduce }: { reduce: boolean }) {
  return (
    <div className="relative aspect-square w-full max-w-[520px] mx-auto lg:mx-0 lg:ml-auto">
      <svg viewBox="0 0 480 480" className="w-full h-full" aria-hidden>
        <defs>
          <linearGradient id="ring-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2CA89E" />
            <stop offset="100%" stopColor="#0D4F4A" />
          </linearGradient>
          <radialGradient id="core-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E8F5F4" />
            <stop offset="100%" stopColor="#FFFFFF" />
          </radialGradient>
        </defs>

        {/* outer dashed ring */}
        <motion.circle
          cx="240" cy="240" r="218"
          fill="none" stroke="#1A7A72" strokeWidth="1" strokeDasharray="4 8"
          initial={reduce ? false : { rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "240px 240px" }}
        />

        {/* concentric arcs that draw in */}
        {[
          { r: 196, color: "#2CA89E", w: 2.2, off: 0 },
          { r: 168, color: "#1A7A72", w: 1.8, off: 0.2 },
          { r: 140, color: "#0D4F4A", w: 1.4, off: 0.35 },
          { r: 112, color: "#2CA89E", w: 1.2, off: 0.5 },
        ].map((a, i) => {
          const c = 2 * Math.PI * a.r;
          return (
            <motion.circle
              key={i}
              cx="240" cy="240" r={a.r}
              fill="none" stroke={a.color} strokeWidth={a.w} strokeLinecap="round"
              strokeDasharray={c}
              initial={reduce ? false : { strokeDashoffset: c * 0.7 }}
              animate={{ strokeDashoffset: c * 0.18 }}
              transition={{ duration: 1.6, delay: a.off, ease: [0.22, 0.61, 0.36, 1] }}
              transform={`rotate(-90 240 240)`}
            />
          );
        })}

        {/* inner core */}
        <circle cx="240" cy="240" r="86" fill="url(#core-grad)" stroke="#1A7A72" strokeOpacity="0.25" />

        {/* tick marks */}
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i * 360) / 24;
          const rad = (angle * Math.PI) / 180;
          const x1 = Math.round(240 + Math.cos(rad) * 218);
          const y1 = Math.round(240 + Math.sin(rad) * 218);
          const x2 = Math.round(240 + Math.cos(rad) * (i % 6 === 0 ? 200 : 210));
          const y2 = Math.round(240 + Math.sin(rad) * (i % 6 === 0 ? 200 : 210));
          return (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#0D4F4A" strokeOpacity={i % 6 === 0 ? 0.6 : 0.25} strokeWidth={i % 6 === 0 ? 1.6 : 1} />
          );
        })}

        {/* drop / molecule motif in core */}
        <g transform="translate(240 240)">
          <motion.path
            d="M0 -52 C 24 -30 38 -14 38 6 C 38 28 18 44 0 44 C -18 44 -38 28 -38 6 C -38 -14 -24 -30 0 -52 Z"
            fill="url(#ring-grad)"
            opacity="0.92"
            initial={reduce ? false : { scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.92 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          />
          <circle cx="-8" cy="-12" r="6" fill="#fff" opacity="0.7" />
        </g>

        {/* annotation badges */}
        <g>
          <Badge x={56} y={92} label="1984" sub="Established" />
          <Badge x={336} y={68} label="3 states" sub="North India" />
          <Badge x={66} y={388} label="100+" sub="Specialists" />
          <Badge x={332} y={392} label="10k ft²" sub="Lab" />
        </g>
      </svg>
    </div>
  );
}

function Badge({ x, y, label, sub }: { x: number; y: number; label: string; sub: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x="-44" y="-18" width="88" height="40" rx="20" fill="#fff" stroke="#D4E4E3" />
      <text x="0" y="-2" textAnchor="middle" fontFamily="var(--font-display)" fontWeight="700" fontSize="14" fill="#0D4F4A">
        {label}
      </text>
      <text x="0" y="14" textAnchor="middle" fontFamily="var(--font-body)" fontWeight="500" fontSize="9" fill="#5A7070" letterSpacing="1.2">
        {sub.toUpperCase()}
      </text>
    </g>
  );
}
