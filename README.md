# Qwantaflow — marketing site (Next.js)

This folder is a **runnable Next.js 15 scaffold** ported from the HTML/JSX
design prototype in the parent directory. It contains the brand essentials —
HSL tokens, Triad Q mark, BrandReveal animation, Nav, Footer, and a minimal
hero — enough to deploy to Vercel and have a real production base. From
there, design new sections in the prototype and port them in piece by piece.

---

## The workflow you're adopting

```
   ┌──────────────────────────┐                  ┌──────────────────────┐
   │  PROTOTYPE  (this repo)  │                  │   PROD  (this dir)   │
   │  HTML + React + Babel    │  ─── design ───▶ │  Next.js + Tailwind  │
   │  edit, iterate fast      │     port when     │  TypeScript          │
   │                          │     idea is hot   │  ship on Vercel      │
   └──────────────────────────┘                  └──────────────────────┘
                                                          │
                                                          ▼
                                                  ┌──────────────┐
                                                  │   VERCEL     │
                                                  │  auto-deploy │
                                                  │  on git push │
                                                  └──────────────┘
```

This is exactly how teams like Stripe, Linear, and Vercel themselves
operate. Design fast where it's cheap; commit when an idea earns it.

---

## One-time setup (~10 min)

### 1. Copy the scaffold to a fresh repo

```bash
# Outside this project:
mkdir qwantaflow-marketing && cd qwantaflow-marketing
git init
```

Then download this `nextjs/` folder, drop its contents into your new
repo (so `package.json` sits at the repo root, not under `nextjs/`).

### 2. Install + run locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000> — you should see the Triad Q assemble,
the tagline fade in, and a minimal hero with teal CTA. That's the
floor; everything else gets built on top.

### 3. First commit + push to GitHub

```bash
git add -A
git commit -m "Initial scaffold — Qwantaflow brand"
gh repo create qwantaflow-marketing --public --source=. --remote=origin --push
```

(Or create the repo on github.com first and push manually if you don't use the
GitHub CLI.)

### 4. Deploy to Vercel

```bash
npm i -g vercel
vercel
```

Follow the prompts; pick the GitHub repo. Vercel detects Next.js, builds,
deploys, and gives you a `*.vercel.app` URL. Every subsequent `git push`
auto-deploys.

To set a custom domain (`qwantaflow.com`): Project → Settings → Domains.

---

## Ongoing workflow

**Design** new sections / pages in the parent directory (the HTML prototype).
Iterate visually until they earn production. **Then** port them into this
Next.js project:

1. Pick a component from the prototype (e.g. `AgentTheater` in `hero.jsx`,
   `Architecture` in `architecture.jsx`).
2. Create a new file under `components/` (e.g. `components/AgentTheater.tsx`).
3. Convert: JSX → TSX, add types, swap `var(--token)` for Tailwind classes
   where possible (e.g. `bg-card`, `text-muted-foreground`). Tokens that
   don't have a Tailwind utility yet stay inline (`style={{ color: "hsl(var(--secops))" }}`).
4. Add `"use client"` at the top **only if** it uses React state, effects,
   refs, browser APIs, or event handlers. Most static sections can stay
   Server Components.
5. Import + drop into `app/page.tsx`.
6. Commit. Vercel deploys it.

---

## What's in here

```
nextjs/
├── README.md                     ← this file
├── package.json
├── tsconfig.json
├── next.config.mjs
├── tailwind.config.ts            ← HSL token bridge — shadcn convention
├── postcss.config.mjs
├── .gitignore
├── app/
│   ├── layout.tsx                ← root layout, dark mode default
│   ├── page.tsx                  ← /  (home — minimal hero only)
│   └── globals.css               ← HSL token primitives (light + dark)
└── components/
    ├── LogoMark.tsx              ← Triad Q, mono (chrome)
    ├── BrandReveal.tsx           ← Triad Q, full color + animation (hero only)
    ├── Nav.tsx                   ← minimal top nav (mega menu pending port)
    ├── Hero.tsx                  ← minimal hero (CTA + BrandReveal)
    └── Footer.tsx
```

The full prototype has ~10 more components (agent theater, architecture,
convergence, pillars, personas, is/is-not, CTA, full mega-menu nav).
They'll port in cleanly as you design them — the brand foundation is already
matching, so each port is mechanical, not creative.

---

## Token system

`app/globals.css` defines the HSL primitives — same names and values as
your product UI repo's BRAND-DELTAS.md. Dark mode is on `:root` by default;
light mode is opt-in via `<html className="light">`. Add a theme toggle
when you're ready.

To use a token in components, prefer Tailwind classes:

```tsx
<div className="bg-card text-foreground border border-border">
<button className="bg-primary text-primary-foreground">
```

For section colors (which don't have semantic Tailwind names since they're
domain-bound, not aesthetic), use inline:

```tsx
<span style={{ color: "hsl(var(--secops))" }}>Alerts</span>
```

That keeps the meaning visible in code.

---

## Production checks before launch

- [ ] Replace placeholder copy in `Hero.tsx` and `Nav.tsx`
- [ ] Add a real `/demo` route (or wire to your form provider)
- [ ] Add a real `/signin` route (or external auth link)
- [ ] Favicon — export the Triad Q at 32×32 PNG and 512×512 to `app/icon.png`
- [ ] OpenGraph image for social previews
- [ ] Privacy / Terms pages
- [ ] Analytics — Vercel Analytics is one click in the dashboard

---

## When you outgrow this scaffold

This is intentionally minimal. When you need:

- **shadcn/ui components** — `npx shadcn@latest init`, then `npx shadcn@latest add button card`
  matches the same HSL token system already in `globals.css`
- **A CMS / blog** — Vercel pairs well with MDX (file-based) or any headless
  CMS (Sanity, Contentful, etc.)
- **A waitlist or form provider** — Formspree, Plausible, or a Vercel KV-backed
  custom endpoint
- **A11y audit before launch** — `npx @axe-core/cli` or use Pa11y CI

All of those layer on without disturbing the brand foundation.
