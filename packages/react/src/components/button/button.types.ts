import type { VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import type * as React from "react";

import type { buttonVariants } from "./button";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  isLoading?: boolean;
  loadingText?: string;
  fullWidth?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}
