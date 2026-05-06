"use client";

import { cva } from "class-variance-authority";
import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";

import { cn } from "../../utils/cn";
import type { SelectContentProps, SelectItemProps, SelectTriggerProps } from "./select.types";

export const Select = SelectPrimitive.Root;
export const SelectValue = SelectPrimitive.Value;

export const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  SelectTriggerProps
>(({ className, children, variant, size, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(selectTriggerVariants({ variant, size }), className)}
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
>(({ className, variant, ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(selectContentVariants({ variant }), className)}
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

const selectTriggerVariants = cva(
  "flex w-full items-center justify-between text-[color:var(--altech-foreground)] outline-none transition-[border-color,box-shadow,background-color,color] focus-visible:ring-4",
  {
    variants: {
      variant: {
        default:
          "rounded-[var(--altech-radius,10px)] border border-[color:var(--altech-border)] bg-[color:var(--altech-background)] focus-visible:border-[color:var(--altech-primary)] focus-visible:ring-[color:color-mix(in_oklab,var(--altech-primary)_18%,transparent)]",
        filled:
          "rounded-[var(--altech-radius,10px)] border border-transparent bg-[color:var(--altech-muted)]/55 focus-visible:border-[color:var(--altech-primary)] focus-visible:ring-[color:color-mix(in_oklab,var(--altech-primary)_16%,transparent)]",
        ghost:
          "rounded-[var(--altech-radius,10px)] border border-transparent bg-transparent focus-visible:border-[color:var(--altech-primary)] focus-visible:ring-[color:color-mix(in_oklab,var(--altech-primary)_14%,transparent)]",
        flushed:
          "rounded-none border-0 border-b border-[color:var(--altech-border)] bg-transparent px-0 focus-visible:border-b-[color:var(--altech-primary)] focus-visible:ring-0"
      },
      size: {
        sm: "h-9 px-3 text-xs",
        md: "h-11 px-4 text-sm",
        lg: "h-12 px-4 text-base"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
);

const selectContentVariants = cva(
  "z-50 min-w-[var(--radix-select-trigger-width)] overflow-hidden rounded-[var(--altech-radius,10px)] border p-1",
  {
    variants: {
      variant: {
        default: "border-[color:var(--altech-border)] bg-[color:var(--altech-background)] shadow-xl",
        elevated: "border-transparent bg-[color:var(--altech-background)] shadow-2xl",
        soft: "border-[color:var(--altech-border)] bg-[color:var(--altech-muted)]/45 shadow-lg"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
