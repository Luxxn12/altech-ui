"use client";

import type { PageMapItem } from "nextra";
import Link from "next/link";
import { useMemo, useState } from "react";

type SearchItem = {
  title: string;
  route: string;
};

function prettify(name: string) {
  if (name === "index") return "Overview";
  return name
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function flattenPageMap(items: PageMapItem[], acc: SearchItem[] = []): SearchItem[] {
  for (const item of items) {
    if ("children" in item) {
      flattenPageMap(item.children, acc);
      continue;
    }

    if ("route" in item && "name" in item) {
      const route = item.route;
      if (!route.startsWith("/docs")) continue;
      if (route === "/docs/_meta") continue;

      acc.push({
        title: prettify(item.name),
        route
      });
    }
  }

  return acc;
}

export function DocsSearch({ pageMap }: { pageMap: PageMapItem[] }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const items = useMemo(() => flattenPageMap(pageMap), [pageMap]);
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items.slice(0, 8);
    return items.filter((item) => item.title.toLowerCase().includes(q)).slice(0, 10);
  }, [items, query]);

  return (
    <div className="relative w-full">
      <input
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onFocus={() => setOpen(true)}
        onBlur={() => setTimeout(() => setOpen(false), 120)}
        placeholder="Search documentation..."
        className="h-10 w-full rounded-lg border border-black/10 bg-black/[.04] px-3 text-sm outline-none transition focus:border-blue-500 dark:border-white/15 dark:bg-white/5"
      />
      {open ? (
        <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-40 overflow-hidden rounded-xl border border-black/10 bg-white shadow-xl dark:border-white/15 dark:bg-neutral-900">
          {filtered.length > 0 ? (
            <ul className="max-h-80 overflow-auto py-1">
              {filtered.map((item) => (
                <li key={item.route}>
                  <Link
                    href={item.route}
                    className="block px-3 py-2 text-sm text-black hover:bg-black/[.05] dark:text-white dark:hover:bg-white/10"
                    onClick={() => setQuery("")}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="px-3 py-2 text-sm text-neutral-500">No results found.</p>
          )}
        </div>
      ) : null}
    </div>
  );
}
