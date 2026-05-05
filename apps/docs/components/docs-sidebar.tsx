"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

import type { NavGroup } from "@/content/navigation";

type DocsSidebarProps = {
  groups: NavGroup[];
};

export function DocsSidebar({ groups }: DocsSidebarProps) {
  const pathname = usePathname();
  const [query, setQuery] = React.useState("");

  const normalizedQuery = query.trim().toLowerCase();

  return (
    <aside className="docs-shell sticky top-4 h-[calc(100vh-2rem)] overflow-y-auto rounded-3xl border border-[color:var(--altech-border)] p-4">
      <div className="mb-4">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search component..."
          className="h-10 w-full rounded-xl border border-[color:var(--altech-border)] bg-[color:var(--docs-panel-strong)] px-3 text-sm outline-none transition focus-visible:border-[color:var(--altech-primary)]"
        />
      </div>
      <nav className="space-y-5">
        {groups.map((group) => {
          const items = group.items.filter((item) =>
            normalizedQuery ? item.title.toLowerCase().includes(normalizedQuery) : true,
          );

          if (!items.length) return null;

          return (
            <div key={group.title} className="space-y-2">
              <p className="px-2 text-xs font-semibold uppercase tracking-wide text-[color:var(--altech-foreground)]/60">
                {group.title}
              </p>
              <div className="space-y-1">
                {items.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={
                        active
                          ? "block rounded-xl bg-[color:var(--altech-primary)] px-3 py-2 text-sm font-medium text-[color:var(--altech-primary-foreground)]"
                          : "block rounded-xl px-3 py-2 text-sm text-[color:var(--altech-foreground)] transition hover:bg-[color:var(--altech-muted)]"
                      }
                    >
                      {item.title}
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
