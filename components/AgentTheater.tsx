"use client";

/**
 * AgentTheater — live, looping demo of three Qwantaflow scenarios:
 * Threat Investigation (SecOps), Performance Anomaly (NetOps), Executive KPI (Reports).
 *
 * Each scenario plays out as a sequence of agent cards appearing — Detector,
 * Investigator (with sub-steps), Threat Intel / Capacity / Cost, Responder /
 * Reporter — then concludes with a colored verdict bar. After hold, advances
 * to the next scenario. Tab progress bars track position in scene.
 *
 * Client component because it uses useState + useEffect + intervals.
 */
import { useEffect, useState, type ReactNode } from "react";

/* ───────── Scenario definitions ───────── */

type Tone = "accent" | "warn" | "danger";

interface Scenario {
  key: string;
  label: string;
  short: string;
  target: string;
  prio: string;
  casePrefix: string;
  caseSeed: number;
  stepTimes: number[];
  verdict: { text: string; risk: string; tone: Tone | "accent" };
  render: (show: (n: number) => boolean) => ReactNode;
}

const FINAL_STEP = 8;
const TAB_HOLD_MS = 1800;

function buildSec(show: (n: number) => boolean) {
  return (
    <>
      <AgentCard show={show(1)} tag="DET" tone="warn"
        name="Detector" sub="anomaly model · v4"
        headline="Beaconing pattern flagged"
        detail="4 hosts · prod-edge/* · 6h window"
        rtt="380ms" />
      <AgentCard show={show(2)} tag="INV" tone="accent"
        name="Investigator" sub="enrichment pipeline"
        headline="Enriching entity"
        rtt={show(5) ? "1.2s" : "··"}>
        <SubStep on={show(2)} label="WHOIS"    value="BulletProof Inc · TR" />
        <SubStep on={show(3)} label="ASN"      value="64500" />
        <SubStep on={show(4)} label="GeoIP"    value="Istanbul, TR" />
        <SubStep on={show(5)} label="Baseline" value="4 beacons / 30d" />
      </AgentCard>
      <AgentCard show={show(6)} tag="TI" tone="danger"
        name="Threat Intel" sub="3 feeds · curated"
        headline="IOC match · APT41 · C2"
        detail="Last seen 14h ago · confidence 0.92"
        rtt="240ms" />
      <AgentCard show={show(7)} tag="RSP" tone="accent"
        name="Responder" sub="action recommender"
        headline="Recommend · Quarantine 4 hosts"
        detail="Stages in 30s · awaiting approval"
        rtt="180ms" />
    </>
  );
}

function buildNet(show: (n: number) => boolean) {
  return (
    <>
      <AgentCard show={show(1)} tag="DET" tone="warn"
        name="Detector" sub="latency model · v4"
        headline="P99 latency spike on prod-edge-04"
        detail="138ms → 412ms · last 4 min"
        rtt="210ms" />
      <AgentCard show={show(2)} tag="INV" tone="accent"
        name="Investigator" sub="path & flow analysis"
        headline="Isolating contributors"
        rtt={show(5) ? "0.9s" : "··"}>
        <SubStep on={show(2)} label="BGP"      value="prepend on AS-15169" />
        <SubStep on={show(3)} label="Peering"  value="LON-IXP · congested" />
        <SubStep on={show(4)} label="Talkers"  value="api-prod-* · 62% share" />
        <SubStep on={show(5)} label="Trend"    value="rising · 6h" />
      </AgentCard>
      <AgentCard show={show(6)} tag="CAP" tone="warn"
        name="Capacity" sub="forecast model"
        headline="Utilization 87% → 95% in 4h"
        detail="Threshold breach probability 0.91"
        rtt="160ms" />
      <AgentCard show={show(7)} tag="RSP" tone="accent"
        name="Responder" sub="action recommender"
        headline="Recommend · Re-route via NYC-EDGE-07"
        detail="Saves ~240ms p95 · no service impact"
        rtt="140ms" />
    </>
  );
}

