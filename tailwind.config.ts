import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0D5C2F",
          dark: "#094A25",
          light: "#0E6B36",
        },
        forest: {
          DEFAULT: "#0A3B1E",
          dark: "#072D16",
          light: "#0C4523",
        },
        lime: {
          DEFAULT: "#B4D12E",
          dark: "#9AB826",
          light: "#C4E048",
          muted: "#B4D12E20",
        },
        orange: {
          DEFAULT: "#F47920",
          dark: "#D8681A",
        },
        dark: {
          DEFAULT: "#1A1A1A",
          light: "#2A2A2A",
          lighter: "#3A3A3A",
        },
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display": ["4.5rem", { lineHeight: "1.02", letterSpacing: "-0.04em", fontWeight: "800" }],
        "display-sm": ["3.5rem", { lineHeight: "1.08", letterSpacing: "-0.03em", fontWeight: "800" }],
        "heading": ["2.5rem", { lineHeight: "1.12", letterSpacing: "-0.025em", fontWeight: "700" }],
        "heading-sm": ["1.75rem", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" }],
        "subheading": ["1.25rem", { lineHeight: "1.6", fontWeight: "400" }],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        "card": "0 4px 40px rgba(0,0,0,0.06)",
        "card-hover": "0 12px 50px rgba(0,0,0,0.14)",
        "float": "0 20px 60px rgba(0,0,0,0.18)",
        "glow-lime": "0 0 40px rgba(180,209,46,0.3)",
        "glow-lime-lg": "0 0 60px rgba(180,209,46,0.4)",
        "glass": "0 8px 32px rgba(0,0,0,0.12)",
      },
      backdropBlur: {
        xs: "2px",
      },
      keyframes: {
        "count-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(180,209,46,0.2)" },
          "50%": { boxShadow: "0 0 40px rgba(180,209,46,0.5)" },
        },
        "infinite-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "solucoes-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "count-up": "count-up 0.6s ease-out forwards",
        "slide-up": "slide-up 0.8s ease-out forwards",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "infinite-scroll": "infinite-scroll 40s linear infinite",
        "solucoes-scroll": "solucoes-scroll 60s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
