"use client";

import * as React from "react";
import { CodeBlock } from "@/components/code-block";

type GeneratedCodeProps = {
  code: string;
};

function renderHighlightedSnippet(source: string, isDark: boolean) {
  const tokenPattern =
    /("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`|\b(?:import|from|export|function|return)\b|<\/?[A-Za-z][\w-]*|[A-Za-z_][\w$]*|\d+|[{}()[\].,;:=<>/])/g;

  const palette = isDark
    ? {
        keyword: "#f87171",
        string: "#60a5fa",
        number: "#fbbf24",
        punctuation: "#cbd5e1",
        tag: "#a78bfa",
        component: "#34d399",
        plain: "#d7dde8"
      }
    : {
        keyword: "#dc2626",
        string: "#2563eb",
        number: "#b45309",
        punctuation: "#64748b",
        tag: "#7c3aed",
        component: "#059669",
        plain: "#0f172a"
      };

  const tokenColorMap: Record<string, string> = {
    import: palette.keyword,
    from: palette.keyword,
    export: palette.keyword,
    function: palette.keyword,
    return: palette.keyword
  };

  const lines = source.split("\n");
  return lines.map((line, lineIndex) => {
    const nodes: React.ReactNode[] = [];
    let cursor = 0;
    let match: RegExpExecArray | null;
    tokenPattern.lastIndex = 0;

    while ((match = tokenPattern.exec(line)) !== null) {
      const [token] = match;
      const start = match.index;
      if (start > cursor) nodes.push(line.slice(cursor, start));

      let color = palette.plain;
      if (tokenColorMap[token]) {
        color = tokenColorMap[token];
      } else if (/^['"`]/.test(token)) {
        color = palette.string;
      } else if (/^\d+$/.test(token)) {
        color = palette.number;
      } else if (/^[{}()[\].,;:=<>/]$/.test(token)) {
        color = palette.punctuation;
      } else if (/^<\/?[A-Za-z]/.test(token)) {
        color = palette.tag;
      } else if (/^[A-Z][A-Za-z0-9_]*$/.test(token)) {
        color = palette.component;
      }

      nodes.push(
        <span key={`${lineIndex}-${start}`} style={{ color }}>
          {token}
        </span>
      );
      cursor = start + token.length;
    }

    if (cursor < line.length) nodes.push(line.slice(cursor));

    return (
      <React.Fragment key={`line-${lineIndex}`}>
        {nodes}
        {lineIndex < lines.length - 1 ? "\n" : null}
      </React.Fragment>
    );
  });
}

export function GeneratedCode({ code }: GeneratedCodeProps) {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    const root = document.documentElement;
    const readTheme = () => {
      const dataTheme = root.getAttribute("data-theme");
      setIsDark(dataTheme === "dark" || root.classList.contains("dark"));
    };

    readTheme();
    const observer = new MutationObserver(readTheme);
    observer.observe(root, { attributes: true, attributeFilter: ["class", "data-theme"] });
    return () => observer.disconnect();
  }, []);

  return (
    <CodeBlock>
      <code className="altech-generated-code">{renderHighlightedSnippet(code, isDark)}</code>
    </CodeBlock>
  );
}
