import type * as React from "react";

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  fallback?: React.ReactNode;
  variant?: "circle" | "rounded" | "square";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}
