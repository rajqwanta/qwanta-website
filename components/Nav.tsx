"use client";

/**
 * Nav — mega-menu top chrome.
 *
 * Four top-level sections (Platform · Solutions · Customers · Resources).
 * Pricing and About are deliberately omitted at launch — see chat decision
 * "drop Pricing and About entirely from the nav for now."
 *
 * Each section opens a dropdown with three columns of links + a marketing
 * feature card on the right. Hover-to-open with small close delay,
 * click-outside / Escape to close. Mobile shows a slide-down drawer.
 */
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { LogoMark } from "./LogoMark";

interface Item {
  t: string;
  d: string;
  accent?: boolean;
  h?: string;
}
interface Col {
  label: string;
  items: Item[];
}
interface Feature {
  tag: string;
  title: string;
  body: string;
  cta: string;
  h?: string;
}
interface MenuData {
  cols: Col[];
  feature: Feature;
}

const NAV_MENUS: Record<string, MenuData> = {
  Platform: {
    cols: [
      {
        label: "Core",
        items: [
          { t: "Overview",         d: "What Qwantaflow is, end-to-end",        h: "/platform" },
          { t: "Ask Qwanta",       d: "Agentic AI peer interface",   accent: true, h: "/platform#ask" },
          { t: "Dashboard",        d: "Role-tailored workspaces",              h: "/platform#build" },
          { t: "Data Explorer",    d: "Pivot enriched telemetry live",         h: "/platform#explore" },
        ],
      },
      {
        label: "Build",
        items: [
          { t: "KPI Builder",      d: "Construct KPIs visually or by chat", h: "/platform#build" },
          { t: "Dashboard Studio", d: "Compose role-specific home screens", h: "/platform#build" },
          { t: "Reports",          d: "Schedule, route, brand",             h: "/platform#reports" },
          { t: "API Reference",    d: "Developer surface",                  h: "/platform#api" },
        ],
      },
      {
        label: "Detect & enrich",
        items: [
          { t: "Enrichment",          d: "GeoIP · ASN · identity · asset",         h: "/platform#enrich" },
          { t: "Threat Intelligence", d: "Curated feeds + custom IOCs",           h: "/platform#enrich" },
          { t: "Alerts",              d: "Correlation, suppression, routing",     h: "/platform#enrich" },
          { t: "Investigation Workflows", d: "Ask once, get a briefing",          h: "/platform#ask" },
        ],
      },
    ],
    feature: {
      tag: "NEW · v3.9",
      title: "Ask Qwanta is GA",
      body: "Investigate any IP, domain, or subnet in plain English. Risk-scored briefings in <40s.",
      cta: "Read the launch note →",
      h: "/platform#ask",
    },
  },
  Solutions: {
    cols: [
      {
        label: "By role",
        items: [
          { t: "Network Analysts",  d: "Anomaly hunts · capacity trends" },
          { t: "Network Engineers", d: "Diagnostics · change tracking" },
          { t: "Security Analysts", d: "Threat hunting · IR · response" },
          { t: "NOC Operators",     d: "Watch-floor monitoring · triage" },
          { t: "Executives",        d: "Business view · 1-click escalate" },
        ],
      },
      {
        label: "By outcome",
        items: [
          { t: "Unify NetOps + SecOps", d: "One enriched layer, two budgets" },
          { t: "Threat Investigation",  d: "Agentic, evidence-backed" },
          { t: "Capacity Planning",     d: "Forecasts that pay for themselves" },
          { t: "Incident Response",     d: "Block · Quarantine · Monitor · Tag" },
          { t: "Executive Reporting",   d: "Network as a business function" },
        ],
      },
      {
        label: "By industry",
        items: [
          { t: "Financial Services", d: "Latency-bound trading networks" },
          { t: "Public Sector",      d: "Air-gapped, sovereign deploys" },
          { t: "Healthcare",         d: "PHI-safe enrichment" },
          { t: "Service Providers",  d: "Multi-tenant at carrier scale" },
        ],
      },
    ],
    feature: {
      tag: "PERSPECTIVE",
      title: "Network Intelligence: a new category",
      body: "How three disciplines collapse into one platform — and one shared source of truth.",
      cta: "Read the brief →",
    },
  },
  Customers: {
    cols: [
      {
        label: "Stories",
        items: [
          { t: "Case studies",            d: "Outcomes, in customers' words" },
          { t: "Reference architectures", d: "Reproducible blueprints" },
        ],
      },
      {
        label: "Value",
        items: [
          { t: "ROI calculator",   d: "Quantify NetOps + SecOps overlap" },
          { t: "TCO model",        d: "vs. SIEM + NPM stack" },
          { t: "Migration program", d: "Switch in 90 days" },
        ],
      },
      {
        label: "Community",
        items: [
          { t: "Q-Forum", d: "Practitioners, monthly" },
          { t: "Slack",   d: "Live answers from the team" },
          { t: "Events",  d: "Where you'll find us" },
        ],
      },
    ],
    feature: {
      tag: "FEATURED",
      title: "Built for launch",
      body: "Qwantaflow is new — and we're picking design partners for our first cohort.",
      cta: "Become a design partner →",
    },
  },
  Resources: {
    cols: [
      {
        label: "Learn",
        items: [
          { t: "Documentation", d: "Concepts · install · API" },
          { t: "Blog",          d: "Engineering, research, opinion" },
          { t: "Changelog",     d: "Every release, every week" },
          { t: "Webinars",      d: "Live and on-demand" },
        ],
      },
      {
        label: "Reference",
        items: [
          { t: "Whitepapers",  d: "Architecture · security · scaling" },
          { t: "API Reference", d: "Endpoints, auth, SDKs" },
          { t: "Glossary",     d: "Network Intelligence vocabulary" },
        ],
      },
      {
        label: "Operate",
        items: [
          { t: "Status",       d: "All regions, real-time" },
          { t: "Trust Center", d: "SOC 2 · ISO · DPAs" },
          { t: "Security",     d: "Disclosure · advisories" },
          { t: "Support",      d: "24×7 for production tiers" },
        ],
      },
    ],
    feature: {
      tag: "READ FIRST",
      title: "Concepts that show up everywhere",
      body: "Telemetry, enrichment, workflows, KPIs. The vocabulary used across the docs.",
      cta: "Open the docs →",
    },
  },
};

