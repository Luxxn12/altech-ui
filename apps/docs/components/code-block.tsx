"use client";

import * as React from "react";

type CodeBlockProps = {
  code: string;
};

export function CodeBlock({ code }: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border border-[color:var(--altech-border)] bg-slate-950 text-slate-50">
      <button
        type="button"
        onClick={copy}
        className="absolute right-3 top-3 rounded-lg border border-slate-700 bg-slate-900 px-2 py-1 text-[11px] transition hover:bg-slate-800"
      >
        {copied ? "Copied" : "Copy"}
      </button>
      <pre className="overflow-x-auto p-4 text-xs leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
}
