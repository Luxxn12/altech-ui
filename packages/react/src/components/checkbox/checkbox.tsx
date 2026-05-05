"use client";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import * as React from "react";

import { cn } from "../../utils/cn";
import type { CheckboxProps } from "./checkbox.types";

export const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer inline-flex size-5 shrink-0 items-center justify-center rounded border border-[color:var(--altech-border)] bg-[color:var(--altech-background)] text-[color:var(--altech-primary)] transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:color-mix(in_oklab,var(--altech-primary)_16%,transparent)] disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-[color:var(--altech-primary)]",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className="text-current">✓</CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));

Checkbox.displayName = "Checkbox";
