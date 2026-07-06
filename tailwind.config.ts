import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // The `<alpha-value>` placeholder is required for Tailwind's
        // opacity modifiers (e.g. `bg-accent/40`) to work with colors
        // backed by CSS variables — without it, `/40` is silently dropped.
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        muted: "hsl(var(--muted) / <alpha-value>)",
        "muted-foreground": "hsl(var(--muted-foreground) / <alpha-value>)",
        border: "hsl(var(--border) / <alpha-value>)",
        accent: "hsl(var(--accent) / <alpha-value>)",
        "accent-2": "hsl(var(--accent-2) / <alpha-value>)",
        surface: "hsl(var(--surface) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        content: "1200px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        "pulse-ring": {
          "0%": { boxShadow: "0 0 0 0 hsl(var(--accent) / 0.45)" },
          "100%": { boxShadow: "0 0 0 12px hsl(var(--accent) / 0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.16,1,0.3,1) both",
        shimmer: "shimmer 3s linear infinite",
        "pulse-ring": "pulse-ring 2s cubic-bezier(0.4,0,0.6,1) infinite",
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(var(--accent) / 0.25), transparent)",
      },
    },
  },
  plugins: [],
};

export default config;
