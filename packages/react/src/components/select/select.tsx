"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";

import { cn } from "../../utils/cn";
import type { SelectContentProps, SelectItemProps, SelectTriggerProps } from "./select.types";

export const Select = SelectPrimitive.Root;
export const SelectValue = SelectPrimitive.Value;

export const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  SelectTriggerProps
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-11 w-full items-center justify-between rounded-[var(--altech-radius,10px)] border border-[color:var(--altech-border)] bg-[color:var(--altech-background)] px-4 text-sm text-[color:var(--altech-foreground)] outline-none focus-visible:border-[color:var(--altech-primary)] focus-visible:ring-4 focus-visible:ring-[color:color-mix(in_oklab,var(--altech-primary)_18%,transparent)]",
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon>▾</SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = "SelectTrigger";

export const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  SelectContentProps
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "z-50 min-w-[var(--radix-select-trigger-width)] overflow-hidden rounded-[var(--altech-radius,10px)] border border-[color:var(--altech-border)] bg-[color:var(--altech-background)] p-1 shadow-xl",
        className
      )}
      {...props}
    >
      <SelectPrimitive.Viewport>{props.children}</SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = "SelectContent";

export const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  SelectItemProps
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-md px-3 py-2 text-sm text-[color:var(--altech-foreground)] outline-none transition-colors focus:bg-[color:var(--altech-muted)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = "SelectItem";
