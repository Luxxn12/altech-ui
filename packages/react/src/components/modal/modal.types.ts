import type * as DialogPrimitive from "@radix-ui/react-dialog";
import type * as React from "react";

export type ModalProps = DialogPrimitive.DialogProps;
export type ModalTriggerProps = DialogPrimitive.DialogTriggerProps;
export type ModalPortalProps = DialogPrimitive.DialogPortalProps;
export type ModalCloseProps = DialogPrimitive.DialogCloseProps;
export interface ModalOverlayProps {
  className?: string;
}
export interface ModalContentProps {
  className?: string;
  children?: React.ReactNode;
}
export type ModalTitleProps = DialogPrimitive.DialogTitleProps;
export type ModalDescriptionProps = DialogPrimitive.DialogDescriptionProps;
