"use client";

import * as React from "react";
import { Badge, Button, Card, CardContent, CardFooter, CardHeader } from "@altech-ui/react";

export function BadgeDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge>Default</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="danger">Danger</Badge>
    </div>
  );
}

export function BadgePlayground() {
  const [text, setText] = React.useState("Active");
  const [variant, setVariant] = React.useState<"default" | "primary" | "success" | "warning" | "danger">("success");
  const [radiusPx, setRadiusPx] = React.useState(10);
  const snippet = `<Badge variant="${variant}" style={{ borderRadius: "${radiusPx}px" }}>${text || "Badge"}</Badge>`;

  return (
    <div className="overflow-hidden rounded-2xl border border-black/10 bg-white dark:border-white/15 dark:bg-white/5">
      <div className="grid min-h-[320px] grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="flex items-center justify-center border-b border-black/10 p-6 lg:border-b-0 lg:border-r dark:border-white/15">
          <Badge variant={variant} className="px-3 py-1.5 text-sm" style={{ borderRadius: `${radiusPx}px` }}>{text || "Badge"}</Badge>
        </div>
        <div className="space-y-3 p-5">
          <input value={text} onChange={(e) => setText(e.target.value)} className="h-10 w-full rounded-lg border border-black/15 px-3 text-sm" placeholder="Text" />
          <select value={variant} onChange={(e) => setVariant(e.target.value as typeof variant)} className="h-10 w-full rounded-lg border border-black/15 px-3 text-sm">
            <option value="default">default</option><option value="primary">primary</option><option value="success">success</option><option value="warning">warning</option><option value="danger">danger</option>
          </select>
          <label className="grid gap-1 text-sm">
            <span>Radius ({radiusPx}px)</span>
            <input type="range" min={0} max={24} value={radiusPx} onChange={(e) => setRadiusPx(Number(e.target.value))} />
          </label>
          <pre className="overflow-x-auto rounded-lg border border-black/10 bg-black/[.03] p-3 text-xs"><code>{snippet}</code></pre>
        </div>
      </div>
    </div>
  );
}

export function CardDemo() {
  return (
    <div className="max-w-md">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-lg font-semibold">Pro Plan</h3>
            <Badge variant="primary">Popular</Badge>
          </div>
          <p className="text-sm opacity-70">Perfect for growing teams</p>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">$24/mo</p>
          <p className="text-sm opacity-70">Unlimited projects and priority support</p>
        </CardContent>
        <CardFooter>
          <Button variant="primary">Upgrade</Button>
          <Button variant="ghost">Later</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export function CardPlayground() {
  const [title, setTitle] = React.useState("Pro Plan");
  const [description, setDescription] = React.useState("Perfect for growing teams");
  const [price, setPrice] = React.useState("$24/mo");
  const [radiusPx, setRadiusPx] = React.useState(10);
  const [withFooter, setWithFooter] = React.useState(true);
  const snippet = `<Card style={{ borderRadius: "${radiusPx}px" }}>...</Card>`;

  return (
    <div className="overflow-hidden rounded-2xl border border-black/10 bg-white dark:border-white/15 dark:bg-white/5">
      <div className="grid min-h-[420px] grid-cols-1 lg:grid-cols-[minmax(0,1fr)_340px]">
        <div className="flex items-center justify-center border-b border-black/10 p-6 lg:border-b-0 lg:border-r dark:border-white/15">
          <div className="w-full max-w-md">
            <Card style={{ borderRadius: `${radiusPx}px` }}>
              <CardHeader>
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <Badge variant="primary">Popular</Badge>
                </div>
                <p className="text-sm opacity-70">{description}</p>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{price}</p>
              </CardContent>
              {withFooter ? (
                <CardFooter>
                  <Button variant="primary">Upgrade</Button>
                  <Button variant="ghost">Later</Button>
                </CardFooter>
              ) : null}
            </Card>
          </div>
        </div>
        <div className="space-y-3 p-5">
          <input value={title} onChange={(e) => setTitle(e.target.value)} className="h-10 w-full rounded-lg border border-black/15 px-3 text-sm" placeholder="Title" />
          <input value={description} onChange={(e) => setDescription(e.target.value)} className="h-10 w-full rounded-lg border border-black/15 px-3 text-sm" placeholder="Description" />
          <input value={price} onChange={(e) => setPrice(e.target.value)} className="h-10 w-full rounded-lg border border-black/15 px-3 text-sm" placeholder="Price" />
          <label className="grid gap-1 text-sm"><span>Radius ({radiusPx}px)</span><input type="range" min={0} max={32} value={radiusPx} onChange={(e) => setRadiusPx(Number(e.target.value))} /></label>
          <label className="inline-flex items-center gap-2 text-sm"><input type="checkbox" checked={withFooter} onChange={(e) => setWithFooter(e.target.checked)} />Show footer</label>
          <pre className="overflow-x-auto rounded-lg border border-black/10 bg-black/[.03] p-3 text-xs"><code>{snippet}</code></pre>
        </div>
      </div>
    </div>
  );
}
