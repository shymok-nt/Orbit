import Link from "next/link";
import { ArrowRight, Compass, Orbit, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { PageIntro } from "@/components/shell/page-intro";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <PageIntro eyebrow="Welcome to your orbit" title="Good things happen together." description="A place for fresh ideas, familiar faces, and communities that feel like yours.">
        <div className="rounded-[2rem] bg-ink p-7 text-white sm:p-10">
          <Sparkles className="mb-4 text-coral" size={28} aria-hidden="true" />
          <h2 className="max-w-lg text-2xl font-extrabold tracking-tight sm:text-3xl">Every great connection starts somewhere.</h2>
          <p className="mt-3 max-w-lg text-sm leading-7 text-white/75">This is an early preview of the ORBIT experience. Community content arrives in the next development phases.</p>
        </div>
      </PageIntro>
      <div className="grid gap-5 sm:grid-cols-2">
        <Card>
          <Compass className="text-coral" size={28} aria-hidden="true" />
          <h2 className="mt-5 text-xl font-extrabold">Find your next obsession</h2>
          <p className="mt-2 leading-7 text-muted">Explore creative spaces and new perspectives.</p>
          <Link href="/app/explore" className="mt-5 inline-flex items-center gap-2 font-bold text-ink hover:underline">Go to Explore <ArrowRight size={17} aria-hidden="true" /></Link>
        </Card>
        <Card>
          <Orbit className="text-lavender" size={28} aria-hidden="true" />
          <h2 className="mt-5 text-xl font-extrabold">Discover your Worlds</h2>
          <p className="mt-2 leading-7 text-muted">Find communities built around shared interests.</p>
          <Link href="/app/worlds" className="mt-5 inline-flex items-center gap-2 font-bold text-ink hover:underline">See Worlds <ArrowRight size={17} aria-hidden="true" /></Link>
        </Card>
      </div>
    </div>
  );
}
