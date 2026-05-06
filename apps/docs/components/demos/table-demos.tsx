"use client";

import * as React from "react";
import { Badge, Button, Checkbox, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@altech-ui/react";
import { GeneratedCode } from "@/components/generated-code";

export function TableDemo() {
  return (
    <div className="pt-3 mx-auto max-w-4xl">
      <Table variant="striped" density="md">
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
    </div>
  );
}

export function TablePlayground() {
  const [loading, setLoading] = React.useState(false);
  const [radiusPx, setRadiusPx] = React.useState(10);
  const [rows, setRows] = React.useState(3);
  const [variant, setVariant] = React.useState<"default" | "striped" | "bordered" | "minimal">("default");
  const [density, setDensity] = React.useState<"sm" | "md" | "lg">("md");
  const snippet = `import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@altech-ui/react";

export function Example() {
  return (
    <div style={{ "--altech-radius": "${radiusPx}px" } as React.CSSProperties}>
      <Table variant="${variant}" density="${density}">
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody ${loading ? `isLoading loadingRows={${rows}}` : ""}>
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
    </div>
  );
}`;
  const names = ["Lukman", "Hana", "Ari", "Nina", "Rio"];

  return (
    <div className="playground-panel overflow-hidden rounded-2xl border border-black/15 bg-white dark:border-white/25 dark:bg-white/5">
      <div className="grid min-h-[420px] grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div
          className="border-b border-black/10 p-6 lg:border-b-0 lg:border-r dark:border-white/15"
          style={{ "--altech-radius": `${radiusPx}px` } as React.CSSProperties}
        >
          <Table variant={variant} density={density}>
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
          <select value={variant} onChange={(e) => setVariant(e.target.value as typeof variant)} className="h-10 w-full rounded-lg border border-black/15 px-3 text-sm">
            <option value="default">default</option><option value="striped">striped</option><option value="bordered">bordered</option><option value="minimal">minimal</option>
          </select>
          <select value={density} onChange={(e) => setDensity(e.target.value as typeof density)} className="h-10 w-full rounded-lg border border-black/15 px-3 text-sm">
            <option value="sm">sm</option><option value="md">md</option><option value="lg">lg</option>
          </select>
          <label className="grid gap-1 text-sm">
            <span>Radius ({radiusPx}px)</span>
            <input type="range" min={0} max={24} value={radiusPx} onChange={(e) => setRadiusPx(Number(e.target.value))} />
          </label>
          <GeneratedCode code={snippet} />
        </div>
      </div>
    </div>
  );
}

export function TableStripedUsersDemo() {
  const rows = [
    { name: "Lukman", email: "lukman@example.com", role: "Admin", status: "Active" },
    { name: "Hana", email: "hana@example.com", role: "Editor", status: "Invited" },
    { name: "Ari", email: "ari@example.com", role: "Viewer", status: "Active" }
  ];

  return (
    <div className="pt-3 mx-auto max-w-5xl">
      <Table variant="striped" density="md">
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.email}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.role}</TableCell>
              <TableCell>
                <Badge variant={row.status === "Active" ? "success" : "warning"}>{row.status}</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export function TableBorderedPricingDemo() {
  return (
    <div className="pt-3 mx-auto max-w-5xl">
      <Table variant="bordered" density="sm">
        <TableHeader>
          <TableRow>
            <TableHead>Plan</TableHead>
            <TableHead>Projects</TableHead>
            <TableHead>Storage</TableHead>
            <TableHead>Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow><TableCell>Starter</TableCell><TableCell>3</TableCell><TableCell>10 GB</TableCell><TableCell>$12/mo</TableCell></TableRow>
          <TableRow><TableCell>Pro</TableCell><TableCell>Unlimited</TableCell><TableCell>100 GB</TableCell><TableCell>$24/mo</TableCell></TableRow>
          <TableRow><TableCell>Enterprise</TableCell><TableCell>Unlimited</TableCell><TableCell>1 TB</TableCell><TableCell>$99/mo</TableCell></TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export function TableLoadingDemo() {
  return (
    <div className="pt-3 mx-auto max-w-5xl">
      <Table variant="default" density="md">
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody isLoading loadingRows={4} loadingColumns={4} />
      </Table>
    </div>
  );
}

export function TableMinimalActivityDemo() {
  return (
    <div className="pt-3 mx-auto max-w-5xl">
      <Table variant="minimal" density="lg">
        <TableHeader>
          <TableRow>
            <TableHead>Event</TableHead>
            <TableHead>User</TableHead>
            <TableHead>When</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow><TableCell>Created API key</TableCell><TableCell>Lukman</TableCell><TableCell>2 min ago</TableCell></TableRow>
          <TableRow><TableCell>Updated billing email</TableCell><TableCell>Hana</TableCell><TableCell>10 min ago</TableCell></TableRow>
          <TableRow><TableCell>Invited teammate</TableCell><TableCell>Ari</TableCell><TableCell>1 hour ago</TableCell></TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export function TablePaginationDemo() {
  const rows = [
    { id: "INV-3021", customer: "Acme Co", total: "$1,240.00" },
    { id: "INV-3022", customer: "Nexa Studio", total: "$340.00" },
    { id: "INV-3023", customer: "Orbit Labs", total: "$2,980.00" }
  ];

  return (
    <div className="pt-3 mx-auto max-w-5xl space-y-3">
      <Table variant="default" density="md">
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.customer}</TableCell>
              <TableCell>{row.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex items-center justify-between rounded-xl border border-black/10 px-3 py-2 text-sm dark:border-white/20">
        <p>Showing 1-3 of 42 invoices</p>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">Previous</Button>
          <Button variant="outline" size="sm">Next</Button>
        </div>
      </div>
    </div>
  );
}

export function TableSelectableRowsDemo() {
  const rows = [
    { id: "u_01", name: "Lukman", email: "lukman@example.com" },
    { id: "u_02", name: "Hana", email: "hana@example.com" },
    { id: "u_03", name: "Ari", email: "ari@example.com" }
  ];
  const [selected, setSelected] = React.useState<string[]>(["u_02"]);

  const toggle = (id: string) => {
    setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  return (
    <div className="pt-3 mx-auto max-w-5xl">
      <Table variant="default" density="md">
        <TableHeader>
          <TableRow>
            <TableHead>Select</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id} className={selected.includes(row.id) ? "bg-black/[0.03] dark:bg-white/[0.08]" : ""}>
              <TableCell>
                <Checkbox checked={selected.includes(row.id)} onCheckedChange={() => toggle(row.id)} />
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
