"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Search, Sparkles } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { navigation } from "./navigation";

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-cream text-ink">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-white focus:p-3">Skip to content</a>
      <div className="mx-auto flex min-h-screen max-w-[1680px]">
        <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col border-r border-ink/10 bg-surface px-5 py-7 md:flex xl:w-72" aria-label="Main navigation">
          <Link href="/" className="px-3 text-3xl font-black tracking-[-0.09em]" aria-label="ORBIT landing page">ORBIT<span className="text-coral">.</span></Link>
          <p className="mt-2 px-3 text-xs text-muted">Find your people.</p>
          <nav aria-label="Primary" className="mt-10 flex flex-col gap-2">
            {navigation.map(({ href, label, icon: Icon }) => {
              const active = pathname === href;
              return <Link key={href} href={href} aria-current={active ? "page" : undefined} className={cn("flex min-h-12 items-center gap-4 rounded-2xl px-4 font-semibold transition-colors hover:bg-sand", active ? "bg-lavender/20 text-ink" : "text-muted")}>
                <Icon size={21} aria-hidden="true" strokeWidth={active ? 2.5 : 2} />
                <span>{label}</span>
              </Link>;
            })}
          </nav>
          <div className="mt-auto rounded-[1.75rem] border border-ink/5 bg-sand p-5">
            <Sparkles className="mb-3 text-coral" aria-hidden="true" />
            <p className="font-extrabold">Your universe starts here.</p>
            <p className="mt-2 text-sm leading-6 text-muted">A little more ORBIT, every day.</p>
            <Badge className="mt-4" tone="lavender">Early preview</Badge>
          </div>
        </aside>

        <div className="min-w-0 flex-1">
          <header className="sticky top-0 z-20 flex min-h-20 items-center gap-3 border-b border-ink/10 bg-cream/95 px-5 backdrop-blur-md sm:px-8">
            <Link href="/" aria-label="ORBIT landing page" className="mr-auto text-2xl font-black tracking-[-0.08em] md:hidden">ORBIT<span className="text-coral">.</span></Link>
            <span className="hidden text-sm font-semibold text-muted md:block">Your space to belong</span>
            <div className="ml-auto flex items-center gap-3">
              <Link href="/app/explore" className="flex min-h-11 items-center gap-2 rounded-2xl border border-ink/10 bg-surface px-4 text-sm text-muted transition-colors hover:bg-sand" aria-label="Explore and search">
                <Search size={18} aria-hidden="true" />
                <span className="hidden sm:inline">Explore ORBIT</span>
              </Link>
              <Link href="/app/profile" aria-label="View profile" className="rounded-full"><Avatar name="Orbit Guest" size="sm" /></Link>
            </div>
          </header>

          <main id="main-content" className="mx-auto w-full max-w-6xl px-5 pb-28 pt-8 sm:px-8 md:pb-12 md:pt-10">{children}</main>
          <footer className="hidden border-t border-ink/10 px-8 py-5 text-xs text-muted md:block">ORBIT · Preview experience <ArrowUpRight size={12} className="inline" aria-hidden="true" /></footer>
        </div>
      </div>

      <nav aria-label="Mobile navigation" className="fixed inset-x-0 bottom-0 z-30 flex min-h-18 items-stretch justify-around border-t border-ink/10 bg-surface/95 px-1 pb-[env(safe-area-inset-bottom)] backdrop-blur-lg md:hidden">
        {navigation.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return <Link key={href} href={href} aria-current={active ? "page" : undefined} className={cn("flex min-w-0 flex-1 flex-col items-center justify-center gap-1 px-1 py-3 text-[10px] font-semibold", active ? "text-ink" : "text-muted")}>
            <Icon size={22} strokeWidth={active ? 2.6 : 2} aria-hidden="true" />
            <span className="truncate">{label}</span>
          </Link>;
        })}
      </nav>
    </div>
  );
}
