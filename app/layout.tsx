import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Qwantaflow — Network Intelligence, AI-native",
  description:
    "Qwantaflow is an AI-native Network Intelligence Platform. One enriched-telemetry layer for NetOps, SecOps, and agentic AI. Insights, delivered first.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Dark mode default per brief. Nav + Footer live here so they're shared
  // across all routes; per-page files just render their content.
  return (
    <html lang="en" className="dark">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
