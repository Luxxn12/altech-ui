import { CodeBlock } from "@/components/code-block";

const code = `.dark {
  --altech-background: #090f1d;
  --altech-foreground: #edf3ff;
  --altech-primary: #5b8dff;
}`;

export default function DarkModePage() {
  return (
    <article className="space-y-6">
      <h1 className="text-3xl font-semibold">Dark Mode</h1>
      <p className="text-[color:var(--altech-foreground)]/75">
        Apply class <code className="rounded bg-[color:var(--altech-muted)] px-1">dark</code> on the
        root element to switch token set.
      </p>
      <CodeBlock code={code} />
    </article>
  );
}
