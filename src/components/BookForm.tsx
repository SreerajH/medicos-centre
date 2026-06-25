"use client";

import { useMemo, useState } from "react";
import { clinic, services } from "@/lib/clinic";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function BookForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [home, setHome] = useState(false);
  const [notes, setNotes] = useState("");

  const link = useMemo(() => {
    const lines = [
      `Hi Medicos Centre, I'd like to book a test.`,
      name && `Name: ${name}`,
      phone && `Phone: ${phone}`,
      service && `Test: ${service}`,
      date && `Preferred date: ${date}`,
      home ? `Home sample collection: Yes` : `Home sample collection: No`,
      notes && `Notes: ${notes}`,
    ].filter(Boolean);
    const target = home ? clinic.homeVisitsRaw : clinic.appointmentsRaw;
    return `https://wa.me/${target}?text=${encodeURIComponent(lines.join("\n"))}`;
  }, [name, phone, service, date, home, notes]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(link, "_blank", "noopener");
  };

  return (
    <section id="book" className="py-20 lg:py-28 px-5 lg:px-8">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start">
        <div>
          <SectionHeading
            eyebrow="Book a test"
            title="Tell us what you need. We'll confirm in a few hours."
            sub="Walk-ins are welcome — but if you prefer to book ahead, this form sends a prefilled WhatsApp to our appointments desk. No queues, no callbacks."
          />
          <div className="mt-8 space-y-4">
            <Detail
              icon="📞"
              label="Helpline"
              value={clinic.helpline}
              href={`tel:${clinic.helplineRaw}`}
            />
            <Detail
              icon="🗓"
              label="Appointments"
              value={clinic.appointments}
              href={`tel:${clinic.appointmentsRaw}`}
            />
            <Detail
              icon="🏠"
              label="Home sample collection"
              value={clinic.homeVisits}
              href={`tel:${clinic.homeVisitsRaw}`}
            />
            <Detail icon="✉" label="Email" value={clinic.email} href={`mailto:${clinic.email}`} />
          </div>
        </div>

        <Reveal>
          <form
            onSubmit={submit}
            className="rounded-3xl bg-white border border-line shadow-card p-6 lg:p-8"
          >
            <Field label="Your name">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full name"
                className="input"
                required
              />
            </Field>
            <Field label="Phone">
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="10-digit mobile"
                inputMode="tel"
                pattern="[0-9 +-]{10,15}"
                className="input"
                required
              />
            </Field>
            <Field label="Test or service">
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="input"
                required
              >
                <option value="">Pick a test or package</option>
                {services.map((s) => (
                  <option key={s.key} value={s.name}>
                    {s.name}
                  </option>
                ))}
                <option value="Health package">Health package</option>
                <option value="Other / not sure">Other / not sure</option>
              </select>
            </Field>
            <Field label="Preferred date">
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="input"
              />
            </Field>
            <label className="flex items-center gap-3 mt-2 mb-4 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={home}
                onChange={(e) => setHome(e.target.checked)}
                className="w-5 h-5 accent-amber"
              />
              <span className="text-[0.92rem] text-ink">
                I'd like <span className="font-semibold">home sample collection</span>.
              </span>
            </label>
            <Field label="Notes (optional)">
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
                placeholder="Anything we should know — fasting, special instructions, etc."
                className="input resize-none"
              />
            </Field>
            <style jsx>{`
              .input {
                width: 100%;
                height: 48px;
                padding: 0 14px;
                border-radius: 12px;
                border: 1px solid #d4e4e3;
                background: #f8fafa;
                color: #1c2b2a;
                font-size: 0.95rem;
                font-family: inherit;
                outline: none;
                transition: border-color 0.15s, background 0.15s;
              }
              .input:focus {
                border-color: #2ca89e;
                background: #ffffff;
              }
              textarea.input {
                height: auto;
                padding: 12px 14px;
                line-height: 1.5;
              }
              select.input {
                appearance: none;
                background-image: url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2 4l4 4 4-4' stroke='%231A7A72' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
                background-repeat: no-repeat;
                background-position: right 14px center;
                padding-right: 36px;
              }
            `}</style>
            <button
              type="submit"
              className="mt-2 w-full h-12 rounded-full bg-amber hover:bg-amber-hover text-white font-semibold text-[0.95rem] transition-colors inline-flex items-center justify-center gap-2"
            >
              Send via WhatsApp
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M20.5 3.5A11 11 0 0 0 3.6 17.2L2 22l4.9-1.5a11 11 0 0 0 13.6-17ZM12 20.1a8.1 8.1 0 0 1-4.1-1.1l-.3-.2-3 .9.9-2.9-.2-.3a8.1 8.1 0 1 1 6.7 3.6Zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.7.8-.8 1-.2.2-.3.2-.6.1a6.6 6.6 0 0 1-3.3-2.9c-.2-.4 0-.4.3-.7l.4-.5c.1-.2.1-.4 0-.5l-.7-1.8c-.2-.4-.4-.4-.6-.4h-.5a.9.9 0 0 0-.7.3 2.7 2.7 0 0 0-.9 2c0 1.2.9 2.4 1 2.6.1.2 1.8 2.8 4.5 3.9.6.3 1.1.5 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.2-.5-.3Z" />
              </svg>
            </button>
            <p className="mt-3 text-center text-[0.78rem] text-muted">
              We'll confirm your slot within a few hours.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block mb-3.5">
      <span className="block text-[0.8rem] font-medium text-ink mb-1.5">{label}</span>
      {children}
    </label>
  );
}

function Detail({ icon, label, value, href }: { icon: string; label: string; value: string; href: string }) {
  return (
    <a
      href={href}
      className="group flex items-start gap-3 p-4 rounded-xl border border-line bg-paper hover:bg-teal-100/40 hover:border-teal-500 transition-colors"
    >
      <span className="text-[1.05rem]" aria-hidden>{icon}</span>
      <div className="min-w-0">
        <div className="text-[0.74rem] uppercase tracking-[0.14em] font-semibold text-muted">
          {label}
        </div>
        <div className="font-display font-semibold text-teal-900 text-[1rem] mt-0.5">
          {value}
        </div>
      </div>
      <span className="ml-auto text-teal-700 self-center transition-transform group-hover:translate-x-0.5">→</span>
    </a>
  );
}
