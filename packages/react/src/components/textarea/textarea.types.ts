import type * as React from "react";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
  variant?: "default" | "filled" | "flushed" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}
