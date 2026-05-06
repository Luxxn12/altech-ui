"use client";

import { cva } from "class-variance-authority";
import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "../../utils/cn";
import type { TooltipContentProps, TooltipTriggerProps } from "./tooltip.types";

export const TooltipProvider = TooltipPrimitive.Provider;
export const Tooltip = TooltipPrimitive.Root;

export const TooltipTrigger = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Trigger>,
  TooltipTriggerProps
>(({ className, ...props }, ref) => (
  <TooltipPrimitive.Trigger ref={ref} className={cn(className)} {...props} />
));
TooltipTrigger.displayName = "TooltipTrigger";

export const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  TooltipContentProps
>(({ className, sideOffset = 8, variant, size, ...props }, ref) => (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(tooltipContentVariants({ variant, size }), className)}
      {...props}
    />
  </TooltipPrimitive.Portal>
));
TooltipContent.displayName = "TooltipContent";

const tooltipContentVariants = cva("z-50 rounded-md shadow-md", {
  variants: {
    variant: {
      dark: "bg-[color:var(--altech-foreground)] text-[color:var(--altech-background)]",
      light: "border border-[color:var(--altech-border)] bg-[color:var(--altech-background)] text-[color:var(--altech-foreground)]",
      brand: "bg-[color:var(--altech-primary)] text-[color:var(--altech-primary-foreground)]"
    },
    size: {
      sm: "px-2 py-1 text-[11px]",
      md: "px-2.5 py-1.5 text-xs",
      lg: "px-3 py-2 text-sm"
    }
  },
  defaultVariants: {
    variant: "dark",
    size: "md"
  }
});
