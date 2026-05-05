import * as React from "react";

import { cn } from "../../utils/cn";
import type {
  CardContentProps,
  CardFooterProps,
  CardHeaderProps,
  CardProps
} from "./card.types";

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-[var(--altech-radius,10px)] border border-[color:var(--altech-border)] bg-[color:var(--altech-background)] shadow-sm transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(7,18,46,0.12)] active:translate-y-0 active:scale-[0.995]",
        className,
      )}
      {...props}
    />
  ),
);

Card.displayName = "Card";

export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col gap-1.5 border-b border-[color:var(--altech-border)] px-6 py-4", className)}
      {...props}
    />
  ),
);

CardHeader.displayName = "CardHeader";

export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("px-6 py-5", className)} {...props} />
  ),
);

CardContent.displayName = "CardContent";

export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center gap-3 border-t border-[color:var(--altech-border)] px-6 py-4", className)}
      {...props}
    />
  ),
);

CardFooter.displayName = "CardFooter";
