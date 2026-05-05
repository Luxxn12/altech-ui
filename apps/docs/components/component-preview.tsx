import type { PropsWithChildren } from "react";

export function ComponentPreview({ children }: PropsWithChildren) {
  return (
    <div className="altech-card rounded-3xl border border-[color:var(--altech-border)] p-6 shadow-xl">
      <div className="rounded-2xl border border-dashed border-[color:var(--altech-border)] bg-[color:var(--altech-background)] p-6">
        {children}
      </div>
    </div>
  );
}
