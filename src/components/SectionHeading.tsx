import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <Reveal>
        <div className={`inline-flex items-center gap-2 text-[0.72rem] font-semibold tracking-[0.16em] uppercase text-teal-700`}>
          <span className="inline-block w-6 h-px bg-teal-500" />
          {eyebrow}
        </div>
      </Reveal>
      <Reveal delay={0.05}>
        <h2
          className="mt-3 font-display font-bold text-teal-900 leading-[1.12] tracking-tight text-balance"
          style={{ fontSize: "clamp(1.6rem, 3vw, 2.35rem)" }}
        >
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={0.1}>
          <p className="mt-3 text-[1rem] text-muted leading-[1.7]">{sub}</p>
        </Reveal>
      )}
    </div>
  );
}
