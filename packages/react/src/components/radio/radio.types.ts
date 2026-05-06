import type * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

export type RadioGroupProps = RadioGroupPrimitive.RadioGroupProps;
export interface RadioItemProps extends RadioGroupPrimitive.RadioGroupItemProps {
  variant?: "primary" | "success" | "danger";
  size?: "sm" | "md" | "lg";
}
