import * as React from "react";

import { cn } from "../../utils/cn";
import type { AvatarProps } from "./avatar.types";

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, src, alt = "avatar", fallback, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "inline-flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[color:var(--altech-border)] bg-[color:var(--altech-muted)] text-sm font-medium text-[color:var(--altech-foreground)]",
        className
      )}
      {...props}
    >
      {src ? <img src={src} alt={alt} className="size-full object-cover" /> : fallback ?? alt.slice(0, 2).toUpperCase()}
    </div>
  )
);

Avatar.displayName = "Avatar";
