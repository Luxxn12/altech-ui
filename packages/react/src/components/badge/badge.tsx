import { cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "../../utils/cn";
import type { BadgeProps } from "./badge.types";

export const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium transition-colors duration-200",
  {
    variants: {
      variant: {
        default: "bg-[color:var(--altech-muted)] text-[color:var(--altech-foreground)]",
        primary:
          "bg-[color:color-mix(in_oklab,var(--altech-primary)_14%,transparent)] text-[color:var(--altech-primary)]",
        success:
          "bg-[color:color-mix(in_oklab,var(--altech-success)_14%,transparent)] text-[color:var(--altech-success)]",
        warning:
          "bg-[color:color-mix(in_oklab,var(--altech-warning)_14%,transparent)] text-[color:var(--altech-warning)]",
        danger:
          "bg-[color:color-mix(in_oklab,var(--altech-danger)_14%,transparent)] text-[color:var(--altech-danger)]"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  },
);

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, ...props }, ref) => (
    <span ref={ref} className={cn(badgeVariants({ variant }), className)} {...props} />
  ),
);

Badge.displayName = "Badge";
