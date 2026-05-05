"use client";

import * as SwitchPrimitive from "@radix-ui/react-switch";
import * as React from "react";

import { cn } from "../../utils/cn";
import type { SwitchProps } from "./switch.types";

export const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  SwitchProps
>(({ className, ...props }, ref) => (
  <SwitchPrimitive.Root
    ref={ref}
    className={cn(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border border-transparent bg-[color:var(--altech-border)] transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:color-mix(in_oklab,var(--altech-primary)_16%,transparent)] disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[color:var(--altech-primary)]",
      className
    )}
    {...props}
  >
    <SwitchPrimitive.Thumb className="pointer-events-none block size-5 translate-x-0.5 rounded-full bg-white shadow-sm ring-0 transition-transform data-[state=checked]:translate-x-5" />
  </SwitchPrimitive.Root>
));

Switch.displayName = "Switch";