export function Nav() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLElement | null>(null);

  const openMenu = (k: string) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setOpen(k);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(null), 140);
  };
  const closeNow = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(null);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeNow();
    };
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) closeNow();
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  return (
    <nav className="qf-nav" ref={navRef} onMouseLeave={scheduleClose}>
      <div className="qf-container qf-nav-inner">
        <Link href="/" className="qf-logo">
          <LogoMark />
          <span className="qf-logo-word">Qwantaflow</span>
        </Link>

        <div className="qf-nav-links">
          {Object.keys(NAV_MENUS).map((k) => (
            <button
              key={k}
              className={`qf-nav-trigger ${open === k ? "is-open" : ""}`}
              onMouseEnter={() => openMenu(k)}
              onFocus={() => openMenu(k)}
              onClick={() => setOpen(open === k ? null : k)}
              aria-expanded={open === k}
            >
              {k} <span className="qf-nav-caret" aria-hidden>▾</span>
            </button>
          ))}
        </div>

        <div className="qf-nav-cta">
          <Link href="/signin" className="qf-nav-link-quiet">Sign in</Link>
          <Link href="/demo" className="qf-btn qf-btn-primary">
            Book a demo <span className="qf-arr">→</span>
          </Link>
          <button
            className="qf-nav-burger"
            aria-label="Open menu"
            onClick={() => setMobile(!mobile)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      <div
        className={`qf-mega ${open ? "is-open" : ""}`}
        onMouseEnter={() => open && openMenu(open)}
        onMouseLeave={scheduleClose}
      >
        {open && <MegaPanel data={NAV_MENUS[open]} onPick={closeNow} />}
      </div>

      {mobile && <MobileDrawer onClose={() => setMobile(false)} />}
    </nav>
  );
}

function MegaPanel({ data, onPick }: { data: MenuData; onPick: () => void }) {
  return (
    <div className="qf-container qf-mega-inner">
      <div className="qf-mega-cols">
        {data.cols.map((c) => (
          <div key={c.label} className="qf-mega-col">
            <div className="qf-mega-col-label qf-mono">{c.label}</div>
            <ul className="qf-mega-list">
              {c.items.map((it) => (
                <li key={it.t}>
                  <Link href={it.h || "#"} className="qf-mega-link" onClick={onPick}>
                    <span className="qf-mega-link-t">
                      {it.t}
                      {it.accent && <span className="qf-mega-link-pill qf-mono">AI</span>}
                      <span className="qf-mega-link-arr" aria-hidden>→</span>
                    </span>
                    <span className="qf-mega-link-d">{it.d}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <aside className="qf-mega-feature">
        <div className="qf-mega-feature-tag qf-mono">{data.feature.tag}</div>
        <div className="qf-mega-feature-title">{data.feature.title}</div>
        <p className="qf-mega-feature-body">{data.feature.body}</p>
        <Link href={data.feature.h || "#"} className="qf-mega-feature-cta qf-mono" onClick={onPick}>
          {data.feature.cta}
        </Link>
      </aside>
    </div>
  );
}

function MobileDrawer({ onClose }: { onClose: () => void }) {
  return (
    <div className="qf-mobile-drawer" role="dialog" aria-modal="true">
      <div className="qf-mobile-drawer-head">
        <span className="qf-mono">MENU</span>
        <button className="qf-mobile-close" onClick={onClose} aria-label="Close">✕</button>
      </div>
      <div className="qf-mobile-drawer-body">
        {Object.entries(NAV_MENUS).map(([k, v]) => (
          <details key={k} className="qf-mobile-group">
            <summary>
              {k} <span className="qf-nav-caret" aria-hidden>▾</span>
            </summary>
            <div className="qf-mobile-cols">
              {v.cols.map((c) => (
                <div key={c.label} className="qf-mobile-col">
                  <div className="qf-mobile-col-label qf-mono">{c.label}</div>
                  {c.items.map((it) => (
                    <Link key={it.t} href={it.h || "#"} onClick={onClose}>{it.t}</Link>
                  ))}
                </div>
              ))}
            </div>
          </details>
        ))}
        <Link href="/signin" onClick={onClose} className="qf-mobile-flat">Sign in</Link>
        <Link href="/demo"   onClick={onClose} className="qf-btn qf-btn-primary qf-mobile-cta">Book a demo →</Link>
      </div>
    </div>
  );
}
