"use client";

import * as React from "react";
import { Button } from "@altech-ui/react";

export function ButtonDemo() {
  return (
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
  );
}

export function ButtonVariantsDemo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button variant="default">Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
    </div>
  );
}

export function ButtonSizesDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="sm" variant="primary">Small</Button>
      <Button size="md" variant="primary">Medium</Button>
      <Button size="lg" variant="primary">Large</Button>
    </div>
  );
}

export function ButtonStateDemo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button variant="primary">Normal</Button>
      <Button variant="primary" isLoading>
        Saving
      </Button>
      <Button variant="primary" disabled>
        Disabled
      </Button>
    </div>
  );
}

export function ButtonGroupDemo() {
  return (
    <div className="inline-flex overflow-hidden rounded-xl border border-black/10 dark:border-white/20">
      <Button variant="ghost" className="rounded-none border-r border-black/10 dark:border-white/20">
        Day
      </Button>
      <Button variant="primary" className="rounded-none border-r border-black/10 dark:border-white/20">
        Week
      </Button>
      <Button variant="ghost" className="rounded-none">
        Month
      </Button>
    </div>
  );
}

export function ButtonActionRowDemo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button variant="ghost">Cancel</Button>
      <Button variant="secondary">Save Draft</Button>
      <Button variant="primary">Publish</Button>
    </div>
  );
}

export function ButtonIconOnlyDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button
        variant="outline"
        aria-label="Download"
        className="h-11 w-11 p-0"
      >
        <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M12 4v10" />
          <path d="m8 10 4 4 4-4" />
          <path d="M4 19h16" />
        </svg>
      </Button>
      <Button variant="ghost" aria-label="Settings" className="h-11 w-11 p-0">
        <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.2a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 0 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.2a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 0 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3h.1a1.7 1.7 0 0 0 .9-1.5V3a2 2 0 1 1 4 0v.2a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 0 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9v.1a1.7 1.7 0 0 0 1.5.9H21a2 2 0 1 1 0 4h-.2a1.7 1.7 0 0 0-1.5 1z" />
        </svg>
      </Button>
    </div>
  );
}

export function ButtonWithIconDemo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button variant="primary">
        <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M5 12h14" />
          <path d="M12 5v14" />
        </svg>
        Add item
      </Button>
      <Button variant="secondary">
        Export
        <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M12 5v10" />
          <path d="m8 11 4 4 4-4" />
          <path d="M5 19h14" />
        </svg>
      </Button>
    </div>
  );
}

export function ButtonFullWidthDemo() {
  return (
    <div className="max-w-md space-y-3">
      <Button variant="primary" className="w-full">
        Continue checkout
      </Button>
      <Button variant="outline" className="w-full">
        Continue with Google
      </Button>
    </div>
  );
}

export function ButtonAsyncListDemo() {
  const [loadingId, setLoadingId] = React.useState<string | null>(null);
  const items = [
    { id: "inv-01", label: "Generate invoice #INV-01" },
    { id: "inv-02", label: "Generate invoice #INV-02" },
    { id: "inv-03", label: "Generate invoice #INV-03" }
  ];

  const handleGenerate = async (id: string) => {
    setLoadingId(id);
    await new Promise((resolve) => window.setTimeout(resolve, 900));
    setLoadingId(null);
  };

  return (
    <div className="max-w-xl space-y-2">
      {items.map((item) => (
        <div key={item.id} className="flex items-center justify-between rounded-xl border border-black/10 p-3 dark:border-white/20">
          <p className="text-sm">{item.label}</p>
          <Button
            size="sm"
            variant="primary"
            isLoading={loadingId === item.id}
            onClick={() => handleGenerate(item.id)}
          >
            Generate
          </Button>
        </div>
      ))}
    </div>
  );
}

export function ButtonSplitActionDemo() {
  return (
    <div className="inline-flex overflow-hidden rounded-xl border border-black/10 dark:border-white/20">
      <Button variant="primary" className="rounded-none border-r border-black/10 dark:border-white/20">
        Save
      </Button>
      <Button variant="primary" className="rounded-none px-3" aria-label="More actions">
        <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </Button>
    </div>
  );
}

type ButtonVariant = "default" | "primary" | "secondary" | "outline" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";

