import { Bell } from "lucide-react";
import { Card } from "@/components/ui/card";
import { PageIntro } from "@/components/shell/page-intro";

export default function NotificationsPage() {
  return <div className="space-y-8"><PageIntro eyebrow="Activity" title="Stay in the loop." description="Your future home for updates from your communities and connections." /><Card><Bell className="text-coral" size={30} aria-hidden="true" /><h2 className="mt-4 text-xl font-extrabold">All quiet for now</h2><p className="mt-2 leading-7 text-muted">Notifications will appear here when accounts and interactions are available.</p></Card></div>;
}
