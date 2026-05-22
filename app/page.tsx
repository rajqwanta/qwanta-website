import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { AgentTheater } from "@/components/AgentTheater";
import { Architecture } from "@/components/Architecture";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero — brand reveal, headline, CTAs, live agent theater on the right */}
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-[clamp(40px,5vw,80px)] px-6 py-20 sm:px-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:px-14 lg:py-24">
            <Hero />
            <div className="min-w-0">
              <AgentTheater />
            </div>
          </div>
        </section>

        {/* Architecture — generic sources/destinations + platform core */}
        <Architecture variant="landing" />

        {/* PORT NEXT (as we design them):
            - <Convergence /> — three disciplines, one platform
            - <Pillars />
            - <Personas />
            - <IsIsNot />
            - <CTA />
        */}
      </main>
      <Footer />
    </>
  );
}
