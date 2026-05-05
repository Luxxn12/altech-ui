"use client";

import { Badge, Button, Card, CardContent, CardFooter, CardHeader } from "@altech-ui/react";

import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { snippets } from "@/content/snippets";

export default function CardDocPage() {
  return (
    <article className="space-y-6">
      <h1 className="text-3xl font-semibold">Card</h1>
      <ComponentPreview>
        <div className="max-w-md">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Pro Plan</h3>
                <Badge variant="primary">Popular</Badge>
              </div>
              <p className="text-sm text-[color:var(--altech-foreground)]/70">Perfect for growing teams</p>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">$24/mo</p>
              <p className="text-sm text-[color:var(--altech-foreground)]/70">Unlimited projects and priority support</p>
            </CardContent>
            <CardFooter>
              <Button variant="primary">Upgrade</Button>
            </CardFooter>
          </Card>
        </div>
      </ComponentPreview>
      <CodeBlock code={snippets.card} />
    </article>
  );
}
