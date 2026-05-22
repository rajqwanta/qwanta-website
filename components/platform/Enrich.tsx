/**
 * Enrich — enrichment pipeline visualisation. Each step adds a context layer.
 * Server Component.
 */
interface Row {
  t: string;
  v: string;
  hot?: boolean;
}

const ROWS: Row[] = [
  { t: "RAW",       v: "203.0.113.45 · 4 hosts · 14h" },
  { t: "+WHOIS",    v: "BulletProof Inc · 2024-03" },
  { t: "+ASN",      v: "AS-64500 · TR" },
  { t: "+GEO",      v: "Istanbul, TR · 41.0,28.9" },
  { t: "+IDENTITY", v: "no allow-list match" },
  { t: "+IOC",      v: "APT41 C2 · conf 0.92", hot: true },
];

export function Enrich() {
  return (
    <section id="enrich" className="qf-section qf-fsec">
      <div className="qf-container">
        <div className="qf-hr-label">05 / Enrichment &amp; Threat Intelligence</div>
        <div className="qf-fsec-grid">
          <div className="qf-fsec-copy">
            <h2 className="qf-display-l">
              Context where it<br />
              <span className="qf-fade">actually helps — at ingest.</span>
            </h2>
            <p className="qf-body-l">
              Every flow, packet, and log is annotated as it lands. By the time
              anyone — human or agent — queries it, the context is already there.
              No expensive joins. No stale lookups.
            </p>
            <ul className="qf-feat-list">
              <li><strong>20+ enrichers</strong> out of the box: WHOIS, ASN, GeoIP, identity, asset, software, vuln.</li>
              <li><strong>3 curated threat feeds</strong> with daily diff and custom IOC overlays.</li>
              <li><strong>BYO enricher</strong> via a stable API — your CMDB, your IPAM, your provider.</li>
              <li><strong>p95 &lt; 90ms</strong> enrichment latency at ingest.</li>
            </ul>
          </div>
          <div className="qf-fsec-visual">
            <div className="qf-pipe-mock">
              {ROWS.map((row, i) => (
                <div key={i} className={`qf-pipe-row ${row.hot ? "is-hot" : ""}`}>
                  <span className="qf-pipe-tag qf-mono">{row.t}</span>
                  <span className="qf-pipe-v qf-mono">{row.v}</span>
                  {i < ROWS.length - 1 && <span className="qf-pipe-conn" aria-hidden />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
