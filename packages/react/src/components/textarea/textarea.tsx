import { cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "../../utils/cn";
import type { TextareaProps } from "./textarea.types";

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, variant, size, fullWidth = true, ...props }, ref) => (
    <textarea
      ref={ref}
      aria-invalid={Boolean(error)}
      className={cn(
        textareaVariants({ variant, size, hasError: Boolean(error), fullWidth }),
        className
      )}
      {...props}
    />
  )
);

Textarea.displayName = "Textarea";

const textareaVariants = cva(
  "rounded-[var(--altech-radius,10px)] text-[color:var(--altech-foreground)] outline-none transition-[border-color,box-shadow,background-color,color] duration-200 placeholder:text-[color:color-mix(in_oklab,var(--altech-foreground)_55%,transparent)] disabled:cursor-not-allowed disabled:opacity-55",
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
        sm: "min-h-20 px-3 py-2 text-xs",
        md: "min-h-28 px-4 py-3 text-sm",
        lg: "min-h-36 px-4 py-3 text-base"
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
