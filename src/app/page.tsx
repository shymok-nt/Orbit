import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const pillars = [
  { icon: "✦", title: "Discover", text: "Find ideas, creators, and corners of the internet worth exploring." },
  { icon: "◎", title: "Worlds", text: "Join communities built around the things you care about." },
  { icon: "↗", title: "Connect", text: "Share your perspective and meet your people." },
] as const;

export default function HomePage() {
  return (
    <main className="min-h-screen px-5 py-6 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <header className="flex items-center justify-between gap-4 border-b border-ink/10 pb-5">
          <Link href="/" aria-label="ORBIT home" className="text-2xl font-black tracking-[-0.08em]">ORBIT<span className="text-coral">.</span></Link>
          <Badge tone="lavender">ORBIT · Early preview</Badge>
        </header>
        <section className="grid items-center gap-10 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <div className="mb-6 inline-flex rounded-full bg-sand px-4 py-2 text-sm font-semibold">✦ Your next favorite corner of the internet</div>
            <h1 className="max-w-xl text-5xl font-black leading-[1.05] tracking-[-0.065em] sm:text-7xl">Find your people.<br /><span className="text-coral">Build your universe.</span></h1>
            <p className="mt-7 max-w-lg text-lg leading-8 text-muted">A creative social space for discovering ideas, sharing what you love, and finding communities that feel like yours.</p>
            <div className="mt-9 flex flex-wrap items-center gap-3"><Link href="/app" className="inline-flex min-h-12 items-center gap-2 rounded-2xl bg-ink px-6 py-4 font-bold !text-white shadow-lg shadow-ink/10 transition-colors hover:bg-ink/90">Enter ORBIT preview →</Link><span className="text-sm text-muted">We are building ORBIT, one thoughtful step at a time.</span></div>
          </div>
          <div aria-hidden="true" className="relative flex min-h-80 items-center justify-center overflow-hidden rounded-[3rem] bg-sand sm:min-h-[440px]">
            <div className="orbit-float absolute h-72 w-72 rounded-full border-[36px] border-lavender sm:h-96 sm:w-96" />
            <div className="absolute h-44 w-44 translate-x-12 -translate-y-10 rounded-full bg-coral shadow-2xl sm:h-56 sm:w-56" />
            <div className="absolute h-28 w-28 -translate-x-28 translate-y-20 rounded-full bg-ink sm:h-36 sm:w-36" />
            <div className="absolute translate-x-28 translate-y-32 rotate-[-12deg] rounded-2xl bg-surface px-6 py-4 text-xl font-black shadow-xl">Your orbit ✦</div>
          </div>
        </section>
        <section aria-label="What ORBIT will offer" className="grid gap-5 pb-20 md:grid-cols-3">{pillars.map((pillar) => <Card key={pillar.title}><div className="mb-7 text-4xl text-coral">{pillar.icon}</div><h2 className="text-2xl font-extrabold tracking-tight">{pillar.title}</h2><p className="mt-3 leading-7 text-muted">{pillar.text}</p></Card>)}</section>
        <footer className="border-t border-ink/10 py-6 text-sm text-muted">© {new Date().getFullYear()} ORBIT · Made for communities.</footer>
      </div>
    </main>
  );
}
