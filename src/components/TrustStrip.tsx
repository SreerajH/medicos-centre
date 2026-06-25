"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/clinic";

function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(reduce ? value : "0");

  useEffect(() => {
    if (!inView || reduce) {
      setDisplay(value);
      return;
    }
    const numMatch = value.match(/[\d,]+/);
    if (!numMatch) {
      setDisplay(value);
      return;
    }
    const target = parseInt(numMatch[0].replace(/,/g, ""), 10);
    const start = performance.now();
    const dur = 1100;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      const n = Math.floor(target * eased);
      const formatted = value.replace(/[\d,]+/, n.toLocaleString("en-IN"));
      setDisplay(formatted);
      if (p < 1) raf = requestAnimationFrame(tick);
      else setDisplay(value);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, reduce]);

  return <span ref={ref}>{display}</span>;
}

export default function TrustStrip() {
  return (
    <section className="mt-14 lg:mt-20 px-5 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl bg-teal-900 text-white px-6 sm:px-10 py-10 lg:py-14 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.06] pointer-events-none" aria-hidden>
            <svg width="100%" height="100%" viewBox="0 0 800 200" preserveAspectRatio="none">
              {Array.from({ length: 8 }).map((_, i) => (
                <circle key={i} cx={i * 110 + 60} cy={100} r={70 + i * 6} stroke="white" fill="none" />
              ))}
            </svg>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="relative grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10"
          >
            {stats.map((s, i) => (
              <div key={s.label} className="relative">
                <div className="font-display font-bold leading-none text-[clamp(2rem,5vw,3.25rem)]">
                  <Counter value={s.value} />
                  <span className="text-teal-300">{s.value.endsWith("+") ? "" : ""}</span>
                </div>
                <div className="mt-3 text-[0.8rem] uppercase tracking-[0.18em] text-teal-300 font-semibold">
                  {s.label}
                </div>
                {i < stats.length - 1 && (
                  <div className="hidden lg:block absolute right-[-20px] top-1/2 -translate-y-1/2 w-px h-12 bg-white/15" />
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
