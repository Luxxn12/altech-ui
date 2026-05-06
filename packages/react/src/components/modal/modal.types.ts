import type * as DialogPrimitive from "@radix-ui/react-dialog";
import type * as React from "react";

export type ModalProps = DialogPrimitive.DialogProps;
export type ModalTriggerProps = DialogPrimitive.DialogTriggerProps;
export type ModalPortalProps = DialogPrimitive.DialogPortalProps;
export type ModalCloseProps = DialogPrimitive.DialogCloseProps;
export interface ModalOverlayProps extends DialogPrimitive.DialogOverlayProps {
  backdrop?: "default" | "blur" | "transparent" | "dark";
}
export interface ModalContentProps extends DialogPrimitive.DialogContentProps {
  variant?: "default" | "elevated" | "danger" | "success";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "cover" | "full";
  placement?: "center" | "top" | "bottom" | "left" | "right";
  backdrop?: "default" | "blur" | "transparent" | "dark";
}
export type ModalTitleProps = DialogPrimitive.DialogTitleProps;
export type ModalDescriptionProps = DialogPrimitive.DialogDescriptionProps;
