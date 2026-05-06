"use client";

import { cva } from "class-variance-authority";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import * as React from "react";

import { cn } from "../../utils/cn";
import type { DropdownContentProps, DropdownItemProps, DropdownTriggerProps } from "./dropdown.types";

export const Dropdown = DropdownMenuPrimitive.Root;

export const DropdownTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Trigger>,
  DropdownTriggerProps
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Trigger ref={ref} className={cn(className)} {...props} />
));
DropdownTrigger.displayName = "DropdownTrigger";

export const DropdownContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  DropdownContentProps
>(({ className, sideOffset = 8, variant, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(dropdownContentVariants({ variant }), className)}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
DropdownContent.displayName = "DropdownContent";

export const DropdownItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  DropdownItemProps
>(({ className, variant, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(dropdownItemVariants({ variant }), className)}
    {...props}
  />
));
DropdownItem.displayName = "DropdownItem";

const dropdownContentVariants = cva(
  "z-50 min-w-40 rounded-[var(--altech-radius,10px)] border p-1",
  {
    variants: {
      variant: {
        default: "border-[color:var(--altech-border)] bg-[color:var(--altech-background)] shadow-xl",
        elevated: "border-transparent bg-[color:var(--altech-background)] shadow-2xl",
        soft: "border-[color:var(--altech-border)] bg-[color:var(--altech-muted)]/50 shadow-lg"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);

const dropdownItemVariants = cva(
  "relative flex cursor-default select-none items-center rounded-md px-3 py-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
  {
    variants: {
      variant: {
        default: "text-[color:var(--altech-foreground)] focus:bg-[color:var(--altech-muted)]",
        danger:
          "text-[color:var(--altech-danger)] focus:bg-[color:color-mix(in_oklab,var(--altech-danger)_12%,transparent)]",
        success:
          "text-[color:var(--altech-success)] focus:bg-[color:color-mix(in_oklab,var(--altech-success)_12%,transparent)]"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
