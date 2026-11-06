import Link from "next/link";
import { ArrowRight, Compass, Heart, MessageCircle, Orbit, Plus, Sparkles, Users } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

import { getDemoFeed, getFeaturedWorlds } from "@/features/social/selectors";

const previewPosts = getDemoFeed();
const featuredWorlds = getFeaturedWorlds();
const accentClasses = {
  lavender: "bg-lavender/25",
  coral: "bg-coral/15",
  sand: "bg-sand",
} as const;

export default function DashboardPage() {
  return (
    <div className="space-y-7">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <Badge tone="lavender">✦ Welcome to ORBIT</Badge>
          <h1 className="mt-3 text-3xl font-black tracking-[-0.055em] sm:text-4xl">Your corner of the universe.</h1>
          <p className="mt-2 text-sm leading-6 text-muted sm:text-base">Discover what inspires you. Find people who get it.</p>
        </div>
        <Badge tone="neutral">Demo content · Preview only</Badge>
      </div>

      <div className="grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_290px]">
        <div className="min-w-0 space-y-6">
          <Card className="overflow-hidden border-0 bg-ink text-white" padded={false}>
            <div className="relative overflow-hidden p-7 sm:p-9">
              <div aria-hidden="true" className="pointer-events-none absolute -right-10 -top-16 h-48 w-48 rounded-full border-[24px] border-lavender/60" />
              <Sparkles className="relative text-coral" size={28} aria-hidden="true" />
              <h2 className="relative mt-4 max-w-md text-2xl font-extrabold tracking-tight sm:text-3xl">Find your people. Build your universe.</h2>
              <p className="relative mt-3 max-w-md text-sm leading-7 text-white/80">A creative place to connect, discover, and share what you love.</p>
              <Link href="/app/worlds" className="relative mt-6 inline-flex min-h-11 items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold !text-ink transition-colors hover:bg-sand">Explore Worlds <ArrowRight size={16} aria-hidden="true" /></Link>
            </div>
          </Card>

          <Card className="flex items-center gap-4" padded={true}>
            <Avatar name="Orbit Guest" />
            <div className="min-w-0 flex-1">
              <p className="font-bold">Have something on your mind?</p>
              <p className="mt-1 text-sm text-muted">Posting will be available in a future phase.</p>
            </div>
            <span aria-label="Create post coming soon" className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sand text-muted"><Plus size={20} aria-hidden="true" /></span>
          </Card>

          <section aria-labelledby="feed-heading" className="space-y-4">
            <div className="flex items-center justify-between gap-3">
              <h2 id="feed-heading" className="text-xl font-extrabold tracking-tight">From your universe</h2>
              <span className="text-xs font-semibold text-muted">Sample posts</span>
            </div>
            {previewPosts.map((post) => (
              <Card key={post.post.id} className="space-y-5">
                <div className="flex items-center gap-3">
                  <Avatar name={post.author.displayName} />
                  <div className="min-w-0 flex-1">
                    <p className="font-bold">{post.author.displayName} <span className="font-normal text-muted">{`@${post.author.handle}`}</span></p>
                    <p className="text-xs text-muted">{post.world.name} · {new Date(post.post.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</p>
                  </div>
                </div>
                <p className="text-[15px] leading-7">{post.post.body}</p>
                <div aria-hidden="true" className={`flex h-36 items-center justify-center rounded-2xl ${accentClasses[post.post.visual]}`}>
                  <span className="text-5xl font-black tracking-[-0.08em] text-ink/50">ORBIT ✳</span>
                </div>
                <div className="flex gap-6 border-t border-ink/10 pt-4 text-sm text-muted" aria-label="Sample engagement counts">
                  <span className="inline-flex items-center gap-2"><Heart size={18} aria-hidden="true" /> {post.post.likeCount}</span>
                  <span className="inline-flex items-center gap-2"><MessageCircle size={18} aria-hidden="true" /> {post.post.commentCount}</span>
                </div>
              </Card>
            ))}
          </section>
        </div>

        <aside className="space-y-5" aria-label="Discover more">
          <Card className="space-y-5">
            <div className="flex items-center gap-2"><Orbit size={20} className="text-coral" aria-hidden="true" /><h2 className="text-lg font-extrabold">Worlds to explore</h2></div>
            {featuredWorlds.map((world) => (
              <div key={world.name} className="flex items-center gap-3">
                <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-xl ${accentClasses[world.accent]}`}>{world.symbol}</div>
                <div className="min-w-0"><p className="font-bold">{world.name}</p><p className="text-xs text-muted">{world.description}</p></div>
              </div>
            ))}
            <Link href="/app/worlds" className="inline-flex items-center gap-2 text-sm font-bold hover:underline">Discover Worlds <ArrowRight size={16} aria-hidden="true" /></Link>
          </Card>
          <Card className="bg-sand" padded={true}>
            <Users className="text-coral" size={25} aria-hidden="true" />
            <h2 className="mt-3 text-lg font-extrabold">Better together.</h2>
            <p className="mt-2 text-sm leading-6 text-muted">Your favorite communities are just around the corner.</p>
            <Link href="/app/explore" className="mt-4 inline-flex items-center gap-2 text-sm font-bold hover:underline"><Compass size={16} aria-hidden="true" /> Explore <ArrowRight size={16} aria-hidden="true" /></Link>
          </Card>
          <p className="px-2 text-xs leading-5 text-muted">This page uses illustrative sample content. Accounts, feeds and interactions are not active yet.</p>
        </aside>
      </div>
    </div>
  );
}
