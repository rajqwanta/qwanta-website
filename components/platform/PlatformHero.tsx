/**
 * PlatformHero — top of the /platform route.
 * Server Component.
 */
export function PlatformHero() {
  return (
    <section className="qf-phero">
      <div className="qf-phero-grid" />
      <div className="qf-container qf-phero-inner">
        <span className="qf-eyebrow">
          <span className="qf-eyebrow-dot" />
          The Qwantaflow Platform
        </span>
        <h1 className="qf-display-xl qf-phero-title">
          One platform.<br />
          <em className="qf-em">Many</em> surfaces.
        </h1>
        <p className="qf-body-l qf-phero-sub">
          Every Qwantaflow capability reads from a single enriched-telemetry layer.
          Choose your interface: visual, conversational, or programmatic. Mix freely.
        </p>
        <nav className="qf-phero-jump qf-mono">
          <a href="#ask">01 Ask Qwanta</a>
          <a href="#explore">02 Data Explorer</a>
          <a href="#build">03 Build</a>
          <a href="#reports">04 Reports</a>
          <a href="#enrich">05 Enrichment</a>
          <a href="#api">06 API</a>
        </nav>
      </div>
    </section>
  );
}
