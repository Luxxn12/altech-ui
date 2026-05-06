"use client";

import * as React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@altech-ui/react";

export function TableDemo() {
  return (
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
  );
}

export function TablePlayground() {
  const [loading, setLoading] = React.useState(false);
  const [radiusPx, setRadiusPx] = React.useState(10);
  const [rows, setRows] = React.useState(3);
  const snippet = `<div style={{ "--altech-radius": "${radiusPx}px" } as React.CSSProperties><Table>...</Table></div>`;
  const names = ["Lukman", "Hana", "Ari", "Nina", "Rio"];

  return (
    <div className="overflow-hidden rounded-2xl border border-black/10 bg-white dark:border-white/15 dark:bg-white/5">
      <div className="grid min-h-[420px] grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div
          className="border-b border-black/10 p-6 lg:border-b-0 lg:border-r dark:border-white/15"
          style={{ "--altech-radius": `${radiusPx}px` } as React.CSSProperties}
        >
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody isLoading={loading} loadingRows={rows}>
              {Array.from({ length: rows }).map((_, i) => (
                <TableRow key={i}>
                  <TableCell>{names[i] ?? `User ${i + 1}`}</TableCell>
                  <TableCell>user{i + 1}@example.com</TableCell>
                  <TableCell>{i % 2 ? "Editor" : "Admin"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="space-y-3 p-5">
          <label className="inline-flex items-center gap-2 text-sm">
            <input type="checkbox" checked={loading} onChange={(e) => setLoading(e.target.checked)} />isLoading
          </label>
          <label className="grid gap-1 text-sm">
            <span>Rows ({rows})</span>
            <input type="range" min={2} max={5} value={rows} onChange={(e) => setRows(Number(e.target.value))} />
          </label>
          <label className="grid gap-1 text-sm">
            <span>Radius ({radiusPx}px)</span>
            <input type="range" min={0} max={24} value={radiusPx} onChange={(e) => setRadiusPx(Number(e.target.value))} />
          </label>
          <pre className="overflow-x-auto rounded-lg border border-black/10 bg-black/[.03] p-3 text-xs"><code>{snippet}</code></pre>
        </div>
      </div>
    </div>
  );
}
