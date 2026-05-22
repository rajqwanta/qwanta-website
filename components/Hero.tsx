import { BrandReveal } from "./BrandReveal";

/**
 * Hero (minimal port — text + CTAs).
 * Port the agent theater, workspaces strip, and network canvas from
 * hero.jsx incrementally. The brand lockup (BrandReveal) is the part
 * that needed to ship to production first.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-14">
        <div className="max-w-2xl">
          <BrandReveal />

          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5">
            <span
              className="size-1.5 rounded-full"
              style={{ background: "hsl(var(--primary))", boxShadow: "0 0 10px hsl(var(--primary) / 0.5)" }}
            />
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              Network Intelligence Platform
            </span>
          </div>

          <h1 className="mb-6 text-balance text-[clamp(40px,5.4vw,76px)] font-semibold leading-[0.96] tracking-[-0.025em] text-foreground">
            Insights,<br />
            <span style={{ color: "hsl(var(--primary))" }}>delivered first.</span>
          </h1>

          <p className="mb-9 max-w-[56ch] text-lg leading-relaxed text-muted-foreground">
            One enriched-telemetry layer. NetOps, SecOps, and a team of agentic peers — investigating,
            correlating, and recommending action from the same source of truth.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="/demo"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-px"
            >
              Book a demo <span>→</span>
            </a>
            <a
              href="/platform"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-card"
            >
              See the platform
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
