"use client";

import { cva } from "class-variance-authority";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import * as React from "react";

import { cn } from "../../utils/cn";
import type { RadioGroupProps, RadioItemProps } from "./radio.types";

export const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Root ref={ref} className={cn("grid gap-2", className)} {...props} />
));

RadioGroup.displayName = "RadioGroup";

export const RadioItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioItemProps
>(({ className, variant, size, ...props }, ref) => (
  <RadioGroupPrimitive.Item
    ref={ref}
    className={cn(radioItemVariants({ variant, size }), className)}
    {...props}
  >
    <RadioGroupPrimitive.Indicator
      data-slot="radio-indicator"
      className={cn("block rounded-full bg-current", radioIndicatorVariants({ size }))}
    />
  </RadioGroupPrimitive.Item>
));

RadioItem.displayName = "RadioItem";

const radioItemVariants = cva(
  "inline-flex shrink-0 items-center justify-center rounded-full border border-[color:var(--altech-border)] focus-visible:outline-none focus-visible:ring-4 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "text-[color:var(--altech-primary)] focus-visible:ring-[color:color-mix(in_oklab,var(--altech-primary)_16%,transparent)]",
        success: "text-[color:var(--altech-success)] focus-visible:ring-[color:color-mix(in_oklab,var(--altech-success)_16%,transparent)]",
        danger: "text-[color:var(--altech-danger)] focus-visible:ring-[color:color-mix(in_oklab,var(--altech-danger)_16%,transparent)]"
      },
      size: { sm: "size-4", md: "size-5", lg: "size-6" }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
);

const radioIndicatorVariants = cva("", {
  variants: {
    size: {
      sm: "size-2",
      md: "size-2.5",
      lg: "size-3"
    }
  },
  defaultVariants: {
    size: "md"
  }
});