export function ButtonPlayground() {
  const [label, setLabel] = React.useState("Button");
  const [variant, setVariant] = React.useState<ButtonVariant>("primary");
  const [sizePx, setSizePx] = React.useState(44);
  const [radiusPx, setRadiusPx] = React.useState(14);
  const [color, setColor] = React.useState("#ea8435");
  const [customColor, setCustomColor] = React.useState("#ea8435");
  const [isLoading, setIsLoading] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);
  const [extraClassName, setExtraClassName] = React.useState("");

  const colorPalette = [
    "#8e99a7",
    "#eb5c55",
    "#cf4f88",
    "#a34fce",
    "#6f53d8",
    "#576ddd",
    "#4a86d8",
    "#49a3b8",
    "#54b68d",
    "#64bd61",
    "#8cc440",
    "#e9b43f",
    "#ea8435"
  ];

  const size = React.useMemo<ButtonSize>(() => {
    if (sizePx <= 38) return "sm";
    if (sizePx >= 50) return "lg";
    return "md";
  }, [sizePx]);

  const snippet = React.useMemo(() => {
    const props: string[] = [];
    if (variant !== "default") props.push(`variant="${variant}"`);
    if (size !== "md") props.push(`size="${size}"`);
    if (isLoading) props.push("isLoading");
    if (disabled) props.push("disabled");

    const generatedStyle = `style={{ height: "${sizePx}px", borderRadius: "${radiusPx}px", backgroundColor: "${color}" }}`;
    if (variant !== "outline" && variant !== "ghost") {
      props.push(generatedStyle);
      if (extraClassName.trim()) props.push(`className="${extraClassName.trim()}"`);
    } else if (extraClassName.trim()) {
      props.push(`className="${extraClassName.trim()}"`);
    }

    return `<Button${props.length ? ` ${props.join(" ")}` : ""}>${label || "Button"}</Button>`;
  }, [color, disabled, extraClassName, isLoading, label, radiusPx, size, sizePx, variant]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(snippet);
    } catch {
      // ignore clipboard errors in restricted browser contexts
    }
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-black/10 bg-white dark:border-white/15 dark:bg-white/5">
      <div className="grid min-h-[420px] grid-cols-1 lg:grid-cols-[minmax(0,1fr)_390px]">
        <div className="flex items-center justify-center border-b border-black/10 p-6 lg:border-b-0 lg:border-r dark:border-white/15">
          <Button
            variant={variant}
            size={size}
            isLoading={isLoading}
            disabled={disabled}
            className={extraClassName || undefined}
            style={
              variant !== "outline" && variant !== "ghost"
                ? { height: `${sizePx}px`, borderRadius: `${radiusPx}px`, backgroundColor: color }
                : { height: `${sizePx}px`, borderRadius: `${radiusPx}px` }
            }
          >
            {label || "Button"}
          </Button>
        </div>

        <div className="space-y-4 p-5">
          <label className="grid gap-1.5 text-sm">
            <span className="font-medium">Text</span>
            <input
              value={label}
              onChange={(event) => setLabel(event.target.value)}
              className="h-11 rounded-xl border border-black/15 bg-white px-3 text-sm outline-none focus:border-blue-500 dark:border-white/20 dark:bg-black/20"
            />
          </label>

          <label className="grid gap-1.5 text-sm">
            <span className="font-medium">Variant</span>
            <select
              value={variant}
              onChange={(event) => setVariant(event.target.value as ButtonVariant)}
              className="h-11 rounded-xl border border-black/15 bg-white px-3 text-sm outline-none focus:border-blue-500 dark:border-white/20 dark:bg-black/20"
            >
              <option value="default">Default</option>
              <option value="primary">Filled</option>
              <option value="secondary">Secondary</option>
              <option value="outline">Outline</option>
              <option value="ghost">Ghost</option>
              <option value="danger">Danger</option>
            </select>
          </label>

          <div className="grid gap-2 text-sm">
            <p className="font-medium">Color</p>
            <div className="grid grid-cols-7 gap-2">
              {colorPalette.map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setColor(value)}
                  className="h-12 rounded-lg border border-black/10 shadow-sm"
                  style={{ backgroundColor: value }}
                  aria-label={`Color ${value}`}
                >
                  {color === value ? <span className="text-base text-white">✓</span> : null}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={customColor}
                onChange={(event) => {
                  setCustomColor(event.target.value);
                  setColor(event.target.value);
                }}
                className="h-9 w-12 cursor-pointer rounded border border-black/15 bg-transparent p-1 dark:border-white/20"
                aria-label="Custom color picker"
              />
              <input
                value={customColor}
                onChange={(event) => {
                  const next = event.target.value;
                  setCustomColor(next);
                  if (/^#([0-9A-Fa-f]{6})$/.test(next)) setColor(next);
                }}
                placeholder="#ea8435"
                className="h-9 flex-1 rounded-lg border border-black/15 bg-white px-3 text-xs outline-none focus:border-blue-500 dark:border-white/20 dark:bg-black/20"
              />
            </div>
          </div>

          <label className="grid gap-1.5 text-sm">
            <span className="font-medium">Size ({sizePx}px)</span>
            <input type="range" min={34} max={56} step={1} value={sizePx} onChange={(event) => setSizePx(Number(event.target.value))} />
          </label>

          <label className="grid gap-1.5 text-sm">
            <span className="font-medium">Radius ({radiusPx}px)</span>
            <input type="range" min={0} max={40} step={1} value={radiusPx} onChange={(event) => setRadiusPx(Number(event.target.value))} />
          </label>

          <div className="flex flex-wrap gap-3 text-sm">
            <label className="inline-flex items-center gap-2">
              <input type="checkbox" checked={isLoading} onChange={(event) => setIsLoading(event.target.checked)} />
              isLoading
            </label>
            <label className="inline-flex items-center gap-2">
              <input type="checkbox" checked={disabled} onChange={(event) => setDisabled(event.target.checked)} />
              disabled
            </label>
          </div>

          <label className="grid gap-1.5 text-sm">
            <span className="font-medium">Extra className (optional)</span>
            <input
              value={extraClassName}
              onChange={(event) => setExtraClassName(event.target.value)}
              placeholder="px-8 shadow-lg"
              className="h-11 rounded-xl border border-black/15 bg-white px-3 text-sm outline-none focus:border-blue-500 dark:border-white/20 dark:bg-black/20"
            />
          </label>

          <div className="space-y-2 border-t border-black/10 pt-3 dark:border-white/15">
            <div className="flex items-center justify-between">
              <p className="text-xs opacity-70">Generated code</p>
              <button
                type="button"
                onClick={handleCopy}
                className="rounded-md border border-black/10 px-2 py-1 text-xs hover:bg-black/[.04] dark:border-white/20 dark:hover:bg-white/10"
              >
                Copy
              </button>
            </div>
            <pre className="overflow-x-auto rounded-lg border border-black/10 bg-black/[.03] p-3 text-xs dark:border-white/15 dark:bg-white/5">
              <code>{snippet}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
