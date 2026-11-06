import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";

interface PageIntroProps {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}

export function PageIntro({ eyebrow, title, description, children }: PageIntroProps) {
  return (
    <section className="space-y-5">
      <Badge tone="lavender">{eyebrow}</Badge>
      <div>
        <h1 className="text-4xl font-black tracking-[-0.055em] sm:text-5xl">{title}</h1>
        <p className="mt-3 max-w-2xl text-base leading-7 text-muted">{description}</p>
      </div>
      {children}
    </section>
  );
}
