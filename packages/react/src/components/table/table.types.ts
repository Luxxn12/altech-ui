import type { HTMLAttributes, TableHTMLAttributes, TdHTMLAttributes, ThHTMLAttributes } from "react";

export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  variant?: "default" | "striped" | "bordered" | "minimal";
  density?: "sm" | "md" | "lg";
}

export type TableHeaderProps = HTMLAttributes<HTMLTableSectionElement>;

export interface TableBodyProps extends HTMLAttributes<HTMLTableSectionElement> {
  isLoading?: boolean;
  loadingRows?: number;
  loadingColumns?: number;
}

export type TableRowProps = HTMLAttributes<HTMLTableRowElement>;

export type TableHeadProps = ThHTMLAttributes<HTMLTableCellElement>;

export type TableCellProps = TdHTMLAttributes<HTMLTableCellElement>;
