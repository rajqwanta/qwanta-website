import { Architecture } from "@/components/Architecture";
import { PlatformHero } from "@/components/platform/PlatformHero";
import { AskQwantaSection } from "@/components/platform/AskQwantaSection";
import { DataExplorer } from "@/components/platform/DataExplorer";
import { Build } from "@/components/platform/Build";
import { Reports } from "@/components/platform/Reports";
import { Enrich } from "@/components/platform/Enrich";
import { Api } from "@/components/platform/Api";
import { CTA } from "@/components/CTA";

export const metadata = {
  title: "Platform — Qwantaflow",
  description:
    "One platform. Many surfaces. Every Qwantaflow capability reads from a single enriched-telemetry layer.",
};

export default function PlatformPage() {
  return (
    <>
      <PlatformHero />
      <Architecture variant="platform" />
      <AskQwantaSection />
      <DataExplorer />
      <Build />
      <Reports />
      <Enrich />
      <Api />
      <CTA
        eyebrow="Built on enriched telemetry"
        title={
          <>
            See it,<br />
            in <em className="qf-em">your</em> network.
          </>
        }
      />
    </>
  );
}
