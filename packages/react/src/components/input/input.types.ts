import type { InputHTMLAttributes, ReactNode } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  isDisabled?: boolean;
  endAdornment?: ReactNode;
  wrapperClassName?: string;
  variant?: "default" | "filled" | "flushed" | "ghost";
  uiSize?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}
