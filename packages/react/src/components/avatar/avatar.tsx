import { cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "../../utils/cn";
import type { AvatarProps } from "./avatar.types";

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, src, alt = "avatar", fallback, variant, size, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(avatarVariants({ variant, size }), className)}
      {...props}
    >
      {src ? <img src={src} alt={alt} className="size-full object-cover" /> : fallback ?? alt.slice(0, 2).toUpperCase()}
    </div>
  )
);

Avatar.displayName = "Avatar";

const avatarVariants = cva(
  "inline-flex shrink-0 items-center justify-center overflow-hidden border border-[color:var(--altech-border)] bg-[color:var(--altech-muted)] font-medium text-[color:var(--altech-foreground)]",
  {
    variants: {
      variant: {
        circle: "rounded-full",
        rounded: "rounded-[var(--altech-radius,10px)]",
        square: "rounded-none"
      },
      size: {
        xs: "size-6 text-[10px]",
        sm: "size-8 text-xs",
        md: "size-10 text-sm",
        lg: "size-12 text-base",
        xl: "size-16 text-lg"
      }
    },
    defaultVariants: {
      variant: "circle",
      size: "md"
    }
  }
);
