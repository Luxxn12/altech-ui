"use client";

import { Input } from "@altech-ui/react";

import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { snippets } from "@/content/snippets";

export default function InputDocPage() {
  return (
    <article className="space-y-6">
      <h1 className="text-3xl font-semibold">Input</h1>
      <ComponentPreview>
        <div className="mx-auto max-w-xl space-y-4">
          <Input placeholder="Enter your email" />
          <Input label="Email" placeholder="email@example.com" />
          <Input label="Email" error="Email is required" />
          <Input label="Disabled" isDisabled value="locked@example.com" />
        </div>
      </ComponentPreview>
      <CodeBlock code={snippets.input} />
    </article>
  );
}
