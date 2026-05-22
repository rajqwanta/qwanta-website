import { LogoMark } from "./LogoMark";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border bg-card">
      <div className="mx-auto max-w-[1440px] px-6 py-12 sm:px-10 lg:px-14">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-2.5 text-foreground">
            <LogoMark size={20} />
            <span className="text-sm font-semibold tracking-tight">Qwantaflow</span>
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground/60">
            © 2026 Qwantaflow Inc. · QF-CORE 3.9.2
          </div>
        </div>
      </div>
    </footer>
  );
}
