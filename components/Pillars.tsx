/**
 * Pillars — Four platform pillars in a 2×2 feature grid with KV specs.
 * Server Component.
 */

interface Pillar {
  n: string;
  t: string;
  d: string;
  kv: [string, string][];
}

const ITEMS: Pillar[] = [
  {
    n: "F.01",
    t: "Single enriched-telemetry layer",
    d: "Every flow, packet, and log lands in one pipeline. Threat intel, geo, identity, and asset context are joined at ingest — not at query time.",
    kv: [["Sources", "NetFlow / sFlow / IPFIX"], ["Enrichment latency", "p95 < 90ms"]],
  },
  {
    n: "F.02",
    t: "Ask Qwanta — agentic, not bolted-on",
    d: "A peer interface to the visual UI. Same data, same actions, plain English. Investigates entities, builds KPIs, drafts reports.",
    kv: [["Interface", "Visual + Conversational"], ["Approvals", "Human-in-the-loop"]],
  },
  {
    n: "F.03",
    t: "KPI Builder & Dashboard Studio",
    d: "Visual constructors for analysts. Conversational constructors for everyone else. Same primitives underneath.",
    kv: [["Authoring", "GUI / NL / API"], ["Sharing", "Workspace-scoped"]],
  },
  {
    n: "F.04",
    t: "Investigation Workflows",
    d: "Ask once, get a risk-scored briefing back. IPs, domains, subnets — enriched, reasoned about, recommended for action: Block, Quarantine, Monitor, Tag, Allow.",
    kv: [["Output", "Briefing + actions"], ["Median runtime", "12–40s"]],
  },
];

export function Pillars() {
  return (
    <section className="qf-section qf-pillars">
      <div className="qf-container">
        <div className="qf-hr-label">02 / Platform</div>
        <h2 className="qf-display-l qf-pillars-head">
          Built for depth in network telemetry —<br />
          <span className="qf-fade">not breadth across everything.</span>
        </h2>
        <div className="qf-pillars-grid">
          {ITEMS.map((it) => (
            <article key={it.n} className="qf-pillar">
              <div className="qf-pillar-top">
                <span className="qf-mono qf-pillar-n">{it.n}</span>
                <span className="qf-pillar-rule" />
              </div>
              <h3 className="qf-pillar-t">{it.t}</h3>
              <p className="qf-pillar-d">{it.d}</p>
              <dl className="qf-pillar-kv qf-mono">
                {it.kv.map(([k, v]) => (
                  <div key={k} className="qf-pillar-kv-row">
                    <dt>{k}</dt><dd>{v}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
