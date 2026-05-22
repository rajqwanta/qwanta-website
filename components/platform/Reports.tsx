/**
 * Reports — generated executive report card + routing pipeline.
 * Server Component.
 */
export function Reports() {
  return (
    <section id="reports" className="qf-section qf-fsec qf-fsec-alt">
      <div className="qf-container">
        <div className="qf-hr-label">04 / Reports</div>
        <div className="qf-fsec-grid qf-fsec-grid-rev">
          <div className="qf-fsec-visual">
            <div className="qf-report-mock">
              <div className="qf-report-card">
                <div className="qf-report-card-head qf-mono">CFO WEEKLY · 24 / W19</div>
                <div className="qf-report-card-title">$12.4M spend · 99.97% SLA</div>
                <div className="qf-report-card-row">
                  <span>Top variance</span>
                  <span className="qf-report-card-v">LON-EDGE-02 +18%</span>
                </div>
                <div className="qf-report-card-row">
                  <span>Incidents resolved</span>
                  <span className="qf-report-card-v">42 (P1: 1)</span>
                </div>
                <div className="qf-report-card-row">
                  <span>Capacity headroom</span>
                  <span className="qf-report-card-v">22% (↘ 3%)</span>
                </div>
              </div>
              <div className="qf-report-route qf-mono">
                <span className="qf-report-route-step is-on">DRAFT</span>
                <span className="qf-report-route-arr">→</span>
                <span className="qf-report-route-step is-on">CFO@</span>
                <span className="qf-report-route-arr">→</span>
                <span className="qf-report-route-step is-on">SLACK · #leadership</span>
                <span className="qf-report-route-arr">→</span>
                <span className="qf-report-route-step is-on">SHIPPED</span>
              </div>
            </div>
          </div>
          <div className="qf-fsec-copy">
            <h2 className="qf-display-l">
              Reports that<br />
              <span className="qf-fade">write themselves.</span>
            </h2>
            <p className="qf-body-l">
              Compose a report once, in plain English. Qwantaflow schedules, runs,
              brands, and routes it forever — PDF for the board, CSV for the
              analyst, Slack thread for the team.
            </p>
            <ul className="qf-feat-list">
              <li><strong>Schedule &amp; route.</strong> Daily, weekly, on-incident.</li>
              <li><strong>Multi-format.</strong> PDF · CSV · Slack · Email · Webhook.</li>
              <li><strong>Brandable.</strong> Templates per audience.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
