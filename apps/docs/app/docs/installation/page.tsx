import { CodeBlock } from "@/components/code-block";

const installCode = `pnpm add @altech-ui/react

# import style tokens
# app/layout.tsx or app/globals.css
import "@altech-ui/react/styles.css";`;

const usageCode = `import { Button } from "@altech-ui/react";

export default function App() {
  return <Button variant="primary">Hello Altech UI</Button>;
}`;

export default function InstallationPage() {
  return (
    <article className="space-y-6">
      <h1 className="text-3xl font-semibold">Installation</h1>
      <p className="text-[color:var(--altech-foreground)]/75">
        Install package and import global style tokens once.
      </p>
      <CodeBlock code={installCode} />
      <CodeBlock code={usageCode} />
    </article>
  );
}
