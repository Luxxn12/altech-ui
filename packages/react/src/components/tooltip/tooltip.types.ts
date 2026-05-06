import type * as TooltipPrimitive from "@radix-ui/react-tooltip";

export type TooltipProps = TooltipPrimitive.TooltipProps;
export type TooltipTriggerProps = TooltipPrimitive.TooltipTriggerProps;
export interface TooltipContentProps extends TooltipPrimitive.TooltipContentProps {
  variant?: "dark" | "light" | "brand";
  size?: "sm" | "md" | "lg";
}
