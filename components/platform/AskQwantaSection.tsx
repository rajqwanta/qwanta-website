"use client";

/**
 * AskQwantaSection — animated prompt + table response.
 * Client Component (typing animation).
 */
import { useEffect, useState } from "react";

const PROMPT = "show top 5 ASNs by anomalous outbound flows last 24h";

interface Row {
  asn: string;
  name: string;
  n: string;
  trend: string;
  hot?: boolean;
}
const RESULT: Row[] = [
  { asn: "AS-15169", name: "Google LLC",       n: "4,812", trend: "↑ 14%" },
  { asn: "AS-14618", name: "Amazon",           n: "2,103", trend: "↑ 6%" },
  { asn: "AS-64500", name: "Bulletproof Inc",  n: "1,902", trend: "↑ 1180%", hot: true },
  { asn: "AS-7922",  name: "Comcast",          n: "1,704", trend: "→" },
  { asn: "AS-32934", name: "Meta",             n: "1,544", trend: "→" },
];

export function AskQwantaSection() {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTyped(PROMPT.slice(0, i));
      if (i >= PROMPT.length) clearInterval(id);
    }, 38);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="ask" className="qf-section qf-fsec">
      <div className="qf-container">
        <div className="qf-hr-label">01 / Ask Qwanta</div>
        <div className="qf-fsec-grid">
          <div className="qf-fsec-copy">
            <h2 className="qf-display-l">
              A peer interface,<br />
              <span className="qf-fade">not a chatbot.</span>
            </h2>
            <p className="qf-body-l">
              Ask Qwanta has the same access to data and actions as the visual UI.
              Investigations, KPIs, dashboards, reports — all expressible in plain
              English, all human-in-the-loop.
            </p>
            <ul className="qf-feat-list">
              <li><strong>Conversational composition.</strong> Build a KPI, dashboard, or report without leaving chat.</li>
              <li><strong>Risk-scored briefings.</strong> An IP, domain, or subnet returns a written briefing in under 40s.</li>
              <li><strong>Action recommendations.</strong> Block · Quarantine · Monitor · Tag · Allow — always staged for approval.</li>
              <li><strong>Inline rendering.</strong> Charts, tables, maps, timelines stream into the response.</li>
            </ul>
          </div>

          <div className="qf-fsec-visual">
            <div className="qf-ask-mock">
              <div className="qf-ask-mock-head qf-mono">
                <span className="qf-ask-mock-pulse" />ASK QWANTA · COMPOSER
              </div>
              <div className="qf-ask-mock-prompt">
                <span className="qf-mono qf-ask-mock-bullet">›</span>
                <span>{typed}<span className="qf-caret" /></span>
              </div>
              <div className="qf-ask-mock-resp">
                <div className="qf-ask-mock-respline">
                  <span className="qf-mono qf-ask-mock-tag">QWANTA</span>
                  Querying enriched telemetry, last 24h.
                </div>
                <div className="qf-ask-mock-table">
                  {RESULT.map((r) => (
                    <div key={r.asn} className={`qf-ask-mock-row qf-mono ${r.hot ? "is-hot" : ""}`}>
                      <span>{r.asn}</span>
                      <span className="qf-ask-mock-name">{r.name}</span>
                      <span className="qf-ask-mock-n">{r.n}</span>
                      <span className="qf-ask-mock-trend">{r.trend}</span>
                    </div>
                  ))}
                </div>
                <div className="qf-ask-mock-foot qf-mono">
                  AS-64500 has no allow-list match · <span className="qf-ask-mock-suggest">investigate?</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
