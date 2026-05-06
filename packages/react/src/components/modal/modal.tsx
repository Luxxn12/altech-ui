"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cva } from "class-variance-authority";
import { motion, useReducedMotion } from "framer-motion";
import * as React from "react";

import { cn } from "../../utils/cn";
import type {
  ModalCloseProps,
  ModalContentProps,
  ModalDescriptionProps,
  ModalOverlayProps,
  ModalPortalProps,
  ModalTitleProps,
  ModalTriggerProps
} from "./modal.types";

export const Modal = DialogPrimitive.Root;

export const ModalTrigger = React.forwardRef<HTMLButtonElement, ModalTriggerProps>(
  ({ className, ...props }, ref) => (
    <DialogPrimitive.Trigger ref={ref} className={className} {...props} />
  ),
);

ModalTrigger.displayName = "ModalTrigger";

export const ModalPortal = ({ children, ...props }: ModalPortalProps) => (
  <DialogPrimitive.Portal {...props}>{children}</DialogPrimitive.Portal>
);

export const ModalOverlay = React.forwardRef<HTMLDivElement, ModalOverlayProps>(
  ({ className, backdrop = "default", ...props }, ref) => {
    const prefersReducedMotion = useReducedMotion();
    const backdropClass =
      backdrop === "blur"
        ? "bg-black/40 backdrop-blur-md"
        : backdrop === "transparent"
          ? "bg-black/20"
          : backdrop === "dark"
            ? "bg-black/60 backdrop-blur-[1px]"
            : "bg-black/45 backdrop-blur-[2px]";

    return (
      <DialogPrimitive.Overlay asChild {...props}>
        <motion.div
          ref={ref}
          className={cn("fixed inset-0 z-50", backdropClass, className)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.18, ease: "easeOut" }}
        />
      </DialogPrimitive.Overlay>
    );
  },
);

ModalOverlay.displayName = "ModalOverlay";

export const ModalContent = React.forwardRef<HTMLDivElement, ModalContentProps>(
  ({ className, children, variant, size, placement, backdrop, ...props }, ref) => {
    const prefersReducedMotion = useReducedMotion();

    return (
      <ModalPortal>
        <ModalOverlay backdrop={backdrop} />
        <DialogPrimitive.Content asChild {...props}>
          <motion.div
            ref={ref}
            className={cn(modalContentVariants({ variant, size, placement }), className)}
            initial={{ opacity: 0, scale: 0.95, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.22, ease: "easeOut" }}
          >
            <DialogPrimitive.Close
              aria-label="Close modal"
              className="absolute right-3 top-3 inline-flex size-8 items-center justify-center rounded-md text-[color:var(--altech-foreground)]/65 transition hover:bg-black/5 hover:text-[color:var(--altech-foreground)] dark:hover:bg-white/10"
            >
              <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </DialogPrimitive.Close>
            {children}
          </motion.div>
        </DialogPrimitive.Content>
      </ModalPortal>
    );
  },
);

ModalContent.displayName = "ModalContent";

export const ModalClose = React.forwardRef<HTMLButtonElement, ModalCloseProps>(
  ({ className, ...props }, ref) => (
    <DialogPrimitive.Close ref={ref} className={className} {...props} />
  ),
);

ModalClose.displayName = "ModalClose";

export const ModalHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("mb-4 flex flex-col gap-1.5", className)} {...props} />
  ),
);

ModalHeader.displayName = "ModalHeader";

export const ModalFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("mt-6 flex justify-end gap-2", className)} {...props} />
  ),
);

ModalFooter.displayName = "ModalFooter";

export const ModalTitle = React.forwardRef<HTMLHeadingElement, ModalTitleProps>(
  ({ className, ...props }, ref) => (
    <DialogPrimitive.Title
      ref={ref}
      className={cn("text-lg font-semibold text-[color:var(--altech-foreground)]", className)}
      {...props}
    />
  ),
);

ModalTitle.displayName = "ModalTitle";

export const ModalDescription = React.forwardRef<HTMLParagraphElement, ModalDescriptionProps>(
  ({ className, ...props }, ref) => (
    <DialogPrimitive.Description
      ref={ref}
      className={cn("text-sm text-[color:var(--altech-foreground)]/75", className)}
      {...props}
    />
  ),
);

ModalDescription.displayName = "ModalDescription";

const modalContentVariants = cva(
  "fixed z-50 rounded-[var(--altech-radius,10px)] border p-6 outline-none",
  {
    variants: {
      variant: {
        default: "border-[color:var(--altech-border)] bg-[color:var(--altech-background)] shadow-2xl",
        elevated: "border-transparent bg-[color:var(--altech-background)] shadow-[0_30px_70px_rgba(7,18,46,0.28)]",
        danger:
          "border-[color:color-mix(in_oklab,var(--altech-danger)_35%,transparent)] bg-[color:color-mix(in_oklab,var(--altech-danger)_7%,var(--altech-background))] shadow-2xl",
        success:
          "border-[color:color-mix(in_oklab,var(--altech-success)_35%,transparent)] bg-[color:color-mix(in_oklab,var(--altech-success)_7%,var(--altech-background))] shadow-2xl"
      },
      size: {
        xs: "w-[min(92vw,20rem)]",
        sm: "w-[min(92vw,24rem)]",
        md: "w-[min(92vw,32rem)]",
        lg: "w-[min(92vw,42rem)]",
        xl: "w-[min(92vw,56rem)]",
        cover: "w-[min(96vw,72rem)] h-[min(92vh,44rem)] overflow-auto",
        full: "inset-0 h-screen w-screen max-w-none rounded-none border-0 overflow-auto"
      },
      placement: {
        center: "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
        top: "left-1/2 top-6 -translate-x-1/2",
        bottom: "bottom-6 left-1/2 -translate-x-1/2",
        left: "left-6 top-1/2 -translate-y-1/2",
        right: "right-6 top-1/2 -translate-y-1/2"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      placement: "center"
    }
  }
);
