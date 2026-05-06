import type { VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";

import type { cardContentVariants, cardFooterVariants, cardHeaderVariants, cardVariants } from "./card";

export interface CardProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {}

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardHeaderVariants> {}

export interface CardContentProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardContentVariants> {}

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardFooterVariants> {}
