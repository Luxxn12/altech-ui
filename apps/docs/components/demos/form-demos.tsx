"use client";

import * as React from "react";
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
    <div className="grid gap-4 sm:max-w-xl">
      <Input placeholder="Enter your email" />
      <Input label="Email" placeholder="email@example.com" />
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
  const [radiusPx, setRadiusPx] = React.useState(10);

  const snippet = `<Input label="${label}" placeholder="${placeholder}"${helperText ? ` helperText="${helperText}"` : ""}${error ? ` error="${error}"` : ""}${disabled ? " isDisabled" : ""} style={{ borderRadius: "${radiusPx}px" }} />`;

  return (
    <div className="overflow-hidden rounded-2xl border border-black/10 bg-white dark:border-white/15 dark:bg-white/5">
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
              isDisabled={disabled}
              style={{ borderRadius: `${radiusPx}px` }}
            />
          </div>
        </div>
        <div className="space-y-3 p-5">
          <input value={label} onChange={(e) => setLabel(e.target.value)} className="h-10 w-full rounded-lg border border-black/15 px-3 text-sm" placeholder="Label" />
          <input value={placeholder} onChange={(e) => setPlaceholder(e.target.value)} className="h-10 w-full rounded-lg border border-black/15 px-3 text-sm" placeholder="Placeholder" />
          <input value={helperText} onChange={(e) => setHelperText(e.target.value)} className="h-10 w-full rounded-lg border border-black/15 px-3 text-sm" placeholder="Helper text" />
          <input value={error} onChange={(e) => setError(e.target.value)} className="h-10 w-full rounded-lg border border-black/15 px-3 text-sm" placeholder="Error text" />
          <label className="grid gap-1 text-sm">
            <span>Radius ({radiusPx}px)</span>
            <input type="range" min={0} max={28} value={radiusPx} onChange={(e) => setRadiusPx(Number(e.target.value))} />
          </label>
          <label className="inline-flex items-center gap-2 text-sm">
            <input type="checkbox" checked={disabled} onChange={(e) => setDisabled(e.target.checked)} />
            isDisabled
          </label>
          <pre className="overflow-x-auto rounded-lg border border-black/10 bg-black/[.03] p-3 text-xs"><code>{snippet}</code></pre>
        </div>
      </div>
    </div>
  );
}

export function SelectDemo() {
  return (
    <div className="sm:max-w-sm">
      <Select defaultValue="starter">
        <SelectTrigger>
          <SelectValue placeholder="Choose plan" />
        </SelectTrigger>
        <SelectContent>
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
  const snippet = `<Select defaultValue="${value}">...</Select>`;
  return (
    <div className="overflow-hidden rounded-2xl border border-black/10 bg-white dark:border-white/15 dark:bg-white/5">
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
          <pre className="overflow-x-auto rounded-lg border border-black/10 bg-black/[.03] p-3 text-xs"><code>{snippet}</code></pre>
        </div>
      </div>
    </div>
  );
}

export function TextareaDemo() {
  return (
    <div className="grid gap-3 sm:max-w-lg">
      <Textarea placeholder="Write your message" />
      <Textarea error="Message is required" placeholder="Required field" />
    </div>
  );
}

export function TextareaPlayground() {
  const [placeholder, setPlaceholder] = React.useState("Write your message");
  const [error, setError] = React.useState("");
  const [disabled, setDisabled] = React.useState(false);
  const [radiusPx, setRadiusPx] = React.useState(10);
  const snippet = `<Textarea placeholder="${placeholder}"${error ? ` error="${error}"` : ""}${disabled ? " disabled" : ""} style={{ borderRadius: "${radiusPx}px" }} />`;
  return (
    <div className="overflow-hidden rounded-2xl border border-black/10 bg-white dark:border-white/15 dark:bg-white/5">
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
          <pre className="overflow-x-auto rounded-lg border border-black/10 bg-black/[.03] p-3 text-xs"><code>{snippet}</code></pre>
        </div>
      </div>
    </div>
  );
}

export function CheckboxDemo() {
  return (
    <div className="flex items-center gap-3">
      <Checkbox defaultChecked id="terms" />
      <label htmlFor="terms" className="text-sm">Accept terms</label>
    </div>
  );
}

export function RadioDemo() {
  return (
    <RadioGroup defaultValue="starter" className="grid gap-2">
      <label className="inline-flex items-center gap-2 text-sm"><RadioItem value="starter" /> Starter</label>
      <label className="inline-flex items-center gap-2 text-sm"><RadioItem value="pro" /> Pro</label>
    </RadioGroup>
  );
}

export function SwitchDemo() {
  return (
    <div className="flex items-center gap-3">
      <Switch defaultChecked id="notifications" />
      <label htmlFor="notifications" className="text-sm">Enable notifications</label>
    </div>
  );
}
