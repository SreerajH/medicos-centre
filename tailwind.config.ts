import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "teal-900": "#0D4F4A",
        "teal-700": "#1A7A72",
        "teal-500": "#2CA89E",
        "teal-300": "#7CC9C2",
        "teal-100": "#E8F5F4",
        paper: "#F8FAFA",
        ink: "#1C2B2A",
        muted: "#5A7070",
        line: "#D4E4E3",
        amber: "#E8912A",
        "amber-hover": "#C97A1E",
        "amber-soft": "#FBEBD3",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        card: "0 1px 0 0 rgba(13,79,74,0.04), 0 16px 40px -24px rgba(13,79,74,0.3)",
        lift: "0 2px 0 0 rgba(44,168,158,0.18), 0 22px 50px -24px rgba(13,79,74,0.4)",
        nav: "0 1px 0 0 rgba(13,79,74,0.06), 0 12px 28px -20px rgba(13,79,74,0.25)",
      },
      keyframes: {
        draw: {
          "0%": { strokeDashoffset: "var(--len, 600)" },
          "100%": { strokeDashoffset: "0" },
        },
        pulse: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        draw: "draw 2.4s ease-out forwards",
        pulse: "pulse 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
