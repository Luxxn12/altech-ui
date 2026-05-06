"use client";

import * as React from "react";
import { GeneratedCode } from "@/components/generated-code";
import {
  Checkbox,
  Input,
  RadioGroup,
  RadioItem,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Switch,
  Textarea
} from "@altech-ui/react";

export function InputDemo() {
  return (
    <div className="pt-3 mx-auto grid w-full gap-4 sm:max-w-xl">
      <Input placeholder="Enter your email" variant="default" />
      <Input label="Email" placeholder="email@example.com" variant="filled" required />
      <Input label="Compact" placeholder="Small input" uiSize="sm" />
      <Input label="Email" error="Email is required" />
      <Input label="Disabled" isDisabled value="locked@example.com" />
    </div>
  );
}

export function InputPlayground() {
  const [label, setLabel] = React.useState("Email");
  const [placeholder, setPlaceholder] = React.useState("name@example.com");
  const [value, setValue] = React.useState("");
  const [helperText, setHelperText] = React.useState("We'll never share your email.");
  const [error, setError] = React.useState("");
  const [disabled, setDisabled] = React.useState(false);
  const [required, setRequired] = React.useState(true);
  const [radiusPx, setRadiusPx] = React.useState(10);
  const [variant, setVariant] = React.useState<"default" | "filled" | "flushed" | "ghost">("default");
  const [uiSize, setUiSize] = React.useState<"sm" | "md" | "lg">("md");

  const q = (value: string) => JSON.stringify(value);
  const snippet = `import { Input } from "@altech-ui/react";

export function Example() {
  return (
    <Input
      label={${q(label)}}
      placeholder={${q(placeholder)}}
      variant="${variant}"
      uiSize="${uiSize}"
      ${helperText ? `helperText={${q(helperText)}}` : ""}
      ${error ? `error={${q(error)}}` : ""}
      ${required ? "required" : ""}
      ${disabled ? "isDisabled" : ""}
      style={{ borderRadius: "${radiusPx}px" }}
    />
  );
}`;

  return (
    <div className="playground-panel overflow-hidden rounded-2xl border border-black/15 bg-white dark:border-white/25 dark:bg-white/5">
      <div className="grid min-h-[380px] grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="flex items-center justify-center border-b border-black/10 p-6 lg:border-b-0 lg:border-r dark:border-white/15">
          <div className="w-full max-w-md">
            <Input
              label={label || undefined}
              placeholder={placeholder}
              value={value}
              onChange={(event) => setValue(event.target.value)}
              helperText={helperText || undefined}
              error={error || undefined}
              required={required}
              isDisabled={disabled}
              variant={variant}
              uiSize={uiSize}
              style={{ borderRadius: `${radiusPx}px` }}
            />
          </div>
        </div>
        <div className="space-y-3 p-5">
          <input value={label} onChange={(e) => setLabel(e.target.value)} className="h-10 w-full rounded-lg border border-black/15 px-3 text-sm" placeholder="Label" />
          <input value={placeholder} onChange={(e) => setPlaceholder(e.target.value)} className="h-10 w-full rounded-lg border border-black/15 px-3 text-sm" placeholder="Placeholder" />
          <input value={helperText} onChange={(e) => setHelperText(e.target.value)} className="h-10 w-full rounded-lg border border-black/15 px-3 text-sm" placeholder="Helper text" />
          <input value={error} onChange={(e) => setError(e.target.value)} className="h-10 w-full rounded-lg border border-black/15 px-3 text-sm" placeholder="Error text" />
          <select value={variant} onChange={(e) => setVariant(e.target.value as typeof variant)} className="h-10 w-full rounded-lg border border-black/15 px-3 text-sm">
            <option value="default">default</option><option value="filled">filled</option><option value="flushed">flushed</option><option value="ghost">ghost</option>
          </select>
          <select value={uiSize} onChange={(e) => setUiSize(e.target.value as typeof uiSize)} className="h-10 w-full rounded-lg border border-black/15 px-3 text-sm">
            <option value="sm">sm</option><option value="md">md</option><option value="lg">lg</option>
          </select>
          <label className="grid gap-1 text-sm">
            <span>Radius ({radiusPx}px)</span>
            <input type="range" min={0} max={28} value={radiusPx} onChange={(e) => setRadiusPx(Number(e.target.value))} />
          </label>
          <label className="inline-flex items-center gap-2 text-sm">
            <input type="checkbox" checked={required} onChange={(e) => setRequired(e.target.checked)} />
            required (show red *)
          </label>
          <label className="inline-flex items-center gap-2 text-sm">
            <input type="checkbox" checked={disabled} onChange={(e) => setDisabled(e.target.checked)} />
            isDisabled
          </label>
          <GeneratedCode code={snippet} />
        </div>
      </div>
    </div>
  );
}

