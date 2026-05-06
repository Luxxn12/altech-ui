"use client";

import { cva } from "class-variance-authority";
import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "../../utils/cn";
import type { TabsContentProps, TabsListProps, TabsTriggerProps } from "./tabs.types";

export const Tabs = TabsPrimitive.Root;

export const TabsList = React.forwardRef<React.ElementRef<typeof TabsPrimitive.List>, TabsListProps>(
  ({ className, variant, size, ...props }, ref) => (
    <TabsPrimitive.List
      ref={ref}
      className={cn(tabsListVariants({ variant, size }), className)}
      {...props}
    />
  )
);
TabsList.displayName = "TabsList";

export const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(({ className, variant, size, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(tabsTriggerVariants({ variant, size }), className)}
    {...props}
  />
));
TabsTrigger.displayName = "TabsTrigger";

export const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  TabsContentProps
>(({ className, spacing, ...props }, ref) => (
  <TabsPrimitive.Content ref={ref} className={cn(tabsContentVariants({ spacing }), className)} {...props} />
));
TabsContent.displayName = "TabsContent";

const tabsListVariants = cva("inline-flex items-center gap-1 p-1", {
  variants: {
    variant: {
      pills: "rounded-[var(--altech-radius,10px)] bg-[color:var(--altech-muted)]",
      line: "rounded-none border-b border-[color:var(--altech-border)] bg-transparent p-0",
      boxed: "rounded-[var(--altech-radius,10px)] border border-[color:var(--altech-border)] bg-[color:var(--altech-background)]"
    },
    size: {
      sm: "h-9",
      md: "h-11",
      lg: "h-12"
    }
  },
  defaultVariants: {
    variant: "pills",
    size: "md"
  }
});

const tabsTriggerVariants = cva("inline-flex items-center justify-center font-medium transition", {
  variants: {
    variant: {
      pills:
        "rounded-[calc(var(--altech-radius,10px)-2px)] text-[color:var(--altech-foreground)]/70 data-[state=active]:bg-[color:var(--altech-background)] data-[state=active]:text-[color:var(--altech-foreground)] data-[state=active]:shadow-sm",
      line:
        "rounded-none border-b-2 border-transparent text-[color:var(--altech-foreground)]/70 data-[state=active]:border-[color:var(--altech-primary)] data-[state=active]:text-[color:var(--altech-primary)]",
      boxed:
        "rounded-[calc(var(--altech-radius,10px)-3px)] text-[color:var(--altech-foreground)]/75 data-[state=active]:bg-[color:var(--altech-muted)] data-[state=active]:text-[color:var(--altech-foreground)]"
    },
    size: {
      sm: "h-7 px-2.5 text-xs",
      md: "h-9 px-3 text-sm",
      lg: "h-10 px-4 text-base"
    }
  },
  defaultVariants: {
    variant: "pills",
    size: "md"
  }
});

const tabsContentVariants = cva("", {
  variants: {
    spacing: {
      sm: "mt-2",
      md: "mt-3",
      lg: "mt-5"
    }
  },
  defaultVariants: {
    spacing: "md"
  }
});
