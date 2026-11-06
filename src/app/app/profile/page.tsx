import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { PageIntro } from "@/components/shell/page-intro";

export default function ProfilePage() {
  return <div className="space-y-8"><PageIntro eyebrow="Identity" title="Your corner of ORBIT." description="A preview of the space where your story and creations will live." /><Card><div className="flex flex-wrap items-center gap-5"><Avatar name="Orbit Guest" size="lg" /><div><h2 className="text-xl font-extrabold">Orbit Guest</h2><p className="mt-1 text-sm text-muted">Preview profile · Not a registered account</p><Badge tone="lavender" className="mt-3">Coming soon</Badge></div></div><p className="mt-6 leading-7 text-muted">Custom profiles, avatars and account settings will be added with authentication and profile features.</p></Card></div>;
}
