import { CodeBlock } from "@/components/code-block";

const code = `:root {
  --altech-background: #f7fafc;
  --altech-foreground: #0e1628;
  --altech-primary: #0f62fe;
  --altech-primary-foreground: #f8fbff;
  --altech-muted: #e9effa;
  --altech-border: #d5dfef;
  --altech-danger: #d92d20;
  --altech-success: #12b76a;
  --altech-warning: #f79009;
}`;

export default function ThemingPage() {
  return (
    <article className="space-y-6">
      <h1 className="text-3xl font-semibold">Theming</h1>
      <p className="text-[color:var(--altech-foreground)]/75">
        Customize Altech UI by overriding CSS variables in your app.
      </p>
      <CodeBlock code={code} />
    </article>
  );
}
