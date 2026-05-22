import Link from "next/link";
import { LogoMark } from "./LogoMark";

/**
 * Minimal Nav — port the full mega menu from hero.jsx when ready.
 * For now: brand + sign in + book demo. Get to production first;
 * iterate visually after deploy.
 */
export function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6 sm:px-10 lg:px-14">
        <Link href="/" className="flex items-center gap-2.5 text-foreground">
          <LogoMark />
          <span className="text-base font-semibold tracking-tight">Qwantaflow</span>
        </Link>

        <div className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          <Link href="/platform" className="hover:text-foreground">Platform</Link>
          <Link href="/solutions" className="hover:text-foreground">Solutions</Link>
          <Link href="/customers" className="hover:text-foreground">Customers</Link>
          <Link href="/resources" className="hover:text-foreground">Resources</Link>
          <Link href="/pricing" className="hover:text-foreground">Pricing</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/signin" className="text-sm text-muted-foreground hover:text-foreground">Sign in</Link>
          <Link
            href="/demo"
            className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-px"
          >
            Book a demo →
          </Link>
        </div>
      </div>
    </nav>
  );
}
