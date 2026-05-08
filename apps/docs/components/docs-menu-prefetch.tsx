"use client";

import type { PageMapItem } from "nextra";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo } from "react";

const VISITED_KEY = "altech_docs_seen_v1";
const PREFETCH_STEP_DELAY_MS = 60;
const PREFETCH_IDLE_TIMEOUT_MS = 1200;

function flattenDocRoutes(items: PageMapItem[], acc: string[] = []): string[] {
  for (const item of items) {
    if ("children" in item) {
      flattenDocRoutes(item.children, acc);
      continue;
    }

    if (!("route" in item)) continue;
    const route = item.route;
    if (!route.startsWith("/docs")) continue;
    if (route === "/docs/_meta") continue;
    acc.push(route);
  }

  return acc;
}

export function DocsMenuPrefetch({ pageMap }: { pageMap: PageMapItem[] }) {
  const router = useRouter();
  const pathname = usePathname();

  const routes = useMemo(() => {
    const list = flattenDocRoutes(pageMap);
    return [...new Set(list)];
  }, [pageMap]);

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    if (typeof window === "undefined") return;

    const queue = routes.filter((route) => route !== pathname);
    if (queue.length === 0) return;

    let cancelled = false;

    const prefetchQueue = () => {
      let index = 0;
      const step = () => {
        if (cancelled || index >= queue.length) return;
        router.prefetch(queue[index]);
        index += 1;
        globalThis.setTimeout(step, PREFETCH_STEP_DELAY_MS);
      };
      step();
    };

    // Mark visitor as "seen" so next visits can assume warm-navigation behavior.
    try {
      localStorage.setItem(VISITED_KEY, "1");
    } catch {
      // ignore storage restriction
    }

    if (typeof window.requestIdleCallback === "function") {
      const idleId = window.requestIdleCallback(prefetchQueue, {
        timeout: PREFETCH_IDLE_TIMEOUT_MS
      });

      return () => {
        cancelled = true;
        window.cancelIdleCallback(idleId);
      };
    }

    const timer = globalThis.setTimeout(prefetchQueue, 200);
    return () => {
      cancelled = true;
      globalThis.clearTimeout(timer);
    };
  }, [pathname, router, routes]);

  return null;
}
