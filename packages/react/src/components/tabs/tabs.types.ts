import type * as TabsPrimitive from "@radix-ui/react-tabs";

export type TabsProps = TabsPrimitive.TabsProps;
export interface TabsListProps extends TabsPrimitive.TabsListProps {
  variant?: "pills" | "line" | "boxed";
  size?: "sm" | "md" | "lg";
}
export interface TabsTriggerProps extends TabsPrimitive.TabsTriggerProps {
  variant?: "pills" | "line" | "boxed";
  size?: "sm" | "md" | "lg";
}
export interface TabsContentProps extends TabsPrimitive.TabsContentProps {
  spacing?: "sm" | "md" | "lg";
}
