"use client";

import { Button } from "@altech-ui/react";

import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { snippets } from "@/content/snippets";

export default function ButtonDocPage() {
  return (
    <article className="space-y-6">
      <h1 className="text-3xl font-semibold">Button</h1>
      <ComponentPreview>
        <div className="flex flex-wrap gap-3">
          <Button>Default</Button>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
          <Button isLoading>Loading</Button>
        </div>
      </ComponentPreview>
      <CodeBlock code={snippets.button} />
    </article>
  );
}
