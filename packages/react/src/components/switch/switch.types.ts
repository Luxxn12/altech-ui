import type * as SwitchPrimitive from "@radix-ui/react-switch";

export interface SwitchProps extends SwitchPrimitive.SwitchProps {
  variant?: "primary" | "success" | "danger";
  size?: "sm" | "md" | "lg";
}
