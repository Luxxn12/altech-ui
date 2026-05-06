"use client";

import { cva } from "class-variance-authority";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import * as React from "react";

import { cn } from "../../utils/cn";
import type { CheckboxProps } from "./checkbox.types";

export const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, variant, size, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(checkboxVariants({ variant, size }), className)}
    {...props}
  >
    <CheckboxPrimitive.Indicator className="text-current">✓</CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));

Checkbox.displayName = "Checkbox";

const checkboxVariants = cva(
  "peer inline-flex shrink-0 items-center justify-center rounded border bg-[color:var(--altech-background)] transition focus-visible:outline-none focus-visible:ring-4 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "border-[color:var(--altech-border)] text-[color:var(--altech-primary)] focus-visible:ring-[color:color-mix(in_oklab,var(--altech-primary)_16%,transparent)] data-[state=checked]:border-[color:var(--altech-primary)]",
        success:
          "border-[color:var(--altech-border)] text-[color:var(--altech-success)] focus-visible:ring-[color:color-mix(in_oklab,var(--altech-success)_16%,transparent)] data-[state=checked]:border-[color:var(--altech-success)]",
        danger:
          "border-[color:var(--altech-border)] text-[color:var(--altech-danger)] focus-visible:ring-[color:color-mix(in_oklab,var(--altech-danger)_16%,transparent)] data-[state=checked]:border-[color:var(--altech-danger)]"
      },
      size: {
        sm: "size-4 text-xs",
        md: "size-5 text-sm",
        lg: "size-6 text-base"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
);
