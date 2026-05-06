import type * as React from "react";
import { useMDXComponents as getDocsMDXComponents } from "nextra-theme-docs";

import { CodeBlock } from "@/components/code-block";

export function useMDXComponents(components: Record<string, React.ComponentType | string>) {
  const base = getDocsMDXComponents(components as never) as Record<string, unknown>;

  return {
    ...base,
    pre: (props: React.HTMLAttributes<HTMLPreElement>) => <CodeBlock {...props} />
  };
}
