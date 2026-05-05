import { cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "../../utils/cn";
import type { AlertProps } from "./alert.types";

const alertVariants = cva("w-full rounded-[var(--altech-radius,10px)] border px-4 py-3 text-sm", {
  variants: {
    variant: {
      default: "border-[color:var(--altech-border)] bg-[color:var(--altech-muted)]/35 text-[color:var(--altech-foreground)]",
      success: "border-[color:color-mix(in_oklab,var(--altech-success)_45%,transparent)] bg-[color:color-mix(in_oklab,var(--altech-success)_10%,transparent)] text-[color:var(--altech-success)]",
      warning: "border-[color:color-mix(in_oklab,var(--altech-warning)_45%,transparent)] bg-[color:color-mix(in_oklab,var(--altech-warning)_10%,transparent)] text-[color:var(--altech-warning)]",
      danger: "border-[color:color-mix(in_oklab,var(--altech-danger)_45%,transparent)] bg-[color:color-mix(in_oklab,var(--altech-danger)_10%,transparent)] text-[color:var(--altech-danger)]"
    }
  },
  defaultVariants: { variant: "default" }
});

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, title, description, children, ...props }, ref) => (
    <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props}>
      {title ? <p className="font-semibold">{title}</p> : null}
      {description ? <p className={cn(title ? "mt-1 opacity-90" : "opacity-90")}>{description}</p> : null}
      {children}
    </div>
  )
);

Alert.displayName = "Alert";
