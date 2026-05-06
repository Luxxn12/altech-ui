"use client";

import { cva } from "class-variance-authority";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import * as React from "react";

import { cn } from "../../utils/cn";
import type { SwitchProps } from "./switch.types";

export const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  SwitchProps
>(({ className, variant, size, ...props }, ref) => (
  <SwitchPrimitive.Root
    ref={ref}
    className={cn(switchVariants({ variant, size }), className)}
    {...props}
  >
    <SwitchPrimitive.Thumb className={cn("pointer-events-none block rounded-full bg-white shadow-sm ring-0 transition-transform", switchThumbVariants({ size }))} />
  </SwitchPrimitive.Root>
));

Switch.displayName = "Switch";

const switchVariants = cva(
  "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border border-transparent transition-colors focus-visible:outline-none focus-visible:ring-4 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-[color:var(--altech-border)] focus-visible:ring-[color:color-mix(in_oklab,var(--altech-primary)_16%,transparent)] data-[state=checked]:bg-[color:var(--altech-primary)]",
        success:
          "bg-[color:var(--altech-border)] focus-visible:ring-[color:color-mix(in_oklab,var(--altech-success)_16%,transparent)] data-[state=checked]:bg-[color:var(--altech-success)]",
        danger:
          "bg-[color:var(--altech-border)] focus-visible:ring-[color:color-mix(in_oklab,var(--altech-danger)_16%,transparent)] data-[state=checked]:bg-[color:var(--altech-danger)]"
      },
      size: {
        sm: "h-5 w-9",
        md: "h-6 w-11",
        lg: "h-7 w-12"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
);

const switchThumbVariants = cva("", {
  variants: {
    size: {
      sm: "size-4 translate-x-0.5 data-[state=checked]:translate-x-4",
      md: "size-5 translate-x-0.5 data-[state=checked]:translate-x-5",
      lg: "size-6 translate-x-0.5 data-[state=checked]:translate-x-5"
    }
  },
  defaultVariants: {
    size: "md"
  }
});