function buildRep(show: (n: number) => boolean) {
  return (
    <>
      <AgentCard show={show(1)} tag="REQ" tone="accent"
        name="Operator" sub="natural-language brief"
        headline={`"Build CFO weekly: spend vs SLA, by site."`}
        detail="Recurring · Mondays 06:00 UTC"
        rtt="—" />
      <AgentCard show={show(2)} tag="KPI" tone="accent"
        name="KPI Builder" sub="composer"
        headline="Composing KPI"
        rtt={show(5) ? "1.4s" : "··"}>
        <SubStep on={show(2)} label="Dim"      value="site · provider · ASN" />
        <SubStep on={show(3)} label="Metric"   value="$/Gbps · SLA breach" />
        <SubStep on={show(4)} label="Window"   value="last 7 days, daily" />
        <SubStep on={show(5)} label="Compare"  value="vs prior 7 days" />
      </AgentCard>
      <AgentCard show={show(6)} tag="COST" tone="warn"
        name="Cost Agent" sub="finance enrichment"
        headline="Top variance · LON-EDGE-02 +18%"
        detail="2 SLA breaches · $4.2k attributable"
        rtt="320ms" />
      <AgentCard show={show(7)} tag="OUT" tone="accent"
        name="Reporter" sub="distribution"
        headline="Draft ready · routed to cfo@qwantaflow.com"
        detail="PDF + CSV · ~6.2h analyst time saved"
        rtt="90ms" />
    </>
  );
}

const SCENARIOS: Scenario[] = [
  {
    key: "sec",
    label: "Threat Investigation",
    short: "Security",
    target: "203.0.113.45",
    prio: "P1",
    casePrefix: "INV",
    caseSeed: 2914,
    stepTimes: [800, 950, 950, 800, 800, 800, 1300, 1400, 1800, 1500],
    verdict: { text: "QUARANTINE STAGED · approval required", risk: "RISK · 78", tone: "danger" },
    render: buildSec,
  },
  {
    key: "net",
    label: "Performance Anomaly",
    short: "Network",
    target: "prod-edge-04",
    prio: "P2",
    casePrefix: "PERF",
    caseSeed: 8821,
    stepTimes: [800, 950, 950, 800, 800, 800, 1300, 1400, 1700, 1500],
    verdict: { text: "REROUTE STAGED · −240ms p95", risk: "UTIL · 87%", tone: "warn" },
    render: buildNet,
  },
  {
    key: "rep",
    label: "Executive KPI",
    short: "Reports",
    target: "cfo@qwantaflow",
    prio: "WK",
    casePrefix: "RPT",
    caseSeed: 401,
    stepTimes: [700, 900, 900, 800, 800, 800, 1300, 1400, 1700, 1500],
    verdict: { text: "REPORT SHIPPED · 6.2h analyst time saved", risk: "ROI · ×4.1", tone: "accent" },
    render: buildRep,
  },
];

/* ───────── Components ───────── */

interface AgentCardProps {
  show: boolean;
  tag: string;
  tone: Tone;
  name: string;
  sub: string;
  headline: string;
  detail?: string;
  rtt: string;
  children?: ReactNode;
}

function AgentCard({ show, tag, tone, name, sub, headline, detail, rtt, children }: AgentCardProps) {
  return (
    <article className={`qf-agent qf-agent-${tone} ${show ? "is-on" : ""}`}>
      <div className="qf-agent-rail">
        <span className={`qf-agent-avatar qf-mono qf-agent-avatar-${tone}`}>{tag}</span>
      </div>
      <div className="qf-agent-body">
        <div className="qf-agent-head">
          <span className="qf-agent-name">{name}</span>
          <span className="qf-agent-sub qf-mono">{sub}</span>
          <span className="qf-agent-rtt qf-mono">{rtt}</span>
        </div>
        <div className="qf-agent-headline">{headline}</div>
        {detail && <div className="qf-agent-detail qf-mono">{detail}</div>}
        {children && <div className="qf-agent-subs">{children}</div>}
      </div>
    </article>
  );
}

function SubStep({ on, label, value }: { on: boolean; label: string; value: string }) {
  return (
    <div className={`qf-sub ${on ? "is-on" : ""}`}>
      <span className="qf-sub-tick">{on ? "✓" : "·"}</span>
      <span className="qf-sub-l qf-mono">{label}</span>
      <span className="qf-sub-v qf-mono">{value}</span>
    </div>
  );
}

/* ───────── Main ───────── */

