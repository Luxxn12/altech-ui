"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@altech-ui/react";

import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { snippets } from "@/content/snippets";

export default function TableDocPage() {
  return (
    <article className="space-y-6">
      <h1 className="text-3xl font-semibold">Table</h1>
      <ComponentPreview>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Lukman</TableCell>
              <TableCell>lukman@example.com</TableCell>
              <TableCell>Admin</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Hana</TableCell>
              <TableCell>hana@example.com</TableCell>
              <TableCell>Editor</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </ComponentPreview>
      <CodeBlock code={snippets.table} />
    </article>
  );
}