export function InputTypesDemo() {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="pt-3 mx-auto grid w-full gap-4 sm:max-w-xl">
      <Input
        label="Work Email"
        type="email"
        placeholder="name@company.com"
        helperText="Use your company email."
        required
      />
      <Input
        label="Password"
        type={showPassword ? "text" : "password"}
        placeholder="Enter your password"
        helperText="Min. 8 characters"
        endAdornment={(
          <button
            type="button"
            aria-label={showPassword ? "Hide password" : "Show password"}
            onClick={() => setShowPassword((prev) => !prev)}
            className="inline-flex size-7 items-center justify-center rounded-md transition opacity-80 hover:opacity-100"
            style={{
              color: "var(--altech-foreground)"
            }}
          >
            {showPassword ? (
              <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M3 3l18 18" />
                <path d="M10.6 10.6a2 2 0 0 0 2.8 2.8" />
                <path d="M9.9 4.2A10.9 10.9 0 0 1 12 4c5.5 0 9.5 4.5 10 8-.2 1.3-.9 2.8-2.1 4.2" />
                <path d="M6.6 6.7C4.2 8.1 2.5 10.2 2 12c.5 3.5 4.5 8 10 8 1.7 0 3.2-.4 4.5-1.1" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M2 12s3.5-8 10-8 10 8 10 8-3.5 8-10 8-10-8-10-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            )}
          </button>
        )}
        required
      />
      <Input
        label="Search"
        type="search"
        placeholder="Search components..."
        variant="ghost"
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <Input label="Phone" type="tel" placeholder="+62 812 3456 7890" />
        <Input label="Website" type="url" placeholder="https://example.com" />
      </div>
      <Input
        label="OTP Code"
        type="number"
        placeholder="6-digit code"
        uiSize="sm"
      />
    </div>
  );
}

