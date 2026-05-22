/**
 * Triad Q — chrome variant (monochrome, inherits parent color via currentColor).
 * Used in nav, footer, and anywhere the mark is functional chrome.
 *
 * The full-color animated version lives in <BrandReveal />, which only appears
 * in the hero lockup moment. See discussion in chat history re: "logo color
 * vs. site theme."
 */
export function LogoMark({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-65 -65 130 130"
      role="img"
      aria-label="Qwantaflow"
      className={className}
    >
      <title>Qwantaflow</title>
      <g stroke="currentColor" strokeWidth="13" strokeLinecap="round" fill="none">
        <path d="M -49.08 9.54 A 50 50 0 0 1 9.54 -49.08" />
        <path d="M 16.28 -47.28 A 50 50 0 0 1 37.74 32.81" />
        <path d="M 32.81 37.74 A 50 50 0 0 1 -47.28 16.28" />
        <line x1="35" y1="35" x2="58" y2="58" />
      </g>
      <circle cx="0" cy="0" r="7" fill="currentColor" />
    </svg>
  );
}
