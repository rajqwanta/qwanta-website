/**
 * Brand Reveal — full-colour Triad Q with the Telemetry Converge animation.
 * Three packets fly in, ride into arcs, anchor scales up, tail extends.
 * Total ~2.4s. SMIL-driven; if SMIL is unavailable, mark paints final state.
 *
 * Placement: only in the hero "lockup" moment. Don't reuse in chrome.
 */
export function BrandReveal() {
  // Arc paths (canonical geometry from BRIEF.md §1)
  const ARC_T = "M -49.08 9.54 A 50 50 0 0 1 9.54 -49.08";
  const ARC_R = "M 16.28 -47.28 A 50 50 0 0 1 37.74 32.81";
  const ARC_A = "M 32.81 37.74 A 50 50 0 0 1 -47.28 16.28";

  // Off-mark inbound paths
  const IN_T = "M -90 25 L -49.08 9.54";
  const IN_R = "M 35 -85 L 16.28 -47.28";
  const IN_A = "M 65 70 L 32.81 37.74";

  const ARC_DUR = 1.0;
  const STAGGER = 0.32;
  const IN_DUR = 0.42;
  const T0 = 0;
  const T1 = T0 + STAGGER;
  const T2 = T0 + STAGGER * 2;
  const T_ANCHOR = T2 + IN_DUR + ARC_DUR + 0.05;
  const T_TAIL = T_ANCHOR + 0.2;

  return (
    <div className="mb-7 flex flex-col items-start gap-3.5">
      <svg width="72" height="72" viewBox="-90 -90 180 180" role="img" aria-label="Qwantaflow">
        <title>Qwantaflow</title>

        <Stream color="hsl(var(--netops))"  inPath={IN_T} arcPath={ARC_T} t={T0} ARC_DUR={ARC_DUR} IN_DUR={IN_DUR} />
        <Stream color="hsl(var(--secops))"  inPath={IN_R} arcPath={ARC_R} t={T1} ARC_DUR={ARC_DUR} IN_DUR={IN_DUR} />
        <Stream color="hsl(var(--agentic))" inPath={IN_A} arcPath={ARC_A} t={T2} ARC_DUR={ARC_DUR} IN_DUR={IN_DUR} />

        <circle cx="0" cy="0" r="2" fill="hsl(var(--mark-anchor))" opacity="0">
          <animate attributeName="opacity" from="0" to="1" dur="0.32s" begin={`${T_ANCHOR}s`} fill="freeze" />
          <animate attributeName="r" from="2" to="7" dur="0.32s" begin={`${T_ANCHOR}s`}
                   calcMode="spline" keyTimes="0;1" keySplines="0.3 0 0.2 1" fill="freeze" />
        </circle>

        <line x1="35" y1="35" x2="58" y2="58"
              stroke="hsl(var(--mark-anchor))" strokeWidth="13" strokeLinecap="round"
              pathLength="100" strokeDasharray="100" strokeDashoffset="100">
          <animate attributeName="stroke-dashoffset" from="100" to="0"
                   dur="0.4s" begin={`${T_TAIL}s`}
                   calcMode="spline" keyTimes="0;1" keySplines="0.4 0 0.2 1" fill="freeze" />
        </line>
      </svg>

      <div className="qf-tagline font-mono text-[11px] uppercase tracking-[0.18em] font-medium text-muted-foreground">
        <span style={{ color: "hsl(var(--netops))" }}>NETOPS</span>
        <span className="mx-2 text-muted-foreground/40">·</span>
        <span style={{ color: "hsl(var(--secops))" }}>SECOPS</span>
        <span className="mx-2 text-muted-foreground/40">·</span>
        <span style={{ color: "hsl(var(--agentic))" }}>AGENTIC&nbsp;AI</span>
      </div>
    </div>
  );
}

function Stream({
  color, inPath, arcPath, t, ARC_DUR, IN_DUR,
}: { color: string; inPath: string; arcPath: string; t: number; ARC_DUR: number; IN_DUR: number }) {
  const arcStart = t + IN_DUR;
  return (
    <g>
      <path d={arcPath}
            stroke={color}
            strokeWidth="13" strokeLinecap="round" fill="none"
            pathLength="100" strokeDasharray="100" strokeDashoffset="100">
        <animate attributeName="stroke-dashoffset" from="100" to="0"
                 dur={`${ARC_DUR}s`} begin={`${arcStart}s`}
                 calcMode="spline" keyTimes="0;1" keySplines="0.4 0 0.2 1"
                 fill="freeze" />
      </path>
      <circle r="4" fill={color} opacity="0">
        <animateMotion path={inPath} dur={`${IN_DUR}s`} begin={`${t}s`}
                       calcMode="spline" keyTimes="0;1" keySplines="0.3 0 0.2 1" fill="freeze" />
        <animate attributeName="opacity" values="0;1" keyTimes="0;1"
                 dur={`${IN_DUR * 0.6}s`} begin={`${t}s`} fill="freeze" />
        <animateMotion path={arcPath} dur={`${ARC_DUR}s`} begin={`${arcStart}s`}
                       calcMode="spline" keyTimes="0;1" keySplines="0.4 0 0.2 1" fill="freeze" />
        <animate attributeName="opacity" from="1" to="0"
                 dur="0.18s" begin={`${arcStart + ARC_DUR - 0.18}s`} fill="freeze" />
      </circle>
    </g>
  );
}
