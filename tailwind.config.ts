import type { Config } from "tailwindcss";

/*
 * shadcn-style token bridge.
 * CSS variables hold raw HSL values; Tailwind reads them via hsl(var(...)).
 * This is the same pattern your product UI uses — keeps marketing site
 * and product on a single source-of-truth.
 */
const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--foreground))",
        },
        border: "hsl(var(--border))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        netops: {
          DEFAULT: "hsl(var(--netops))",
          soft: "hsl(var(--netops-soft))",
        },
        secops: {
          DEFAULT: "hsl(var(--secops))",
          soft: "hsl(var(--secops-soft))",
        },
        agentic: {
          DEFAULT: "hsl(var(--agentic))",
          soft: "hsl(var(--agentic-soft))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        sidebar: {
          bg: "hsl(var(--sidebar-bg))",
          fg: "hsl(var(--sidebar-fg))",
          muted: "hsl(var(--sidebar-muted))",
          border: "hsl(var(--sidebar-border))",
        },
        markAnchor: "hsl(var(--mark-anchor))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["ui-monospace", "SF Mono", "Menlo", "Consolas", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
