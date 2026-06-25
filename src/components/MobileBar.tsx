import { clinic } from "@/lib/clinic";

export default function MobileBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-white/95 backdrop-blur border-t border-line shadow-[0_-8px_24px_-12px_rgba(13,79,74,0.2)]">
      <div className="px-4 py-2.5 grid grid-cols-2 gap-2.5">
        <a
          href="#book"
          className="flex items-center justify-center gap-2 h-11 rounded-full bg-amber text-white font-semibold text-[0.88rem] hover:bg-amber-hover transition-colors"
        >
          Book a Test
        </a>
        <a
          href={`tel:${clinic.appointmentsRaw}`}
          className="flex items-center justify-center gap-2 h-11 rounded-full border border-teal-700/40 text-teal-900 font-semibold text-[0.88rem]"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7 12.8 12.8 0 0 0 .7 2.8 2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5 12.8 12.8 0 0 0 2.8.7A2 2 0 0 1 22 16.9Z" />
          </svg>
          Call
        </a>
      </div>
    </div>
  );
}
