import { Orbit } from "lucide-react";
import { Card } from "@/components/ui/card";
import { PageIntro } from "@/components/shell/page-intro";

export default function WorldsPage() {
  return <div className="space-y-8"><PageIntro eyebrow="Communities" title="Find your Worlds." description="Little universes built by people who love the same things you do." /><Card><Orbit className="text-lavender" size={30} aria-hidden="true" /><h2 className="mt-4 text-xl font-extrabold">Worlds are taking shape</h2><p className="mt-2 leading-7 text-muted">Community cards, membership and discussions are planned for upcoming phases.</p></Card></div>;
}
