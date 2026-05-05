"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
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
  ({ className }, ref) => {
    const prefersReducedMotion = useReducedMotion();

    return (
      <DialogPrimitive.Overlay asChild forceMount>
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
  ({ className, children }, ref) => {
    const prefersReducedMotion = useReducedMotion();

    return (
      <ModalPortal forceMount>
        <AnimatePresence>
          <ModalOverlay />
          <DialogPrimitive.Content asChild forceMount>
            <motion.div
              ref={ref}
              className={cn(
                "fixed left-1/2 top-1/2 z-50 w-[min(92vw,32rem)] -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-[color:var(--altech-border)] bg-[color:var(--altech-background)] p-6 shadow-2xl outline-none",
                className,
              )}
              initial={{ opacity: 0, scale: 0.95, y: 14 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.22, ease: "easeOut" }}
            >
              {children}
            </motion.div>
          </DialogPrimitive.Content>
        </AnimatePresence>
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
