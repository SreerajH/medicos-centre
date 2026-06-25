"use client";

import { useEffect, useState } from "react";
import { clinic } from "@/lib/clinic";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#locations", label: "Locations" },
  { href: "#packages", label: "Packages" },
  { href: "#faqs", label: "FAQs" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur shadow-nav border-b border-line"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <nav
        className={`mx-auto max-w-7xl px-5 lg:px-8 flex items-center justify-between transition-all ${
          scrolled ? "h-[60px]" : "h-[72px]"
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5 group">
          <Logo />
          <div className="leading-tight">
            <div className="font-display font-bold text-teal-900 text-[1.05rem] tracking-tight">
              Medicos Centre
            </div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted font-medium">
              Diagnostics · Since 1984
            </div>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[0.92rem] font-medium text-ink hover:text-teal-700 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-2.5">
          <a
            href={clinic.reportsPortal}
            target="_blank"
            rel="noopener"
            className="px-3.5 py-2 text-[0.9rem] font-semibold text-teal-900 border border-teal-700/40 rounded-full hover:bg-teal-100 transition-colors"
          >
            My Reports →
          </a>
          <a
            href="#book"
            className="px-4 py-2 text-[0.9rem] font-semibold text-white bg-amber rounded-full hover:bg-amber-hover transition-colors shadow-[0_8px_22px_-12px_rgba(232,145,42,0.6)]"
          >
            Book a Test ▸
          </a>
        </div>

        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="lg:hidden p-2 -mr-2 text-teal-900"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-teal-900/40"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-[86%] max-w-sm bg-white flex flex-col">
            <div className="flex items-center justify-between px-5 h-[72px] border-b border-line">
              <div className="flex items-center gap-2">
                <Logo />
                <span className="font-display font-bold text-teal-900">
                  Medicos Centre
                </span>
              </div>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="p-2 -mr-2 text-teal-900"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M6 6l12 12M6 18L18 6" />
                </svg>
              </button>
            </div>
            <ul className="flex-1 px-5 py-6 space-y-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-[1.05rem] font-medium text-ink border-b border-line"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <a
                  href={`tel:${clinic.helplineRaw}`}
                  className="block py-2.5 text-[0.95rem] text-teal-700 font-medium"
                >
                  📞 {clinic.helpline}
                </a>
                <a
                  href={`tel:${clinic.appointmentsRaw}`}
                  className="block py-2.5 text-[0.95rem] text-teal-700 font-medium"
                >
                  📞 {clinic.appointments} <span className="text-muted text-[0.8rem]">Appointments</span>
                </a>
              </li>
            </ul>
            <div className="p-5 space-y-2.5 border-t border-line bg-paper">
              <a
                href="#book"
                onClick={() => setOpen(false)}
                className="block w-full text-center py-3.5 text-[0.95rem] font-semibold text-white bg-amber rounded-full hover:bg-amber-hover transition-colors"
              >
                Book a Test ▸
              </a>
              <a
                href={clinic.reportsPortal}
                target="_blank"
                rel="noopener"
                className="block w-full text-center py-3.5 text-[0.95rem] font-semibold text-teal-900 border border-teal-700/40 rounded-full hover:bg-teal-100 transition-colors"
              >
                My Reports →
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function Logo() {
  return (
    <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-teal-900 text-white">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M5 12h14" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    </span>
  );
}
