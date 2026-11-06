import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tone = "neutral" | "coral" | "lavender" | "success";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: Tone;
  children: ReactNode;
}

const tones: Record<Tone, string> = {
  neutral: "bg-sand text-ink",
  coral: "bg-coral/20 text-ink",
  lavender: "bg-lavender/25 text-ink",
  success: "bg-emerald-100 text-emerald-900",
};

export function Badge({ tone = "neutral", className, children, ...props }: BadgeProps) {
  return <span className={cn("inline-flex items-center rounded-full px-3 py-1.5 text-xs font-bold", tones[tone], className)} {...props}>{children}</span>;
}
