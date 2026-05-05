import type { HTMLAttributes, TableHTMLAttributes, TdHTMLAttributes, ThHTMLAttributes } from "react";

export type TableProps = TableHTMLAttributes<HTMLTableElement>;

export type TableHeaderProps = HTMLAttributes<HTMLTableSectionElement>;

export interface TableBodyProps extends HTMLAttributes<HTMLTableSectionElement> {
  isLoading?: boolean;
  loadingRows?: number;
  loadingColumns?: number;
}

export type TableRowProps = HTMLAttributes<HTMLTableRowElement>;

export type TableHeadProps = ThHTMLAttributes<HTMLTableCellElement>;

export type TableCellProps = TdHTMLAttributes<HTMLTableCellElement>;
