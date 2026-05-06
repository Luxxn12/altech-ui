import type * as CheckboxPrimitive from "@radix-ui/react-checkbox";

export interface CheckboxProps extends CheckboxPrimitive.CheckboxProps {
  variant?: "primary" | "success" | "danger";
  size?: "sm" | "md" | "lg";
}
