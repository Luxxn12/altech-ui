"use client";

import Link from "next/link";

import { Badge, Button, Card, CardContent } from "@altech-ui/react";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-[1100px] flex-col justify-center gap-10 px-4 py-14">
      <section className="space-y-6 text-center">
        <Badge variant="primary" className="mx-auto">Altech UI</Badge>
        <h1 className="text-4xl font-semibold tracking-tight text-[color:var(--altech-foreground)] md:text-6xl">
          Build premium React interfaces faster.
        </h1>
        <p className="mx-auto max-w-2xl text-base text-[color:var(--altech-foreground)]/70 md:text-lg">
          Reusable, animated, and accessible components for modern product teams.
        </p>
        <div className="flex justify-center gap-3">
          <Link href="/docs/installation">
            <Button variant="primary" size="lg">Get Started</Button>
          </Link>
          <Link href="/docs/components/button">
            <Button variant="outline" size="lg">View Components</Button>
          </Link>
        </div>
      </section>
      <section className="grid gap-4 md:grid-cols-3">
        {[
          "Type-safe variant system",
          "Motion that feels natural",
          "Tailwind and Next.js friendly"
        ].map((title) => (
          <Card key={title}>
            <CardContent className="py-8">
              <p className="text-base font-medium">{title}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
}
