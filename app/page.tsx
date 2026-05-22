import { Hero } from "@/components/Hero";
import { AgentTheater } from "@/components/AgentTheater";
import { Architecture } from "@/components/Architecture";
import { Convergence } from "@/components/Convergence";
import { Pillars } from "@/components/Pillars";
import { Personas } from "@/components/Personas";
import { IsIsNot } from "@/components/IsIsNot";
import { CTA } from "@/components/CTA";

export default function Home() {
  return (
    <>
      {/* Hero — brand reveal, headline, CTAs, live agent theater on the right */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-[clamp(40px,5vw,80px)] px-6 py-20 sm:px-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:px-14 lg:py-24">
          <Hero />
          <div className="min-w-0">
            <AgentTheater />
          </div>
        </div>
      </section>

      <Architecture variant="landing" />
      <Convergence />
      <Pillars />
      <Personas />
      <IsIsNot />
      <CTA secondary={{ href: "/platform", label: "See the platform" }} />
    </>
  );
}
