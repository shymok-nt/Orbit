import Link from "next/link";
import { Compass, Orbit, Sparkles } from "lucide-react";
import { AuthPanel } from "@/components/auth/auth-panel";

export default function HomePage() {
  return (
    <main className="grid min-h-screen lg:grid-cols-[minmax(0,1.08fr)_minmax(420px,0.92fr)]">
      <section className="relative flex min-h-[520px] flex-col overflow-hidden bg-cream px-6 py-8 sm:px-12 sm:py-10 lg:min-h-screen lg:px-14 xl:px-20">
        <div className="pointer-events-none absolute -right-36 top-28 h-96 w-96 rounded-full border-[60px] border-lavender/25" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-coral/10" aria-hidden="true" />
        <header className="relative flex items-center justify-between gap-4">
          <Link href="/" aria-label="ORBIT home" className="text-3xl font-black tracking-[-0.09em]">ORBIT<span className="text-coral">.</span></Link>
          <span className="rounded-full border border-ink/10 bg-white/80 px-4 py-2 text-xs font-bold">✦ A space to belong</span>
        </header>

        <div className="relative mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center py-14 lg:py-20">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-sand px-4 py-2 text-xs font-bold sm:text-sm"><Sparkles size={16} className="text-coral" aria-hidden="true" /> Your next favorite corner of the internet</div>
          <h1 className="text-5xl font-black leading-[1.03] tracking-[-0.07em] sm:text-6xl xl:text-7xl">Find your people.<br /><span className="text-coral">Build your universe.</span></h1>
          <p className="mt-6 max-w-lg text-base leading-8 text-muted sm:text-lg">A creative social space to discover ideas, share what you love, and find communities that feel like yours.</p>

          <div aria-hidden="true" className="relative mt-10 flex h-52 w-full max-w-lg items-center justify-center overflow-hidden rounded-[2.5rem] bg-sand/80 sm:h-64">
            <div className="orbit-float absolute h-56 w-56 rounded-full border-[26px] border-lavender sm:h-64 sm:w-64" />
            <div className="absolute h-32 w-32 translate-x-12 -translate-y-5 rounded-full bg-coral shadow-xl sm:h-40 sm:w-40" />
            <div className="absolute h-20 w-20 -translate-x-24 translate-y-12 rounded-full bg-ink sm:h-24 sm:w-24" />
            <div className="absolute translate-x-24 translate-y-20 -rotate-12 rounded-xl bg-white px-4 py-3 text-sm font-black shadow-lg sm:text-base">Your orbit ✦</div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 text-sm font-bold text-ink">
            <span className="inline-flex items-center gap-2"><Compass size={17} className="text-coral" aria-hidden="true" /> Discover ideas</span>
            <span className="inline-flex items-center gap-2"><Orbit size={17} className="text-lavender" aria-hidden="true" /> Find your Worlds</span>
            <span className="inline-flex items-center gap-2"><Sparkles size={17} className="text-coral" aria-hidden="true" /> Create together</span>
          </div>
        </div>

        <footer className="relative flex flex-wrap items-center justify-between gap-3 border-t border-ink/10 pt-5 text-xs text-muted">
          <span>© {new Date().getFullYear()} ORBIT. Made for communities.</span>
        </footer>
      </section>
      <AuthPanel />
    </main>
  );
}
