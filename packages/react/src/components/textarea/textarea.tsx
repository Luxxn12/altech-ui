import * as React from "react";

import { cn } from "../../utils/cn";
import type { TextareaProps } from "./textarea.types";

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => (
    <textarea
      ref={ref}
      aria-invalid={Boolean(error)}
      className={cn(
        "min-h-28 w-full rounded-[var(--altech-radius,10px)] border bg-[color:var(--altech-background)] px-4 py-3 text-sm text-[color:var(--altech-foreground)] outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-[color:color-mix(in_oklab,var(--altech-foreground)_55%,transparent)] focus-visible:border-[color:var(--altech-primary)] focus-visible:ring-4 focus-visible:ring-[color:color-mix(in_oklab,var(--altech-primary)_18%,transparent)] disabled:cursor-not-allowed disabled:opacity-55",
        error ? "border-[color:var(--altech-danger)]" : "border-[color:var(--altech-border)]",
        className
      )}
      {...props}
    />
  )
);

Textarea.displayName = "Textarea";
