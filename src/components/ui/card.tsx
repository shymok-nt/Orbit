import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  as?: "article" | "section" | "div";
  padded?: boolean;
}

export function Card({ as: Component = "article", padded = true, className, children, ...props }: CardProps) {
  return (
    <Component
      className={cn("rounded-[2rem] border border-ink/5 bg-surface shadow-sm", padded && "p-6 sm:p-8", className)}
      {...props}
    >
      {children}
    </Component>
  );
}
