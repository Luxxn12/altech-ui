"use client";

import * as React from "react";
import { Badge, Button, Card, CardContent, CardFooter, CardHeader } from "@altech-ui/react";
import { GeneratedCode } from "@/components/generated-code";

export function BadgeDemo() {
  return (
    <div className="pt-3 flex flex-wrap justify-center gap-2">
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
  const [size, setSize] = React.useState<"sm" | "md" | "lg">("md");
  const [radiusPx, setRadiusPx] = React.useState(10);
  const [useCustomStyle, setUseCustomStyle] = React.useState(false);
  const [solidColor, setSolidColor] = React.useState("#3b82f6");
  const [gradient, setGradient] = React.useState(false);
  const [gradientFrom, setGradientFrom] = React.useState("#6366f1");
  const [gradientTo, setGradientTo] = React.useState("#06b6d4");

  const palette = ["#3b82f6", "#22c55e", "#f59e0b", "#ef4444", "#a855f7", "#14b8a6", "#0f172a"];
  const sizeClassMap: Record<"sm" | "md" | "lg", string> = {
    sm: "px-2 py-0.5 text-[11px]",
    md: "px-2.5 py-1 text-xs",
    lg: "px-3 py-1.5 text-sm"
  };

  const badgeStyle = React.useMemo<React.CSSProperties>(() => {
    if (!useCustomStyle) {
      return { borderRadius: `${radiusPx}px` };
    }

    if (gradient) {
      return {
        borderRadius: `${radiusPx}px`,
        backgroundImage: `linear-gradient(120deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
        color: "#ffffff",
        borderColor: "transparent"
      };
    }

    return {
      borderRadius: `${radiusPx}px`,
      backgroundColor: solidColor,
      color: "#ffffff",
      borderColor: "transparent"
    };
  }, [gradient, gradientFrom, gradientTo, radiusPx, solidColor, useCustomStyle]);

  const snippet = `import { Badge } from "@altech-ui/react";

export function Example() {
  return (
    <Badge
      variant="${variant}"
      className="${sizeClassMap[size]}"
      style={{
        borderRadius: "${radiusPx}px",
${!useCustomStyle
  ? ""
  : gradient
  ? `        backgroundImage: "linear-gradient(120deg, ${gradientFrom} 0%, ${gradientTo} 100%)",
        color: "#ffffff",
        borderColor: "transparent"`
  : `        backgroundColor: "${solidColor}",
        color: "#ffffff",
        borderColor: "transparent"`}
      }}
    >
      ${text || "Badge"}
    </Badge>
  );
}`;

  return (
    <div className="playground-panel overflow-hidden rounded-2xl border border-black/15 bg-white dark:border-white/25 dark:bg-white/5">
      <div className="grid min-h-[320px] grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="flex items-center justify-center border-b border-black/10 p-6 lg:border-b-0 lg:border-r dark:border-white/15">
          <Badge variant={variant} className={sizeClassMap[size]} style={badgeStyle}>{text || "Badge"}</Badge>
        </div>
        <div className="space-y-3 p-5">
          <input value={text} onChange={(e) => setText(e.target.value)} className="h-10 w-full rounded-lg border border-black/15 px-3 text-sm" placeholder="Text" />
          <select value={variant} onChange={(e) => setVariant(e.target.value as typeof variant)} className="h-10 w-full rounded-lg border border-black/15 px-3 text-sm">
            <option value="default">default</option><option value="primary">primary</option><option value="success">success</option><option value="warning">warning</option><option value="danger">danger</option>
          </select>
          <select value={size} onChange={(e) => setSize(e.target.value as "sm" | "md" | "lg")} className="h-10 w-full rounded-lg border border-black/15 px-3 text-sm">
            <option value="sm">sm</option><option value="md">md</option><option value="lg">lg</option>
          </select>
          <label className="inline-flex items-center gap-2 text-sm">
            <input type="checkbox" checked={useCustomStyle} onChange={(e) => setUseCustomStyle(e.target.checked)} />
            Override variant with custom color
          </label>
          <label className="inline-flex items-center gap-2 text-sm">
            <input type="checkbox" checked={gradient} onChange={(e) => setGradient(e.target.checked)} />
            Use gradient
          </label>
          {!useCustomStyle ? null : !gradient ? (
            <div className="grid gap-2">
              <p className="text-xs font-medium uppercase tracking-wide opacity-70">Solid Color</p>
              <div className="grid grid-cols-7 gap-2">
                {palette.map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setSolidColor(value)}
                    className="h-9 rounded-md border border-black/10"
                    style={{ backgroundColor: value }}
                    aria-label={`Solid color ${value}`}
                  />
                ))}
              </div>
              <input value={solidColor} onChange={(e) => setSolidColor(e.target.value)} className="h-9 w-full rounded-lg border border-black/15 px-3 text-xs" />
            </div>
          ) : (
            <div className="grid gap-2">
              <p className="text-xs font-medium uppercase tracking-wide opacity-70">Gradient Colors</p>
              <div className="grid grid-cols-2 gap-2">
                <label className="grid gap-1 text-xs">
                  <span>From</span>
                  <input type="color" value={gradientFrom} onChange={(e) => setGradientFrom(e.target.value)} className="h-9 w-full rounded border border-black/15 p-1" />
                </label>
                <label className="grid gap-1 text-xs">
                  <span>To</span>
                  <input type="color" value={gradientTo} onChange={(e) => setGradientTo(e.target.value)} className="h-9 w-full rounded border border-black/15 p-1" />
                </label>
              </div>
              <input value={gradientFrom} onChange={(e) => setGradientFrom(e.target.value)} className="h-9 w-full rounded-lg border border-black/15 px-3 text-xs" placeholder="Gradient from" />
              <input value={gradientTo} onChange={(e) => setGradientTo(e.target.value)} className="h-9 w-full rounded-lg border border-black/15 px-3 text-xs" placeholder="Gradient to" />
            </div>
          )}
          <label className="grid gap-1 text-sm">
            <span>Radius ({radiusPx}px)</span>
            <input type="range" min={0} max={24} value={radiusPx} onChange={(e) => setRadiusPx(Number(e.target.value))} />
          </label>
          <GeneratedCode code={snippet} />
        </div>
      </div>
    </div>
  );
}

export function CardDemo() {
  return (
    <div className="pt-3 mx-auto grid max-w-4xl gap-4 md:grid-cols-2">
      <Card variant="default">
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
      <Card variant="gradient">
        <CardHeader size="sm">
          <h3 className="text-lg font-semibold">Team Plan</h3>
          <p className="text-sm opacity-70">Best for growing companies</p>
        </CardHeader>
        <CardContent size="sm">
          <p className="text-3xl font-bold">$64/mo</p>
        </CardContent>
        <CardFooter size="sm">
          <Button variant="secondary">Start trial</Button>
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
  const [variant, setVariant] = React.useState<"default" | "elevated" | "outline" | "ghost" | "gradient">("default");
  const q = (value: string) => JSON.stringify(value);
  const snippet = `import { Badge, Button, Card, CardContent, CardFooter, CardHeader } from "@altech-ui/react";

export function Example() {
  return (
    <Card variant="${variant}" style={{ borderRadius: "${radiusPx}px" }}>
      <CardHeader>
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold">{${q(title)}}</h3>
          <Badge variant="primary">Popular</Badge>
        </div>
        <p className="text-sm opacity-70">{${q(description)}}</p>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold">{${q(price)}}</p>
      </CardContent>
      ${withFooter ? `<CardFooter>
        <Button variant="primary">Upgrade</Button>
        <Button variant="ghost">Later</Button>
      </CardFooter>` : ""}
    </Card>
  );
}`;

  return (
    <div className="playground-panel overflow-hidden rounded-2xl border border-black/15 bg-white dark:border-white/25 dark:bg-white/5">
      <div className="grid min-h-[420px] grid-cols-1 lg:grid-cols-[minmax(0,1fr)_340px]">
        <div className="flex items-center justify-center border-b border-black/10 p-6 lg:border-b-0 lg:border-r dark:border-white/15">
          <div className="w-full max-w-md">
            <Card variant={variant} style={{ borderRadius: `${radiusPx}px` }}>
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
          <select value={variant} onChange={(e) => setVariant(e.target.value as typeof variant)} className="h-10 w-full rounded-lg border border-black/15 px-3 text-sm">
            <option value="default">default</option><option value="elevated">elevated</option><option value="outline">outline</option><option value="ghost">ghost</option><option value="gradient">gradient</option>
          </select>
          <label className="grid gap-1 text-sm"><span>Radius ({radiusPx}px)</span><input type="range" min={0} max={32} value={radiusPx} onChange={(e) => setRadiusPx(Number(e.target.value))} /></label>
          <label className="inline-flex items-center gap-2 text-sm"><input type="checkbox" checked={withFooter} onChange={(e) => setWithFooter(e.target.checked)} />Show footer</label>
          <GeneratedCode code={snippet} />
        </div>
      </div>
    </div>
  );
}

export function CardWithImageDemo() {
  return (
    <div className="pt-3 mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
      <Card variant="elevated" className="overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop"
          alt="Developer workspace"
          className="h-44 w-full object-cover"
        />
        <CardHeader>
          <h3 className="text-lg font-semibold">Frontend Engineering Guide</h3>
          <p className="text-sm opacity-70">Patterns, architecture, and practical UI strategies.</p>
        </CardHeader>
        <CardFooter>
          <Button variant="primary">Read article</Button>
          <Button variant="ghost">Bookmark</Button>
        </CardFooter>
      </Card>

      <Card variant="outline" className="overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop"
          alt="Code editor screen"
          className="h-44 w-full object-cover"
        />
        <CardContent>
          <Badge variant="success">New release</Badge>
          <h3 className="mt-3 text-lg font-semibold">Altech UI v2.1</h3>
          <p className="mt-1 text-sm opacity-70">Improved forms, overlays, and design tokens.</p>
        </CardContent>
      </Card>
    </div>
  );
}

export function CardBackgroundImageDemo() {
  return (
    <div className="pt-3 mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
      <Card
        className="relative overflow-hidden text-white"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(2,6,23,0.25) 0%, rgba(2,6,23,0.82) 100%), url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <CardHeader>
          <Badge variant="warning">Featured</Badge>
          <h3 className="text-xl font-semibold">Build Faster with Design Systems</h3>
          <p className="text-sm text-white/85">Ship consistent UI by composing reusable primitives.</p>
        </CardHeader>
        <CardFooter>
          <Button variant="secondary">Explore docs</Button>
          <Button variant="ghost" className="text-white">Share</Button>
        </CardFooter>
      </Card>

      <Card
        className="relative overflow-hidden text-white"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(15,23,42,0.35) 0%, rgba(15,23,42,0.88) 100%), url('https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1400&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <CardHeader>
          <h3 className="text-xl font-semibold">Deploy Checklist</h3>
          <p className="text-sm text-white/85">Type safety, visual QA, accessibility, and perf.</p>
        </CardHeader>
        <CardContent>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs">
            <span className="size-2 rounded-full bg-emerald-400" />
            Ready for production
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export function CardDeveloperDemo() {
  return (
    <div className="pt-3 mx-auto grid max-w-5xl gap-4 md:grid-cols-3">
      <Card variant="outline">
        <CardHeader size="sm">
          <p className="text-xs uppercase tracking-wide opacity-60">Build Status</p>
          <h3 className="text-lg font-semibold">Main Branch</h3>
        </CardHeader>
        <CardContent size="sm">
          <p className="text-3xl font-bold text-emerald-500">Passing</p>
          <p className="text-sm opacity-70">142 tests • 0 failures</p>
        </CardContent>
      </Card>

      <Card variant="default">
        <CardHeader size="sm">
          <p className="text-xs uppercase tracking-wide opacity-60">API Latency</p>
          <h3 className="text-lg font-semibold">P95 Response</h3>
        </CardHeader>
        <CardContent size="sm">
          <p className="text-3xl font-bold">188ms</p>
          <p className="text-sm opacity-70">-12% from last deploy</p>
        </CardContent>
      </Card>

      <Card variant="gradient">
        <CardHeader size="sm">
          <p className="text-xs uppercase tracking-wide opacity-70">Weekly Deploys</p>
          <h3 className="text-lg font-semibold">14 Releases</h3>
        </CardHeader>
        <CardContent size="sm">
          <p className="text-sm opacity-80">Most active team: Frontend Platform</p>
        </CardContent>
      </Card>
    </div>
  );
}
