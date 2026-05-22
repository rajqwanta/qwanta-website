/**
 * Architecture — "second hero" section.
 * Generic sources on the left, Qwantaflow platform card in the middle,
 * generic destinations on the right. Lime/teal pulse dots travel through
 * the gutters via CSS animation.
 *
 * Server Component — no React state, just declarative JSX + CSS animation.
 *
 * `variant` adjusts the eyebrow label only:
 *   - "landing"  → "Architecture at a glance"
 *   - "platform" → "00 / Architecture at a glance"
 */

interface Group {
  label: string;
  items: [string, string][]; // [name, short tag]
}

const SOURCES: Group[] = [
  {
    label: "Network",
    items: [
      ["Routers",        "RTR"],
      ["Switches",       "SW"],
      ["Firewalls",      "FW"],
      ["Load balancers", "LB"],
      ["VPN gateways",   "VPN"],
      ["Wireless",       "WiFi"],
    ],
  },
  {
    label: "Probes",
    items: [
      ["Packet brokers", "PKT"],
      ["Network TAPs",   "TAP"],
      ["IDS / IPS",      "IDS"],
      ["NDR sensors",    "NDR"],
    ],
  },
  {
    label: "Cloud & SaaS",
    items: [
      ["AWS VPC",        "AWS"],
      ["GCP / Azure",    "GCP"],
      ["Kubernetes",     "K8S"],
      ["SaaS API logs",  "API"],
    ],
  },
  {
    label: "Telemetry formats",
    items: [
      ["NetFlow / sFlow", "NF"],
      ["IPFIX",           "IPF"],
      ["Syslog",          "LOG"],
      ["OpenTelemetry",   "OTL"],
    ],
  },
];

const DESTS: Group[] = [
  {
    label: "Notify",
    items: [
      ["Slack",       "SLK"],
      ["Teams",       "TMS"],
      ["PagerDuty",   "PD"],
      ["Email",       "MAIL"],
    ],
  },
  {
    label: "Automate",
    items: [
      ["SOAR",            "SOAR"],
      ["EDR / XDR",       "EDR"],
      ["Firewall push",   "FW"],
      ["Webhooks",        "HOOK"],
    ],
  },
  {
    label: "Tickets",
    items: [
      ["ServiceNow",  "SN"],
      ["Jira",        "JIRA"],
      ["Linear",      "LIN"],
    ],
  },
  {
    label: "Analytics",
    items: [
      ["SIEM",              "SIEM"],
      ["BI / Warehouse",    "BI"],
      ["Executive reports", "EXEC"],
      ["Open REST API",     "API"],
    ],
  },
];

interface Layer {
  tag: string;
  title: string;
  sub: string;
  rate: string;
  accent?: boolean;
}

const LAYERS: Layer[] = [
  { tag: "INGEST",  title: "Ingest & normalize",        sub: "Streaming · push or pull · auto-schema",                 rate: "~3.2 Tbps peak" },
  { tag: "ENRICH",  title: "Enrichment",                 sub: "WHOIS · ASN · GeoIP · Identity · Asset · IOC",            rate: "p95 < 90ms", accent: true },
  { tag: "LAKE",    title: "Enriched telemetry lake",    sub: "Columnar · time-travelable · open formats",              rate: "90d hot · ∞ cold" },
  { tag: "AGENTS",  title: "Agentic AI layer",           sub: "Detector · Investigator · Threat Intel · Responder · Reporter", rate: "human-in-the-loop" },
];

const SURFACES = ["Ask Qwanta", "Explorer", "KPI Builder", "Studio", "Dashboards", "Reports"];

function ArchChip({ name, tag, side }: { name: string; tag: string; side: "l" | "r" }) {
  return (
    <div className={`qf-ach-chip qf-ach-chip-${side}`}>
      <span className="qf-ach-chip-tag qf-mono">{tag}</span>
      <span className="qf-ach-chip-name">{name}</span>
      <span className="qf-ach-chip-wire" aria-hidden />
    </div>
  );
}

