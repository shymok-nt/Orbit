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
        <header className="flex items-center justify-between gap-4 border-b border-[#25212b]/10 pb-5">
          <Link href="/" aria-label="ORBIT home" className="text-2xl font-black tracking-[-0.08em]">ORBIT<span className="text-[#ff6b57]">.</span></Link>
          <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold shadow-sm sm:text-sm">Phase 1A · Foundation</span>
        </header>
        <section className="grid items-center gap-10 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <div className="mb-6 inline-flex rounded-full bg-[#f2e9e2] px-4 py-2 text-sm font-semibold">✦ Your next favorite corner of the internet</div>
            <h1 className="max-w-xl text-5xl font-black leading-[1.05] tracking-[-0.065em] sm:text-7xl">Find your people.<br /><span className="text-[#ff6b57]">Build your universe.</span></h1>
            <p className="mt-7 max-w-lg text-lg leading-8 text-[#635c68]">A creative social space for discovering ideas, sharing what you love, and finding communities that feel like yours.</p>
            <div className="mt-9 flex flex-wrap items-center gap-3"><span className="rounded-2xl bg-[#25212b] px-6 py-4 font-bold text-white">A new world is coming</span><span className="text-sm text-[#635c68]">We are building ORBIT, one thoughtful step at a time.</span></div>
          </div>
          <div aria-hidden="true" className="relative flex min-h-80 items-center justify-center overflow-hidden rounded-[3rem] bg-[#f2e9e2] sm:min-h-[440px]">
            <div className="absolute h-72 w-72 rounded-full border-[36px] border-[#a78bfa] sm:h-96 sm:w-96" />
            <div className="absolute h-44 w-44 translate-x-12 -translate-y-10 rounded-full bg-[#ff6b57] shadow-2xl sm:h-56 sm:w-56" />
            <div className="absolute h-28 w-28 -translate-x-28 translate-y-20 rounded-full bg-[#25212b] sm:h-36 sm:w-36" />
            <div className="absolute translate-x-28 translate-y-32 rotate-[-12deg] rounded-2xl bg-white px-6 py-4 text-xl font-black shadow-xl">Your orbit ✦</div>
          </div>
        </section>
        <section aria-label="What ORBIT will offer" className="grid gap-5 pb-20 md:grid-cols-3">{pillars.map((pillar) => <article key={pillar.title} className="rounded-[2rem] border border-[#25212b]/5 bg-white p-8 shadow-sm"><div className="mb-7 text-4xl text-[#ff6b57]">{pillar.icon}</div><h2 className="text-2xl font-extrabold tracking-tight">{pillar.title}</h2><p className="mt-3 leading-7 text-[#635c68]">{pillar.text}</p></article>)}</section>
        <footer className="border-t border-[#25212b]/10 py-6 text-sm text-[#635c68]">© {new Date().getFullYear()} ORBIT · Made for communities.</footer>
      </div>
    </main>
  );
}