export function SelectDemo() {
  return (
    <div className="pt-3 mx-auto sm:max-w-sm">
      <Select defaultValue="starter">
        <SelectTrigger variant="filled">
          <SelectValue placeholder="Choose plan" />
        </SelectTrigger>
        <SelectContent variant="elevated">
          <SelectItem value="starter">Starter</SelectItem>
          <SelectItem value="pro">Pro</SelectItem>
          <SelectItem value="enterprise">Enterprise</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export function SelectPlayground() {
  const [value, setValue] = React.useState("starter");
  const snippet = `import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@altech-ui/react";

export function Example() {
  return (
    <Select defaultValue="${value}">
      <SelectTrigger variant="filled">
        <SelectValue placeholder="Choose plan" />
      </SelectTrigger>
      <SelectContent variant="elevated">
        <SelectItem value="starter">Starter</SelectItem>
        <SelectItem value="pro">Pro</SelectItem>
        <SelectItem value="enterprise">Enterprise</SelectItem>
      </SelectContent>
    </Select>
  );
}`;
  return (
    <div className="playground-panel overflow-hidden rounded-2xl border border-black/15 bg-white dark:border-white/25 dark:bg-white/5">
      <div className="grid min-h-[240px] grid-cols-1 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="flex items-center justify-center border-b border-black/10 p-6 lg:border-b-0 lg:border-r dark:border-white/15">
          <div className="w-full max-w-sm">
            <Select value={value} onValueChange={setValue}>
              <SelectTrigger><SelectValue placeholder="Choose plan" /></SelectTrigger>
              <SelectContent><SelectItem value="starter">Starter</SelectItem><SelectItem value="pro">Pro</SelectItem><SelectItem value="enterprise">Enterprise</SelectItem></SelectContent>
            </Select>
          </div>
        </div>
        <div className="space-y-3 p-5">
          <p className="text-sm">Value: <code>{value}</code></p>
          <GeneratedCode code={snippet} />
        </div>
      </div>
    </div>
  );
}

export function TextareaDemo() {
  return (
    <div className="pt-3 mx-auto grid w-full gap-3 sm:max-w-lg">
      <Textarea placeholder="Write your message" variant="default" />
      <Textarea placeholder="Filled message" variant="filled" />
      <Textarea error="Message is required" placeholder="Required field" />
    </div>
  );
}

export function TextareaPlayground() {
  const [placeholder, setPlaceholder] = React.useState("Write your message");
  const [error, setError] = React.useState("");
  const [disabled, setDisabled] = React.useState(false);
  const [radiusPx, setRadiusPx] = React.useState(10);
  const q = (value: string) => JSON.stringify(value);
  const snippet = `import { Textarea } from "@altech-ui/react";

export function Example() {
  return (
    <Textarea
      placeholder={${q(placeholder)}}
      ${error ? `error={${q(error)}}` : ""}
      ${disabled ? "disabled" : ""}
      style={{ borderRadius: "${radiusPx}px" }}
    />
  );
}`;
  return (
    <div className="playground-panel overflow-hidden rounded-2xl border border-black/15 bg-white dark:border-white/25 dark:bg-white/5">
      <div className="grid min-h-[300px] grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="flex items-center justify-center border-b border-black/10 p-6 lg:border-b-0 lg:border-r dark:border-white/15">
          <div className="w-full max-w-md">
            <Textarea placeholder={placeholder} error={error || undefined} disabled={disabled} style={{ borderRadius: `${radiusPx}px` }} />
          </div>
        </div>
        <div className="space-y-3 p-5">
          <input value={placeholder} onChange={(e) => setPlaceholder(e.target.value)} className="h-10 w-full rounded-lg border border-black/15 px-3 text-sm" placeholder="Placeholder" />
          <input value={error} onChange={(e) => setError(e.target.value)} className="h-10 w-full rounded-lg border border-black/15 px-3 text-sm" placeholder="Error text" />
          <label className="grid gap-1 text-sm"><span>Radius ({radiusPx}px)</span><input type="range" min={0} max={28} value={radiusPx} onChange={(e) => setRadiusPx(Number(e.target.value))} /></label>
          <label className="inline-flex items-center gap-2 text-sm"><input type="checkbox" checked={disabled} onChange={(e) => setDisabled(e.target.checked)} />disabled</label>
          <GeneratedCode code={snippet} />
        </div>
      </div>
    </div>
  );
}

export function CheckboxDemo() {
  return (
    <div className="pt-3 mx-auto grid w-full max-w-md gap-3">
      <label className="inline-flex items-center gap-2 text-sm"><Checkbox defaultChecked id="terms" variant="primary" />Accept terms</label>
      <label className="inline-flex items-center gap-2 text-sm"><Checkbox id="newsletter" variant="success" />Subscribe newsletter</label>
      <label className="inline-flex items-center gap-2 text-sm"><Checkbox id="danger" variant="danger" size="lg" />Delete protection off</label>
    </div>
  );
}

export function RadioDemo() {
  return (
    <RadioGroup defaultValue="starter" className="pt-3 mx-auto grid w-full max-w-md gap-2">
      <label className="inline-flex items-center gap-2 text-sm"><RadioItem value="starter" variant="primary" /> Starter</label>
      <label className="inline-flex items-center gap-2 text-sm"><RadioItem value="pro" variant="success" /> Pro</label>
      <label className="inline-flex items-center gap-2 text-sm"><RadioItem value="enterprise" variant="danger" /> Enterprise</label>
    </RadioGroup>
  );
}

export function SwitchDemo() {
  return (
    <div className="pt-3 mx-auto grid w-full max-w-md gap-3">
      <label className="inline-flex items-center gap-2 text-sm"><Switch defaultChecked variant="primary" />Enable notifications</label>
      <label className="inline-flex items-center gap-2 text-sm"><Switch defaultChecked variant="success" size="lg" />Auto backup</label>
      <label className="inline-flex items-center gap-2 text-sm"><Switch variant="danger" size="sm" />Danger mode</label>
    </div>
  );
}
