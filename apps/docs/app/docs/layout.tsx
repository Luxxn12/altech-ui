import type { PropsWithChildren } from "react";

import { DocsShell } from "@/components/docs-shell";

export default function DocsLayout({ children }: PropsWithChildren) {
  return <DocsShell>{children}</DocsShell>;
}
