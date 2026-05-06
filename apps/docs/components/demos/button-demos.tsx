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
