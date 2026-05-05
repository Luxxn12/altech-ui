"use client";

import * as React from "react";

import { cn } from "../../utils/cn";
import type {
  TableBodyProps,
  TableCellProps,
  TableHeadProps,
  TableHeaderProps,
  TableProps,
  TableRowProps
} from "./table.types";

export const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ className, ...props }, ref) => (
    <div className="w-full overflow-x-auto rounded-2xl border border-[color:var(--altech-border)]">
      <table
        ref={ref}
        className={cn("w-full caption-bottom text-sm", className)}
        {...props}
      />
    </div>
  ),
);

Table.displayName = "Table";

export const TableHeader = React.forwardRef<HTMLTableSectionElement, TableHeaderProps>(
  ({ className, ...props }, ref) => (
    <thead
      ref={ref}
      className={cn("bg-[color:color-mix(in_oklab,var(--altech-muted)_70%,transparent)]", className)}
      {...props}
    />
  ),
);

TableHeader.displayName = "TableHeader";

export const TableBody = React.forwardRef<HTMLTableSectionElement, TableBodyProps>(
  (
    {
      className,
      isLoading,
      loadingRows = 3,
      loadingColumns = 3,
      children,
      ...props
    },
    ref,
  ) => (
    <tbody ref={ref} className={cn("[&_tr:last-child]:border-0", className)} {...props}>
      {isLoading
        ? Array.from({ length: loadingRows }).map((_, rowIndex) => (
            <tr
              key={`skeleton-row-${rowIndex}`}
              className="border-b border-[color:var(--altech-border)]"
            >
              {Array.from({ length: loadingColumns }).map((__, colIndex) => (
                <td key={`skeleton-cell-${rowIndex}-${colIndex}`} className="p-4">
                  <div className="h-4 w-full animate-pulse rounded bg-[color:var(--altech-muted)]" />
                </td>
              ))}
            </tr>
          ))
        : children}
    </tbody>
  ),
);

TableBody.displayName = "TableBody";

export const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ className, ...props }, ref) => (
    <tr
      ref={ref}
      className={cn(
        "border-b border-[color:var(--altech-border)] transition-colors duration-200 ease-out hover:bg-[color:color-mix(in_oklab,var(--altech-muted)_70%,transparent)]",
        className,
      )}
      {...props}
    />
  ),
);

TableRow.displayName = "TableRow";

export const TableHead = React.forwardRef<HTMLTableCellElement, TableHeadProps>(
  ({ className, ...props }, ref) => (
    <th
      ref={ref}
      className={cn(
        "h-12 px-4 text-left align-middle text-xs font-semibold uppercase tracking-wide text-[color:var(--altech-foreground)]/80",
        className,
      )}
      {...props}
    />
  ),
);

TableHead.displayName = "TableHead";

export const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ className, ...props }, ref) => (
    <td ref={ref} className={cn("p-4 align-middle", className)} {...props} />
  ),
);

TableCell.displayName = "TableCell";
