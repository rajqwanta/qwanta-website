/**
 * Build — KPI Builder + Dashboard Studio mock.
 * Server Component.
 */
type Spark = "up" | "down" | "flat" | "risk";

interface Tile {
  k: string;
  v: string;
  s: Spark;
}

const TILES: Tile[] = [
  { k: "RTT p99",  v: "1.8ms",  s: "up"   },
  { k: "Flows/s",  v: "12.4k",  s: "up"   },
  { k: "Loss",     v: "0.02%",  s: "flat" },
  { k: "Alerts",   v: "14",     s: "risk" },
  { k: "Sites OK", v: "285/287",s: "up"   },
  { k: "SLA",      v: "99.97%", s: "up"   },
];

const SPARK_PATHS: Record<Spark, string> = {
  up:   "M0 12 L8 9 L16 11 L24 6 L32 7 L40 3",
  flat: "M0 8 L8 9 L16 7 L24 9 L32 8 L40 8",
  down: "M0 4 L8 6 L16 5 L24 8 L32 7 L40 11",
  risk: "M0 9 L6 9 L8 3 L10 9 L18 9 L20 14 L22 9 L40 9",
};

function SparkLine({ kind }: { kind: Spark }) {
  return (
    <svg width="56" height="16" viewBox="0 0 40 16" fill="none" className="qf-studio-spark" aria-hidden>
      <path d={SPARK_PATHS[kind]} stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Build() {
  return (
    <section id="build" className="qf-section qf-fsec">
      <div className="qf-container">
        <div className="qf-hr-label">03 / Build — KPI Builder &amp; Dashboard Studio</div>
        <div className="qf-fsec-grid">
          <div className="qf-fsec-copy">
            <h2 className="qf-display-l">
              Compose the right view<br />
              <span className="qf-fade">for the right role.</span>
            </h2>
            <p className="qf-body-l">
              KPI Builder turns expressions into named, shareable primitives.
              Dashboard Studio arranges them into role-tailored workspaces —
              same data, five different lenses.
            </p>
            <ul className="qf-feat-list">
              <li><strong>Workspace mosaics.</strong> Drag KPIs onto a grid; pin time ranges; lock to a role.</li>
              <li><strong>Conversational composition.</strong> &ldquo;Add a P99 latency tile next to packet loss&rdquo; — done.</li>
              <li><strong>One data layer.</strong> A KPI built once works in dashboards, reports, alerts, and Ask Qwanta.</li>
            </ul>
          </div>
          <div className="qf-fsec-visual">
            <div className="qf-studio-mock">
              {TILES.map((t, i) => (
                <div key={t.k} className={`qf-studio-tile qf-studio-tile-${i}`}>
                  <div className="qf-studio-tile-k qf-mono">{t.k}</div>
                  <div className="qf-studio-tile-v">{t.v}</div>
                  <SparkLine kind={t.s} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
