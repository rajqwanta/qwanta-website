import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Qwantaflow — Network Intelligence, AI-native",
  description:
    "Qwantaflow is an AI-native Network Intelligence Platform. One enriched-telemetry layer for NetOps, SecOps, and agentic AI. Insights, delivered first.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Dark mode default (per brief). Toggle to .light via a client component
  // when you add a theme switcher.
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
