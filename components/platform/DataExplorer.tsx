/**
 * DataExplorer — query chain + result mock.
 * Server Component.
 */
const CHAIN: [string, string][] = [
  ["FROM",  "flows"],
  ["WHERE", "dst.asn = 64500"],
  ["JOIN",  "threat_intel ON ioc"],
  ["GROUP", "by src.host"],
  ["TOP",   "10 by bytes"],
];
const RESULT: [string, string, string][] = [
  ["edge-04", "412 MB", "↑"],
  ["edge-09", "308 MB", "↑"],
  ["app-12",  "224 MB", "→"],
  ["app-08",  "119 MB", "→"],
  ["db-01",   " 88 MB", "→"],
];

export function DataExplorer() {
  return (
    <section id="explore" className="qf-section qf-fsec qf-fsec-alt">
      <div className="qf-container">
        <div className="qf-hr-label">02 / Data Explorer</div>
        <div className="qf-fsec-grid qf-fsec-grid-rev">
          <div className="qf-fsec-visual">
            <div className="qf-explorer-mock">
              <div className="qf-explorer-chain">
                {CHAIN.map(([k, v], i) => (
                  <div key={k} className="qf-explorer-step">
                    <span className="qf-explorer-step-k qf-mono">{k}</span>
                    <span className="qf-explorer-step-v qf-mono">{v}</span>
                    {i < CHAIN.length - 1 && <span className="qf-explorer-step-arr qf-mono">↓</span>}
                  </div>
                ))}
              </div>
              <div className="qf-explorer-result qf-mono">
                <div className="qf-explorer-result-head">5 rows · 240ms · 1.2M flows scanned</div>
                {RESULT.map(([h, b, t]) => (
                  <div key={h} className="qf-explorer-result-row">
                    <span>{h}</span><span>{b}</span><span>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="qf-fsec-copy">
            <h2 className="qf-display-l">
              Pivot a billion flows.<br />
              <span className="qf-fade">In a heartbeat.</span>
            </h2>
            <p className="qf-body-l">
              Visual query chains build the same expressions Ask Qwanta does —
              point, click, filter, group. Save as a KPI. Hand to a colleague.
              Run as a scheduled report.
            </p>
            <ul className="qf-feat-list">
              <li><strong>Sub-second pivots</strong> over months of enriched telemetry.</li>
              <li><strong>Time-travel</strong> across baselines and prior incidents.</li>
              <li><strong>Save anywhere</strong> — to a dashboard, KPI, report, or alert.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
