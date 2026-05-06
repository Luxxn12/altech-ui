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
  ({ className, ...props }, ref) => {
    const prefersReducedMotion = useReducedMotion();

    return (
      <DialogPrimitive.Overlay asChild {...props}>
        <motion.div
          ref={ref}
          className={cn("fixed inset-0 z-50 bg-black/45 backdrop-blur-[2px]", className)}
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
  ({ className, children, variant, size, ...props }, ref) => {
    const prefersReducedMotion = useReducedMotion();

    return (
      <ModalPortal>
        <ModalOverlay />
        <DialogPrimitive.Content asChild {...props}>
          <motion.div
            ref={ref}
            className={cn(modalContentVariants({ variant, size }), className)}
            initial={{ opacity: 0, scale: 0.95, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.22, ease: "easeOut" }}
          >
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
  "fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 rounded-[var(--altech-radius,10px)] border p-6 outline-none",
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
        sm: "w-[min(92vw,24rem)]",
        md: "w-[min(92vw,32rem)]",
        lg: "w-[min(92vw,42rem)]",
        xl: "w-[min(92vw,56rem)]"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
);
