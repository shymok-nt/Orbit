import { Compass, House, Orbit, Bell, UserRound } from "lucide-react";

export const navigation = [
  { href: "/app", label: "Home", icon: House },
  { href: "/app/explore", label: "Explore", icon: Compass },
  { href: "/app/worlds", label: "Worlds", icon: Orbit },
  { href: "/app/notifications", label: "Notifications", icon: Bell },
  { href: "/app/profile", label: "Profile", icon: UserRound },
] as const;
