import type * as DialogPrimitive from "@radix-ui/react-dialog";
import type * as React from "react";

export type ModalProps = DialogPrimitive.DialogProps;
export type ModalTriggerProps = DialogPrimitive.DialogTriggerProps;
export type ModalPortalProps = DialogPrimitive.DialogPortalProps;
export type ModalCloseProps = DialogPrimitive.DialogCloseProps;
export type ModalOverlayProps = DialogPrimitive.DialogOverlayProps;
export interface ModalContentProps extends DialogPrimitive.DialogContentProps {
  variant?: "default" | "elevated" | "danger" | "success";
  size?: "sm" | "md" | "lg" | "xl";
}
export type ModalTitleProps = DialogPrimitive.DialogTitleProps;
export type ModalDescriptionProps = DialogPrimitive.DialogDescriptionProps;
