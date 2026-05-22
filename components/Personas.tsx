/**
 * Personas — Five roles in a tabular layout with colored "budget" pills.
 * Server Component.
 */

interface Row {
  p: string;
  focus: string;
  b: "NetOps" | "SecOps" | "Shared" | "CxO";
}

const ROWS: Row[] = [
  { p: "Network Analyst",  focus: "Traffic analysis, anomaly investigation, capacity trends", b: "NetOps" },
  { p: "Network Engineer", focus: "Diagnostics, configuration, change tracking",              b: "NetOps" },
  { p: "Security Analyst", focus: "Threat hunting, incident investigation, response orchestration", b: "SecOps" },
  { p: "NOC Operator",     focus: "Watch-floor monitoring, alert triage",                       b: "Shared" },
  { p: "Executive",        focus: "Business view with one-click escalation and reporting",     b: "CxO" },
];

export function Personas() {
  return (
    <section id="personas" className="qf-section qf-personas">
      <div className="qf-container">
        <div className="qf-hr-label">03 / Who it's for</div>
        <h2 className="qf-display-l qf-personas-head">
          Five personas.<br />
          <span className="qf-fade">Two budgets. One platform.</span>
        </h2>
        <p className="qf-body-l qf-personas-sub">
          Each role lands on a tailored workspace — same enriched data underneath.
          A Security Analyst's home screen looks nothing like an Executive's, even
          though they're reading the same network.
        </p>

        <div className="qf-persona-table">
          <div className="qf-persona-row qf-persona-head qf-mono">
            <div>Persona</div>
            <div>Primary focus</div>
            <div>Budget</div>
          </div>
          {ROWS.map((r) => (
            <div key={r.p} className="qf-persona-row">
              <div className="qf-persona-name">{r.p}</div>
              <div className="qf-persona-focus">{r.focus}</div>
              <div className="qf-persona-budget qf-mono">
                <span className={`qf-budget-pill qf-budget-${r.b.toLowerCase().replace(/[^a-z]/g, "")}`}>
                  {r.b}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
