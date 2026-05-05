"use client";

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
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Item
    ref={ref}
    className={cn(
      "inline-flex size-5 shrink-0 items-center justify-center rounded-full border border-[color:var(--altech-border)] text-[color:var(--altech-primary)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:color-mix(in_oklab,var(--altech-primary)_16%,transparent)] disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
  >
    <RadioGroupPrimitive.Indicator className="block size-2.5 rounded-full bg-current" />
  </RadioGroupPrimitive.Item>
));

RadioItem.displayName = "RadioItem";
