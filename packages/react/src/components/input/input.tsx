"use client";

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
        className={cn("w-full space-y-1.5", wrapperClassName)}
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
            "h-11 w-full rounded-[var(--altech-radius,10px)] border bg-[color:var(--altech-background)] px-4 text-sm text-[color:var(--altech-foreground)] outline-none transition-[border-color,box-shadow,background-color,color] duration-200 ease-out placeholder:text-[color:color-mix(in_oklab,var(--altech-foreground)_55%,transparent)] focus-visible:border-[color:var(--altech-primary)] focus-visible:ring-4 focus-visible:ring-[color:color-mix(in_oklab,var(--altech-primary)_18%,transparent)] disabled:cursor-not-allowed disabled:opacity-55",
            error
              ? "border-[color:var(--altech-danger)] focus-visible:border-[color:var(--altech-danger)] focus-visible:ring-[color:color-mix(in_oklab,var(--altech-danger)_18%,transparent)]"
              : "border-[color:var(--altech-border)]",
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
