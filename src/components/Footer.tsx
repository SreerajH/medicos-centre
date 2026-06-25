import { clinic } from "@/lib/clinic";

export default function Footer() {
  return (
    <footer className="bg-teal-900 text-teal-100 pt-14 pb-8 px-5 lg:px-8 mt-0">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-4 gap-10 lg:gap-8 pb-10 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white text-teal-900">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M12 2v20M5 12h14" />
                  <circle cx="12" cy="12" r="9" />
                </svg>
              </span>
              <span className="font-display font-bold text-white text-[1.1rem]">
                Medicos Centre
              </span>
            </div>
            <p className="mt-4 text-[0.9rem] leading-[1.7] text-teal-100/80">
              North India's trusted diagnostic lab network — clinical labs, ultrasound,
              ECG, PFT, stress testing and home collection.
            </p>
            <div className="mt-4 text-[0.78rem] uppercase tracking-[0.16em] font-semibold text-teal-300">
              Since 1984
            </div>
            <div className="mt-5 flex gap-2.5">
              <Social href={clinic.social.facebook} label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M13 21v-8h3l.5-4H13V6.5c0-1.1.3-1.9 2-1.9h2V1.1A29 29 0 0 0 14.1 1C11.2 1 9 2.7 9 6v3H6v4h3v8h4Z" /></svg>
              </Social>
              <Social href={clinic.social.instagram} label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>
              </Social>
            </div>
          </div>

          <div>
            <h4 className="text-white font-display font-semibold text-[0.95rem]">Quick links</h4>
            <ul className="mt-4 space-y-2 text-[0.88rem]">
              {[
                ["#about", "About"],
                ["#services", "Services"],
                ["#packages", "Health packages"],
                ["#locations", "Locations"],
                ["#faqs", "FAQs"],
                ["#contact", "Contact"],
              ].map(([h, l]) => (
                <li key={h}>
                  <a href={h} className="text-teal-100/80 hover:text-white transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-semibold text-[0.95rem]">Contact</h4>
            <ul className="mt-4 space-y-2.5 text-[0.88rem] text-teal-100/85">
              <li className="leading-[1.6]">
                <span className="inline-block mr-1.5">📍</span>
                {clinic.address.line1}, {clinic.address.line2}, {clinic.address.city} {clinic.address.zip}
              </li>
              <li>
                <a href={`tel:${clinic.helplineRaw}`} className="hover:text-white transition-colors">
                  📞 {clinic.helpline} <span className="text-teal-300 text-[0.78rem]">(Helpline)</span>
                </a>
              </li>
              <li>
                <a href={`tel:${clinic.appointmentsRaw}`} className="hover:text-white transition-colors">
                  📞 {clinic.appointments} <span className="text-teal-300 text-[0.78rem]">(Appointments)</span>
                </a>
              </li>
              <li>
                <a href={`tel:${clinic.homeVisitsRaw}`} className="hover:text-white transition-colors">
                  📞 {clinic.homeVisits} <span className="text-teal-300 text-[0.78rem]">(Home visits)</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${clinic.email}`} className="hover:text-white transition-colors break-all">
                  ✉ {clinic.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-semibold text-[0.95rem]">Hours</h4>
            <ul className="mt-4 space-y-1.5 text-[0.85rem] text-teal-100/85">
              {clinic.hours.map((h) => (
                <li key={h.day} className="flex justify-between">
                  <span>{h.day}</span>
                  <span className="font-mono text-teal-100">{h.value}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[0.78rem] text-teal-100/70 leading-[1.6]">
              Home collection by appointment — call ahead.
            </p>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[0.78rem] text-teal-100/70">
          <div>© {new Date().getFullYear()} Medicos Centre. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Social({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      aria-label={label}
      className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
    >
      {children}
    </a>
  );
}
