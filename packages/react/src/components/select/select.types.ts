import type * as SelectPrimitive from "@radix-ui/react-select";

export type SelectProps = SelectPrimitive.SelectProps;
export interface SelectTriggerProps extends SelectPrimitive.SelectTriggerProps {
  variant?: "default" | "filled" | "ghost" | "flushed";
  size?: "sm" | "md" | "lg";
}
export interface SelectContentProps extends SelectPrimitive.SelectContentProps {
  variant?: "default" | "elevated" | "soft";
}
export type SelectItemProps = SelectPrimitive.SelectItemProps;
