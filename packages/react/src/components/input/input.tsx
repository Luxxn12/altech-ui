"use client";

import { cva } from "class-variance-authority";
import { motion, useReducedMotion } from "framer-motion";
import * as React from "react";

import { cn } from "../../utils/cn";
import type { InputProps } from "./input.types";

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      label,
      error,
      helperText,
      isDisabled,
      id,
      wrapperClassName,
      variant,
      uiSize,
      fullWidth = true,
      ...props
    },
    ref,
  ) => {
    const autoId = React.useId();
    const inputId = id ?? autoId;
    const descriptionId = `${inputId}-description`;
    const prefersReducedMotion = useReducedMotion();

    const message = error ?? helperText;

    return (
      <motion.div
        className={cn(fullWidth ? "w-full space-y-1.5" : "space-y-1.5", wrapperClassName)}
        animate={
          error && !prefersReducedMotion
            ? { x: [0, -4, 4, -2, 2, 0] }
            : { x: 0 }
        }
        transition={{ duration: 0.24, ease: "easeOut" }}
      >
        {label ? (
          <label
            className="text-sm font-medium text-[color:var(--altech-foreground)]"
            htmlFor={inputId}
          >
            {label}
          </label>
        ) : null}
        <input
          ref={ref}
          id={inputId}
          disabled={isDisabled}
          aria-invalid={Boolean(error)}
          aria-describedby={message ? descriptionId : undefined}
          className={cn(
            inputVariants({ variant, size: uiSize, hasError: Boolean(error), fullWidth }),
            className,
          )}
          {...props}
        />
        {message ? (
          <p
            id={descriptionId}
            className={cn(
              "text-xs",
              error ? "text-[color:var(--altech-danger)]" : "text-[color:var(--altech-foreground)]/70",
            )}
          >
            {message}
          </p>
        ) : null}
      </motion.div>
    );
  },
);

Input.displayName = "Input";

const inputVariants = cva(
  "rounded-[var(--altech-radius,10px)] text-[color:var(--altech-foreground)] outline-none transition-[border-color,box-shadow,background-color,color] duration-200 ease-out placeholder:text-[color:color-mix(in_oklab,var(--altech-foreground)_55%,transparent)] disabled:cursor-not-allowed disabled:opacity-55",
  {
    variants: {
      variant: {
        default:
          "border bg-[color:var(--altech-background)] focus-visible:border-[color:var(--altech-primary)] focus-visible:ring-4 focus-visible:ring-[color:color-mix(in_oklab,var(--altech-primary)_18%,transparent)]",
        filled:
          "border border-transparent bg-[color:var(--altech-muted)]/55 focus-visible:border-[color:var(--altech-primary)] focus-visible:ring-4 focus-visible:ring-[color:color-mix(in_oklab,var(--altech-primary)_16%,transparent)]",
        flushed:
          "rounded-none border-0 border-b bg-transparent px-0 focus-visible:border-b-[color:var(--altech-primary)] focus-visible:ring-0",
        ghost:
          "border border-transparent bg-transparent focus-visible:border-[color:var(--altech-primary)] focus-visible:ring-4 focus-visible:ring-[color:color-mix(in_oklab,var(--altech-primary)_14%,transparent)]"
      },
      size: {
        sm: "h-9 px-3 text-xs",
        md: "h-11 px-4 text-sm",
        lg: "h-12 px-4 text-base"
      },
      hasError: {
        true: "border-[color:var(--altech-danger)] focus-visible:border-[color:var(--altech-danger)] focus-visible:ring-[color:color-mix(in_oklab,var(--altech-danger)_18%,transparent)]",
        false: "border-[color:var(--altech-border)]"
      },
      fullWidth: {
        true: "w-full",
        false: "w-auto"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      hasError: false,
      fullWidth: true
    }
  }
);
