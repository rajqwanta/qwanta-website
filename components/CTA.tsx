import Link from "next/link";

/**
 * CTA — closing call before the footer.
 * Used on both the landing page and the platform page.
 */
export function CTA({
  eyebrow = "Insights, Delivered First",
  title,
  primary = { href: "/demo", label: "Book a demo" },
  secondary,
}: {
  eyebrow?: string;
  title?: React.ReactNode;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section id="book" className="qf-section qf-cta">
      <div className="qf-cta-canvas qf-dot-grid" />
      <div className="qf-container qf-cta-inner">
        <div className="qf-eyebrow">
          <span className="qf-eyebrow-dot" />
          {eyebrow}
        </div>
        <h2 className="qf-display-xl qf-cta-title">
          {title || (
            <>
              Stop reading the<br />network. <em className="qf-em">Talk</em> to it.
            </>
          )}
        </h2>
        <div className="qf-cta-actions">
          <Link href={primary.href} className="qf-btn qf-btn-primary">
            {primary.label} <span className="qf-arr">→</span>
          </Link>
          {secondary && (
            <Link href={secondary.href} className="qf-btn qf-btn-ghost">
              {secondary.label}
            </Link>
          )}
        </div>
        <div className="qf-cta-fine qf-mono">
          <span>SOC 2 Type II in progress</span>
          <span className="qf-cta-fine-sep">·</span>
          <span>Self-hosted or cloud</span>
          <span className="qf-cta-fine-sep">·</span>
          <span>Deploy in &lt; 4 hours</span>
        </div>
      </div>
    </section>
  );
}
