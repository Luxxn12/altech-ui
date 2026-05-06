import { cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "../../utils/cn";
import type {
  CardContentProps,
  CardFooterProps,
  CardHeaderProps,
  CardProps
} from "./card.types";

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ variant }), className)}
      {...props}
    />
  ),
);

Card.displayName = "Card";

export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, size, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardHeaderVariants({ size }), className)}
      {...props}
    />
  ),
);

CardHeader.displayName = "CardHeader";

export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, size, ...props }, ref) => (
    <div ref={ref} className={cn(cardContentVariants({ size }), className)} {...props} />
  ),
);

CardContent.displayName = "CardContent";

export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, size, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardFooterVariants({ size }), className)}
      {...props}
    />
  ),
);

CardFooter.displayName = "CardFooter";

export const cardVariants = cva(
  "rounded-[var(--altech-radius,10px)] border transition-all duration-200 ease-out",
  {
    variants: {
      variant: {
        default:
          "border-[color:var(--altech-border)] bg-[color:var(--altech-background)] shadow-sm hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(7,18,46,0.12)] active:translate-y-0",
        elevated:
          "border-transparent bg-[color:var(--altech-background)] shadow-[0_15px_30px_rgba(7,18,46,0.16)] hover:-translate-y-1 hover:shadow-[0_20px_36px_rgba(7,18,46,0.2)]",
        outline:
          "border-2 border-[color:var(--altech-primary)]/25 bg-[color:var(--altech-background)] shadow-none",
        ghost: "border-transparent bg-[color:var(--altech-muted)]/35 shadow-none",
        gradient:
          "border-transparent bg-gradient-to-br from-[color:var(--altech-background)] to-[color:var(--altech-muted)] shadow-sm"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);

export const cardHeaderVariants = cva("flex flex-col gap-1.5 border-b border-[color:var(--altech-border)]", {
  variants: {
    size: {
      sm: "px-4 py-3",
      md: "px-6 py-4",
      lg: "px-7 py-5"
    }
  },
  defaultVariants: {
    size: "md"
  }
});

export const cardContentVariants = cva("", {
  variants: {
    size: {
      sm: "px-4 py-4",
      md: "px-6 py-5",
      lg: "px-7 py-6"
    }
  },
  defaultVariants: {
    size: "md"
  }
});

export const cardFooterVariants = cva("flex items-center gap-3 border-t border-[color:var(--altech-border)]", {
  variants: {
    size: {
      sm: "px-4 py-3",
      md: "px-6 py-4",
      lg: "px-7 py-5"
    }
  },
  defaultVariants: {
    size: "md"
  }
});
