"use client";

import * as React from "react";

export function DarkModeToggle() {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    const root = document.documentElement;
    const saved = window.localStorage.getItem("altech-theme");
    const shouldDark =
      saved === "dark" ||
      (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches);

    root.classList.toggle("dark", shouldDark);
    root.dataset.theme = shouldDark ? "dark" : "light";
    setIsDark(shouldDark);
  }, []);

  const toggle = () => {
    const next = !isDark;
    const root = document.documentElement;
    root.classList.toggle("dark", next);
    root.dataset.theme = next ? "dark" : "light";
    window.localStorage.setItem("altech-theme", next ? "dark" : "light");
    setIsDark(next);
  };

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      onClick={toggle}
      className="inline-flex h-9 items-center rounded-xl border border-[color:var(--altech-border)] bg-[color:var(--docs-panel-strong)] px-3 text-xs font-medium text-[color:var(--altech-foreground)] transition duration-200 hover:scale-[1.02] hover:shadow-md active:scale-[0.98]"
    >
      {isDark ? "Dark" : "Light"}
    </button>
  );
}
