/**
 * Convergence — Three disciplines, one platform.
 * Three colored circular cards orbit a central core that names the platform.
 * Server Component (declarative + CSS only).
 */

interface CircleProps {
  title: string;
  tag: string;
  items: string[];
  cls: string;
}

function ConvCircle({ title, tag, items, cls }: CircleProps) {
  return (
    <div className={`qf-venn-c-card ${cls}`}>
      <div className="qf-venn-tag qf-mono">{tag}</div>
      <div className="qf-venn-title">{title}</div>
      <ul className="qf-venn-items">
        {items.map((i) => <li key={i}>{i}</li>)}
      </ul>
    </div>
  );
}

export function Convergence() {
  return (
    <section id="platform" className="qf-section qf-conv">
      <div className="qf-container">
        <div className="qf-hr-label">01 / Where Qwantaflow Fits</div>
        <div className="qf-conv-head">
          <h2 className="qf-display-l">
            Three disciplines.<br />
            <span className="qf-fade">One platform.</span>
          </h2>
          <p className="qf-body-l">
            Network observability, security analytics, and agentic AI have lived
            in three different tools, two different teams, and one very expensive
            divide. Qwantaflow collapses the stack.
          </p>
        </div>

        <div className="qf-venn">
          <ConvCircle
            title="Network Observability"
            tag="NETOPS"
            items={["Visibility", "Performance", "Capacity"]}
            cls="qf-venn-a"
          />
          <ConvCircle
            title="Security Analytics"
            tag="SECOPS"
            items={["Detection", "Investigation", "Response"]}
            cls="qf-venn-b"
          />
          <ConvCircle
            title="Agentic AI"
            tag="ASK QWANTA"
            items={["Conversational", "Autonomous", "Actionable"]}
            cls="qf-venn-c"
          />
          <div className="qf-venn-core">
            <div className="qf-venn-core-eyebrow qf-mono">QWANTAFLOW</div>
            <div className="qf-venn-core-title">Network<br />Intelligence</div>
            <div className="qf-venn-core-sub qf-mono">A new category</div>
          </div>
        </div>
      </div>
    </section>
  );
}
