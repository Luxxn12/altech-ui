import type * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

export type DropdownProps = DropdownMenuPrimitive.DropdownMenuProps;
export type DropdownTriggerProps = DropdownMenuPrimitive.DropdownMenuTriggerProps;
export interface DropdownContentProps extends DropdownMenuPrimitive.DropdownMenuContentProps {
  variant?: "default" | "elevated" | "soft";
}
export interface DropdownItemProps extends DropdownMenuPrimitive.DropdownMenuItemProps {
  variant?: "default" | "danger" | "success";
}
