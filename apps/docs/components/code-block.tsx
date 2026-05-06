"use client";

import * as React from "react";

type CodeBlockProps = React.HTMLAttributes<HTMLPreElement> & {
  children?: React.ReactNode;
};

const COLLAPSED_MAX_HEIGHT = 220;

function getCodeText(node: React.ReactNode): string {
  if (!node) return "";
  if (typeof node === "string") return node;
  if (typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(getCodeText).join("");
  if (React.isValidElement<{ children?: React.ReactNode }>(node)) {
    return getCodeText(node.props.children);
  }
  return "";
}

function hasSyntaxClass(node: React.ReactNode): boolean {
  if (!node) return false;
  if (Array.isArray(node)) return node.some(hasSyntaxClass);
  if (!React.isValidElement<{ className?: string; children?: React.ReactNode }>(node)) return false;

  const className = node.props.className ?? "";
  if (className.includes("shiki") || className.includes("language-")) return true;
  return hasSyntaxClass(node.props.children);
}

export function CodeBlock({ children, className, ...props }: CodeBlockProps) {
  const preRef = React.useRef<HTMLPreElement>(null);
  const [expanded, setExpanded] = React.useState(false);
  const [canExpand, setCanExpand] = React.useState(false);
  const [copied, setCopied] = React.useState(false);
  const [isDark, setIsDark] = React.useState(false);

  const codeText = React.useMemo(() => getCodeText(children), [children]);
  const isSyntaxHighlighted = (className ?? "").includes("shiki") || (className ?? "").includes("language-") || hasSyntaxClass(children);
  const shouldWrap = !isSyntaxHighlighted;

  React.useEffect(() => {
    const pre = preRef.current;
    if (!pre) return;
    const nextCanExpand = pre.scrollHeight > COLLAPSED_MAX_HEIGHT + 12;
    setCanExpand(nextCanExpand);
  }, [children]);

  React.useEffect(() => {
    const root = document.documentElement;
    const readTheme = () => {
      const dataTheme = root.getAttribute("data-theme");
      const hasDarkClass = root.classList.contains("dark");
      setIsDark(dataTheme === "dark" || hasDarkClass);
    };

    readTheme();
    const observer = new MutationObserver(readTheme);
    observer.observe(root, { attributes: true, attributeFilter: ["class", "data-theme"] });
    return () => observer.disconnect();
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeText.trim());
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      // ignore clipboard error in restricted contexts
    }
  };

  return (
    <div
      className="altech-codeblock my-4 overflow-hidden rounded-2xl border shadow-[0_8px_20px_rgba(15,23,42,0.1)]"
      style={{
        background: isDark ? "#1f1f22" : "#ffffff",
        color: isDark ? "#d7dde8" : "#0f172a",
        borderColor: isDark ? "rgba(255,255,255,0.15)" : "rgba(148,163,184,0.9)"
      }}
    >
      <div
        className="flex items-center justify-between border-b px-3 py-2"
        style={{ borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(226,232,240,1)" }}
      >
        <span className="altech-code-label text-[11px] uppercase tracking-wide text-slate-500 dark:text-white/50">Code</span>
        <div className="flex items-center gap-2">
        {canExpand ? (
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className="altech-code-btn rounded-md border border-slate-300 bg-white px-2.5 py-1 text-xs text-slate-700 transition hover:bg-slate-100 dark:border-white/20 dark:bg-white/[0.03] dark:text-white/80 dark:hover:bg-white/[0.08]"
            style={{
              color: isDark ? "rgba(255,255,255,0.85)" : "#111827",
              background: isDark ? "rgba(255,255,255,0.03)" : "#ffffff",
              borderColor: isDark ? "rgba(255,255,255,0.2)" : "#cbd5e1"
            }}
          >
            {expanded ? "Collapse code" : "Expand code"}
          </button>
        ) : null}
        <button
          type="button"
          onClick={handleCopy}
          className="altech-code-btn rounded-md border border-slate-300 bg-white px-2.5 py-1 text-xs text-slate-700 transition hover:bg-slate-100 dark:border-white/20 dark:bg-white/[0.03] dark:text-white/85 dark:hover:bg-white/[0.08]"
          style={{
            color: isDark ? "rgba(255,255,255,0.88)" : "#111827",
            background: isDark ? "rgba(255,255,255,0.03)" : "#ffffff",
            borderColor: isDark ? "rgba(255,255,255,0.2)" : "#cbd5e1"
          }}
        >
          {copied ? "Copied" : "Copy"}
        </button>
        </div>
      </div>

      <div className={canExpand && !expanded ? "relative" : undefined}>
        <pre
          ref={preRef}
          data-code-plain={shouldWrap ? "true" : "false"}
          className={[
            "m-0 p-4 text-[13px] leading-6",
            shouldWrap ? "text-slate-900 dark:text-[#d7dde8] [&_code]:text-slate-900 [&_code]:opacity-100 dark:[&_code]:text-[#d7dde8] dark:[&_code]:opacity-100" : "",
            shouldWrap ? "whitespace-pre-wrap break-words" : "overflow-x-auto whitespace-pre",
            className ?? ""
          ].join(" ").trim()}
          style={{
            ...(canExpand && !expanded ? { maxHeight: `${COLLAPSED_MAX_HEIGHT}px`, overflow: "hidden" } : undefined),
            ...(shouldWrap ? { color: isDark ? "#dbeafe" : "#0f172a" } : undefined)
          }}
          {...props}
        >
          {children}
        </pre>
        {canExpand && !expanded ? (
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-16"
            style={{
              backgroundImage: `linear-gradient(to top, ${isDark ? "#1f1f22" : "#ffffff"} 0%, transparent 100%)`
            }}
          />
        ) : null}
      </div>
    </div>
  );
}
