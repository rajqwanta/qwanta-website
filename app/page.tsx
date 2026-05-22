import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        {/* PORT ME (in this order, as we design them here):
            - <AgentTheater /> from hero.jsx — the tabbed live agent demo
            - <Architecture /> from architecture.jsx — the source/dest diagram
            - <Convergence /> from sections.jsx — three disciplines, one platform
            - <Pillars /> from sections.jsx
            - <Personas /> from sections.jsx
            - <IsIsNot /> from sections.jsx
            - <CTA /> from sections.jsx
        */}
      </main>
      <Footer />
    </>
  );
}
