"use client";

import { cva } from "class-variance-authority";
import { motion, useReducedMotion } from "framer-motion";
import * as React from "react";

import { cn } from "../../utils/cn";
import type { ButtonProps } from "./button.types";

export const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--altech-radius,10px)] font-medium outline-none transition-[transform,box-shadow,background-color,color,opacity] duration-200 ease-out focus-visible:ring-2 focus-visible:ring-[color:var(--altech-primary)] focus-visible:ring-offset-2 ring-offset-[color:var(--altech-background)] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[color:var(--altech-muted)] text-[color:var(--altech-foreground)] shadow-sm hover:shadow-md",
        primary:
          "bg-[color:var(--altech-primary)] text-[color:var(--altech-primary-foreground)] shadow-sm hover:shadow-lg",
        secondary:
          "bg-[color:var(--altech-foreground)] text-[color:var(--altech-background)] shadow-sm hover:shadow-lg",
        outline:
          "border bg-transparent text-[color:var(--altech-foreground)] hover:bg-[color:var(--altech-muted)]",
        ghost: "bg-transparent text-[color:var(--altech-foreground)] hover:bg-[color:var(--altech-muted)]",
        danger:
          "bg-[color:var(--altech-danger)] text-white shadow-sm hover:shadow-lg"
      },
      size: {
        sm: "h-9 px-3 text-xs",
        md: "h-11 px-4 text-sm",
        lg: "h-12 px-6 text-base",
        icon: "size-11 p-0"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  },
);

type Ripple = {
  id: number;
  x: number;
  y: number;
  size: number;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      loading,
      isLoading,
      loadingText,
      fullWidth,
      startIcon,
      endIcon,
      disabled,
      children,
      onClick,
      ...props
    },
    ref,
  ) => {
    const [ripples, setRipples] = React.useState<Ripple[]>([]);
    const prefersReducedMotion = useReducedMotion();

    const createRipple = React.useCallback(
      (event: React.MouseEvent<HTMLButtonElement>) => {
        if (prefersReducedMotion) {
          return;
        }

        const button = event.currentTarget;
        const rect = button.getBoundingClientRect();
        const sizeValue = Math.max(rect.width, rect.height);

        const ripple: Ripple = {
          id: Date.now() + Math.random(),
          x: event.clientX - rect.left - sizeValue / 2,
          y: event.clientY - rect.top - sizeValue / 2,
          size: sizeValue
        };

        setRipples((prev) => [...prev, ripple]);

        window.setTimeout(() => {
          setRipples((prev) => prev.filter((current) => current.id !== ripple.id));
        }, 450);
      },
      [prefersReducedMotion],
    );

    const isBusy = loading ?? isLoading ?? false;
    const isDisabled = disabled || isBusy;

    return (
      <motion.div
        className={cn("inline-flex", fullWidth && "w-full")}
        whileHover={!isDisabled && !prefersReducedMotion ? { scale: 1.02, y: -1 } : undefined}
        whileTap={!isDisabled && !prefersReducedMotion ? { scale: 0.97, y: 0 } : undefined}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <button
          ref={ref}
          type="button"
          className={cn(buttonVariants({ variant, size }), fullWidth && "w-full", className)}
          disabled={isDisabled}
          aria-busy={isBusy}
          onClick={(event) => {
            createRipple(event);
            onClick?.(event);
          }}
          {...props}
        >
          <span className="relative z-10 inline-flex items-center gap-2">
            {isBusy ? (
              <svg
                className="size-4 animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-90"
                  fill="currentColor"
                  d="M4 12a8 8 0 0 1 8-8v4a4 4 0 0 0-4 4H4z"
                />
              </svg>
            ) : startIcon ? <span aria-hidden="true">{startIcon}</span> : null}
            {isBusy && loadingText ? loadingText : children}
            {endIcon && !isBusy ? <span aria-hidden="true">{endIcon}</span> : null}
          </span>
          <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-[var(--altech-radius,10px)]" aria-hidden="true">
            {ripples.map((ripple) => (
              <motion.span
                key={ripple.id}
                className="absolute rounded-full bg-white/35"
                style={{
                  left: ripple.x,
                  top: ripple.y,
                  width: ripple.size,
                  height: ripple.size
                }}
                initial={{ scale: 0, opacity: 0.6 }}
                animate={{ scale: 1.8, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            ))}
          </span>
        </button>
      </motion.div>
    );
  },
);

Button.displayName = "Button";