export function AgentTheater({ reduced = false }: { reduced?: boolean }) {
  const [tabIdx, setTabIdx] = useState(0);
  const [step, setStep] = useState(reduced ? FINAL_STEP : 0);
  const [caseId, setCaseId] = useState(SCENARIOS[0].caseSeed);
  const [clock, setClock] = useState({ h: 14, m: 32, s: 6 });

  const scenario = SCENARIOS[tabIdx];

  // Step ticker per scenario
  useEffect(() => {
    if (reduced) {
      setStep(FINAL_STEP);
      return;
    }
    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    let cur = 0;
    setStep(0);

    const tick = () => {
      if (cancelled) return;
      const next = cur + 1;
      if (next > FINAL_STEP) {
        const adv = setTimeout(() => {
          if (cancelled) return;
          const ni = (tabIdx + 1) % SCENARIOS.length;
          setTabIdx(ni);
          setCaseId(SCENARIOS[ni].caseSeed + Math.floor(Math.random() * 30));
        }, TAB_HOLD_MS);
        timers.push(adv);
        return;
      }
      setStep(next);
      cur = next;
      const dur = scenario.stepTimes[next] || 1100;
      const id = setTimeout(tick, dur);
      timers.push(id);
    };

    const id0 = setTimeout(tick, scenario.stepTimes[0] || 800);
    timers.push(id0);

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, [reduced, tabIdx, scenario]);

  // Wall clock
  useEffect(() => {
    const id = setInterval(() => {
      setClock((c) => {
        let s = c.s + 1, m = c.m, h = c.h;
        if (s >= 60) { s = 0; m++; }
        if (m >= 60) { m = 0; h = (h + 1) % 24; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");
  const show = (n: number) => reduced || step >= n;

  const onPickTab = (i: number) => {
    if (i === tabIdx) return;
    setTabIdx(i);
    setCaseId(SCENARIOS[i].caseSeed + Math.floor(Math.random() * 30));
  };

  return (
    <aside className="qf-theater" aria-label="Live Qwantaflow scenarios">
      <header className="qf-theater-head">
        <span className="qf-theater-pulse" aria-hidden />
        <span className="qf-mono qf-theater-title">ASK QWANTA · LIVE</span>
        <span className="qf-mono qf-theater-spec">human-in-the-loop</span>
      </header>

      <div className="qf-theater-tabs" role="tablist">
        {SCENARIOS.map((s, i) => (
          <button
            key={s.key}
            role="tab"
            aria-selected={i === tabIdx}
            className={`qf-theater-tab ${i === tabIdx ? "is-active" : ""}`}
            onClick={() => onPickTab(i)}
          >
            <span className="qf-theater-tab-num qf-mono">0{i + 1}</span>
            <span className="qf-theater-tab-label">{s.label}</span>
            <span className="qf-theater-tab-bar">
              <span
                key={`${tabIdx}-${i}-${step}`}
                className="qf-theater-tab-fill"
                style={
                  i === tabIdx && !reduced
                    ? { width: `${Math.min(100, (step / FINAL_STEP) * 100)}%` }
                    : { width: i < tabIdx ? "100%" : "0%" }
                }
              />
            </span>
          </button>
        ))}
      </div>

      <div className="qf-theater-case qf-mono">
        <span className="qf-theater-case-id">{scenario.casePrefix}-{caseId}</span>
        <span className="qf-theater-case-sep">·</span>
        <span className="qf-theater-case-target">target {scenario.target}</span>
        <span className="qf-theater-case-sep">·</span>
        <span className={`qf-theater-case-prio qf-theater-case-prio-${scenario.verdict.tone}`}>
          {scenario.prio}
        </span>
        <span className="qf-theater-time">{pad(clock.h)}:{pad(clock.m)}:{pad(clock.s)}</span>
      </div>

      <div className="qf-theater-stream">
        <span className="qf-theater-spine" aria-hidden />
        {scenario.render(show)}
      </div>

      <footer className={`qf-theater-verdict qf-theater-verdict-${scenario.verdict.tone} ${show(FINAL_STEP) ? "is-on" : ""}`}>
        <div className="qf-verdict-row">
          <span className="qf-mono qf-verdict-tag">VERDICT</span>
          <span className="qf-verdict-text">
            {show(FINAL_STEP) ? scenario.verdict.text : "Reasoning…"}
          </span>
          <span className="qf-mono qf-verdict-risk">{scenario.verdict.risk}</span>
        </div>
        <div className="qf-verdict-bar">
          <div className="qf-verdict-fill" />
        </div>
      </footer>
    </aside>
  );
}
