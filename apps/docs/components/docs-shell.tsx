import Link from "next/link";
import type { PropsWithChildren } from "react";

import { DarkModeToggle } from "@/components/dark-mode-toggle";
import { DocsSidebar } from "@/components/docs-sidebar";
import { navGroups } from "@/content/navigation";

export function DocsShell({ children }: PropsWithChildren) {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[1280px] gap-5 px-4 py-4 lg:px-6">
      <div className="hidden w-72 shrink-0 lg:block">
        <DocsSidebar groups={navGroups} />
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-4">
        <header className="docs-shell flex items-center justify-between rounded-3xl border border-[color:var(--altech-border)] px-4 py-3">
          <Link href="/" className="text-sm font-semibold tracking-wide text-[color:var(--altech-foreground)]">
            Altech UI
          </Link>
          <DarkModeToggle />
        </header>
        <main className="altech-card min-h-[70vh] rounded-3xl border border-[color:var(--altech-border)] p-5 shadow-xl lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