function ArchColumn({ side, groups }: { side: "l" | "r"; groups: Group[] }) {
  return (
    <div className={`qf-ach-col qf-ach-col-${side}`}>
      {groups.map((g) => (
        <div key={g.label} className="qf-ach-group">
          <div className="qf-ach-group-label qf-mono">{g.label}</div>
          <div className="qf-ach-group-items">
            {g.items.map(([name, tag]) => (
              <ArchChip key={name} name={name} tag={tag} side={side} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ArchPulses() {
  return (
    <>
      <div className="qf-ach-pulses qf-ach-pulses-in" aria-hidden>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <span key={`i-${i}`} className="qf-ach-pulse" style={{ animationDelay: `${i * 0.55}s` }} />
        ))}
      </div>
      <div className="qf-ach-pulses qf-ach-pulses-out" aria-hidden>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <span key={`o-${i}`} className="qf-ach-pulse" style={{ animationDelay: `${i * 0.55 + 0.3}s` }} />
        ))}
      </div>
    </>
  );
}

function ArchPlatform() {
  return (
    <div className="qf-ach-platform">
      <div className="qf-ach-platform-head">
        <span className="qf-ach-platform-mark" aria-hidden>
          <span className="qf-ach-platform-mark-core" />
        </span>
        <div>
          <div className="qf-ach-platform-eyebrow qf-mono">QWANTAFLOW · CORE</div>
          <div className="qf-ach-platform-title">Network Intelligence Platform</div>
        </div>
      </div>

      <div className="qf-ach-platform-layers">
        {LAYERS.map((l) => (
          <div key={l.tag} className={`qf-ach-layer ${l.accent ? "is-accent" : ""}`}>
            <div className="qf-ach-layer-tag qf-mono">{l.tag}</div>
            <div className="qf-ach-layer-body">
              <div className="qf-ach-layer-title">{l.title}</div>
              <div className="qf-ach-layer-sub qf-mono">{l.sub}</div>
            </div>
            <div className="qf-ach-layer-rate qf-mono">{l.rate}</div>
          </div>
        ))}
      </div>

      <div className="qf-ach-platform-surfaces">
        <div className="qf-ach-platform-surfaces-label qf-mono">Surfaces</div>
        <div className="qf-ach-platform-surfaces-row">
          {SURFACES.map((s) => (
            <span key={s} className="qf-ach-surface qf-mono">{s}</span>
          ))}
        </div>
      </div>

      <ArchPulses />
    </div>
  );
}

function ArchStat({ n, k }: { n: string; k: string }) {
  return (
    <span className="qf-ach-stat">
      <span className="qf-ach-stat-n">{n}</span>
      <span className="qf-ach-stat-k">{k}</span>
    </span>
  );
}

export function Architecture({ variant = "landing" }: { variant?: "landing" | "platform" }) {
  return (
    <section className={`qf-section qf-ach qf-ach-v-${variant}`}>
      <div className="qf-container">
        <div className="qf-hr-label">
          {variant === "landing" ? "Architecture at a glance" : "00 / Architecture at a glance"}
        </div>

        <div className="qf-ach-head">
          <h2 className="qf-display-l">
            One platform.<br />
            <span className="qf-fade">Every source. Every destination.</span>
          </h2>
          <p className="qf-body-l">
            Qwantaflow sits between the network you have and the workflows you already run.
            Bring telemetry from anywhere — routers, firewalls, cloud, probes, agents —
            and route enriched intelligence out to anywhere your team already operates.
          </p>
          <div className="qf-ach-stats qf-mono">
            <ArchStat n="200+"    k="Connectors" />
            <ArchStat n="90ms"    k="Enrichment p95" />
            <ArchStat n="3.2Tbps" k="Peak ingest" />
            <ArchStat n="90d / ∞" k="Hot / cold retention" />
          </div>
        </div>

        <div className="qf-ach-diagram">
          <div className="qf-ach-col-head qf-ach-col-head-l qf-mono">Sources</div>
          <div className="qf-ach-col-head qf-ach-col-head-c qf-mono">Platform</div>
          <div className="qf-ach-col-head qf-ach-col-head-r qf-mono">Destinations</div>

          <ArchColumn side="l" groups={SOURCES} />
          <ArchPlatform />
          <ArchColumn side="r" groups={DESTS} />
        </div>

        <div className="qf-ach-foot qf-mono">
          <span>Open formats · Parquet, Arrow, OpenTelemetry</span>
          <span className="qf-ach-foot-sep">·</span>
          <span>Deploy in &lt; 4 hours · cloud, self-hosted, or air-gapped</span>
          <span className="qf-ach-foot-sep">·</span>
          <span>No agents required for network telemetry</span>
        </div>
      </div>
    </section>
  );
}
