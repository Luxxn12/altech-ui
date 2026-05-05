import * as React from "react";

import { cn } from "../../utils/cn";
import type { BoxProps, ContainerProps, FlexProps, GridProps, StackProps } from "./layout.types";

export const Box = React.forwardRef<HTMLDivElement, BoxProps>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(className)} {...props} />
));
Box.displayName = "Box";

export const Flex = React.forwardRef<HTMLDivElement, FlexProps>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex", className)} {...props} />
));
Flex.displayName = "Flex";

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("grid", className)} {...props} />
));
Grid.displayName = "Grid";

export const Stack = React.forwardRef<HTMLDivElement, StackProps>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col", className)} {...props} />
));
Stack.displayName = "Stack";

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)} {...props} />
));
Container.displayName = "Container";
