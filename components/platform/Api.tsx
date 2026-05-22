/**
 * Api — code sample showing programmatic Qwantaflow access.
 * Server Component.
 */
const CODE = `from qwantaflow import Client

q = Client(token="qf_prod_••••")

# Ask Qwanta from code, get a typed briefing
brief = q.investigate(
    entity="203.0.113.45",
    horizon="24h",
)

if brief.risk >= 70:
    q.actions.quarantine(
        hosts=brief.evidence.affected_hosts,
        require_approval=True,
    )`;

export function Api() {
  return (
    <section id="api" className="qf-section qf-fsec qf-fsec-alt">
      <div className="qf-container">
        <div className="qf-hr-label">06 / API</div>
        <div className="qf-fsec-grid qf-fsec-grid-rev">
          <div className="qf-fsec-visual">
            <div className="qf-code-mock">
              <div className="qf-code-mock-head qf-mono">
                <span className="qf-code-mock-dot" />
                <span className="qf-code-mock-dot" />
                <span className="qf-code-mock-dot" />
                <span className="qf-code-mock-file">investigate.py</span>
              </div>
              <pre className="qf-code-mock-body qf-mono">{CODE}</pre>
            </div>
          </div>
          <div className="qf-fsec-copy">
            <h2 className="qf-display-l">
              Every action.<br />
              <span className="qf-fade">Typed. Versioned. Yours.</span>
            </h2>
            <p className="qf-body-l">
              Anything you can do in the UI, you can do from code. SDKs for Python,
              Go, and TypeScript. Stable, semver-versioned REST and gRPC. Webhook
              subscriptions for any change in your enriched layer.
            </p>
            <ul className="qf-feat-list">
              <li><strong>SDKs.</strong> Python · Go · TypeScript</li>
              <li><strong>Transports.</strong> REST · gRPC · Webhooks</li>
              <li><strong>Stability.</strong> Semver, 12-month deprecation policy</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
