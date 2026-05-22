/**
 * IsIsNot — Sharp positioning. Two columns: what it IS / what it ISN'T.
 * Server Component.
 */
export function IsIsNot() {
  return (
    <section className="qf-section qf-isnot">
      <div className="qf-container">
        <div className="qf-hr-label">04 / Positioning</div>
        <h2 className="qf-display-l qf-isnot-head">
          Strong opinions,<br />
          <span className="qf-fade">loosely held to scope.</span>
        </h2>
        <div className="qf-isnot-grid">
          <div className="qf-isnot-col">
            <div className="qf-isnot-tag qf-mono">
              <span className="qf-isnot-yes">●</span> WHAT IT IS
            </div>
            <ul className="qf-isnot-list qf-isnot-list-yes">
              <li>A Network Intelligence Platform — depth in network telemetry</li>
              <li>One enriched layer for NetOps, SecOps, and exec reporting</li>
              <li>Agentic AI as a first-class peer interface</li>
              <li>Purpose-built to complement the SIEM / APM / BI stack</li>
            </ul>
          </div>
          <div className="qf-isnot-col">
            <div className="qf-isnot-tag qf-mono">
              <span className="qf-isnot-no">×</span> WHAT IT ISN'T
            </div>
            <ul className="qf-isnot-list qf-isnot-list-no">
              <li>A general-purpose logging platform</li>
              <li>A full SIEM covering endpoint, identity, SaaS</li>
              <li>An endpoint detection product</li>
              <li>A business-intelligence tool</li>
              <li>A generic APM platform</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
