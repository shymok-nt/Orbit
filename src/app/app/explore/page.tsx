import { Compass } from "lucide-react";
import { Card } from "@/components/ui/card";
import { PageIntro } from "@/components/shell/page-intro";

export default function ExplorePage() {
  return <div className="space-y-8"><PageIntro eyebrow="Discover" title="Explore your universe." description="A home for unexpected ideas, inspiration, and people worth discovering." /><Card><Compass className="text-coral" size={30} aria-hidden="true" /><h2 className="mt-4 text-xl font-extrabold">Discovery is coming</h2><p className="mt-2 leading-7 text-muted">Search and discovery will become interactive when we build the content and search features. This screen is a preview.</p></Card></div>;
}
