import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type AvatarSize = "sm" | "md" | "lg";

export interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
  name: string;
  size?: AvatarSize;
  imageUrl?: string;
}

const sizes: Record<AvatarSize, string> = {
  sm: "h-8 w-8 text-xs",
  md: "h-11 w-11 text-sm",
  lg: "h-16 w-16 text-xl",
};

export function Avatar({ name, size = "md", imageUrl, className, ...props }: AvatarProps) {
  const initials = name.trim().split(/\s+/).slice(0, 2).map((part) => part.charAt(0)).join("").toUpperCase() || "?";
  return (
    <span
      role="img"
      aria-label={name}
      className={cn("inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-lavender/30 font-extrabold text-ink", sizes[size], className)}
      {...props}
    >
      {imageUrl ? (
        // Avatar URLs will be validated by the media layer before production use.
        // eslint-disable-next-line @next/next/no-img-element
        <img src={imageUrl} alt="" className="h-full w-full object-cover" />
      ) : initials}
    </span>
  );
}
