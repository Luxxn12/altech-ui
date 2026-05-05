"use client";

import * as React from "react";

import {
  Alert,
  Avatar,
  Badge,
  Button,
  Checkbox,
  Container,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
  Flex,
  Grid,
  Input,
  Modal,
  RadioGroup,
  RadioItem,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalClose,
  ModalTitle,
  ModalTrigger,
  Stack,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@altech-ui/react";

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
    if (sizePx <= 38) {
      return "sm";
    }
    if (sizePx >= 50) {
      return "lg";
    }
    return "md";
  }, [sizePx]);

  const snippet = React.useMemo(() => {
    const props: string[] = [];

    if (variant !== "default") {
      props.push(`variant="${variant}"`);
    }
    if (size !== "md") {
      props.push(`size="${size}"`);
    }
    if (isLoading) {
      props.push("isLoading");
    }
    if (disabled) {
      props.push("disabled");
    }
    const generatedStyle = `style={{ height: "${sizePx}px", borderRadius: "${radiusPx}px", backgroundColor: "${color}" }}`;
    if (variant !== "outline" && variant !== "ghost") {
      props.push(generatedStyle);
      if (extraClassName.trim()) {
        props.push(`className="${extraClassName.trim()}"`);
      }
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
                  if (/^#([0-9A-Fa-f]{6})$/.test(next)) {
                    setColor(next);
                  }
                }}
                placeholder="#ea8435"
                className="h-9 flex-1 rounded-lg border border-black/15 bg-white px-3 text-xs outline-none focus:border-blue-500 dark:border-white/20 dark:bg-black/20"
              />
            </div>
          </div>

          <label className="grid gap-1.5 text-sm">
            <span className="font-medium">Size ({sizePx}px)</span>
            <input
              type="range"
              min={34}
              max={56}
              step={1}
              value={sizePx}
              onChange={(event) => setSizePx(Number(event.target.value))}
            />
          </label>

          <label className="grid gap-1.5 text-sm">
            <span className="font-medium">Radius ({radiusPx}px)</span>
            <input
              type="range"
              min={0}
              max={40}
              step={1}
              value={radiusPx}
              onChange={(event) => setRadiusPx(Number(event.target.value))}
            />
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

export function TableDemo() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Lukman</TableCell>
          <TableCell>lukman@example.com</TableCell>
          <TableCell>Admin</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Hana</TableCell>
          <TableCell>hana@example.com</TableCell>
          <TableCell>Editor</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

export function TablePlayground() {
  const [loading, setLoading] = React.useState(false);
  const [radiusPx, setRadiusPx] = React.useState(10);
  const [rows, setRows] = React.useState(3);
  const snippet = `<div style={{ "--altech-radius": "${radiusPx}px" } as React.CSSProperties}><Table>...</Table></div>`;
  const names = ["Lukman", "Hana", "Ari", "Nina", "Rio"];

  return (
    <div className="overflow-hidden rounded-2xl border border-black/10 bg-white dark:border-white/15 dark:bg-white/5">
      <div className="grid min-h-[420px] grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div
          className="border-b border-black/10 p-6 lg:border-b-0 lg:border-r dark:border-white/15"
          style={{ "--altech-radius": `${radiusPx}px` } as React.CSSProperties}
        >
          <Table>
            <TableHeader>
              <TableRow><TableHead>Name</TableHead><TableHead>Email</TableHead><TableHead>Role</TableHead></TableRow>
            </TableHeader>
            <TableBody isLoading={loading} loadingRows={rows}>
              {Array.from({ length: rows }).map((_, i) => (
                <TableRow key={i}>
                  <TableCell>{names[i] ?? `User ${i + 1}`}</TableCell>
                  <TableCell>user{i + 1}@example.com</TableCell>
                  <TableCell>{i % 2 ? "Editor" : "Admin"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="space-y-3 p-5">
          <label className="inline-flex items-center gap-2 text-sm"><input type="checkbox" checked={loading} onChange={(e) => setLoading(e.target.checked)} />isLoading</label>
          <label className="grid gap-1 text-sm"><span>Rows ({rows})</span><input type="range" min={2} max={5} value={rows} onChange={(e) => setRows(Number(e.target.value))} /></label>
          <label className="grid gap-1 text-sm"><span>Radius ({radiusPx}px)</span><input type="range" min={0} max={24} value={radiusPx} onChange={(e) => setRadiusPx(Number(e.target.value))} /></label>
          <pre className="overflow-x-auto rounded-lg border border-black/10 bg-black/[.03] p-3 text-xs"><code>{snippet}</code></pre>
        </div>
      </div>
    </div>
  );
}

export function ModalDemo() {
  return (
    <Modal>
      <ModalTrigger asChild>
        <Button variant="primary">Open modal</Button>
      </ModalTrigger>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Delete project</ModalTitle>
          <ModalDescription>
            This action cannot be undone. Please confirm to continue.
          </ModalDescription>
        </ModalHeader>
        <ModalFooter>
          <ModalClose asChild>
            <Button variant="ghost">Cancel</Button>
          </ModalClose>
          <ModalClose asChild>
            <Button variant="danger">Delete</Button>
          </ModalClose>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export function ModalPlayground() {
  const [title, setTitle] = React.useState("Delete project");
  const [description, setDescription] = React.useState("This action cannot be undone. Please confirm to continue.");
  const [radiusPx, setRadiusPx] = React.useState(10);
  const [confirmLabel, setConfirmLabel] = React.useState("Delete");

  return (
    <div className="overflow-hidden rounded-2xl border border-black/10 bg-white dark:border-white/15 dark:bg-white/5">
      <div className="grid min-h-[320px] grid-cols-1 lg:grid-cols-[minmax(0,1fr)_340px]">
        <div className="flex items-center justify-center border-b border-black/10 p-6 lg:border-b-0 lg:border-r dark:border-white/15">
          <Modal>
            <ModalTrigger asChild>
              <Button variant="primary">Open preview modal</Button>
            </ModalTrigger>
            <ModalContent style={{ "--altech-radius": `${radiusPx}px` } as React.CSSProperties}>
              <ModalHeader>
                <ModalTitle>{title}</ModalTitle>
                <ModalDescription>{description}</ModalDescription>
              </ModalHeader>
              <ModalFooter>
                <ModalClose asChild><Button variant="ghost">Cancel</Button></ModalClose>
                <ModalClose asChild><Button variant="danger">{confirmLabel}</Button></ModalClose>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
        <div className="space-y-3 p-5">
          <input value={title} onChange={(e) => setTitle(e.target.value)} className="h-10 w-full rounded-lg border border-black/15 px-3 text-sm" placeholder="Title" />
          <input value={description} onChange={(e) => setDescription(e.target.value)} className="h-10 w-full rounded-lg border border-black/15 px-3 text-sm" placeholder="Description" />
          <input value={confirmLabel} onChange={(e) => setConfirmLabel(e.target.value)} className="h-10 w-full rounded-lg border border-black/15 px-3 text-sm" placeholder="Confirm button label" />
          <label className="grid gap-1 text-sm"><span>Radius ({radiusPx}px)</span><input type="range" min={0} max={24} value={radiusPx} onChange={(e) => setRadiusPx(Number(e.target.value))} /></label>
          <pre className="overflow-x-auto rounded-lg border border-black/10 bg-black/[.03] p-3 text-xs"><code>{`<Modal>...</Modal>`}</code></pre>
        </div>
      </div>
    </div>
  );
}

export function AlertDemo() {
  return (
    <div className="grid gap-3">
      <Alert title="Heads up" description="This is a default alert." />
      <Alert variant="success" title="Success" description="Data has been saved." />
      <Alert variant="warning" title="Warning" description="Please review required fields." />
      <Alert variant="danger" title="Danger" description="Unable to process request." />
    </div>
  );
}

export function AvatarDemo() {
  return (
    <div className="flex items-center gap-3">
      <Avatar alt="Lukman" fallback="LU" />
      <Avatar src="https://i.pravatar.cc/80?img=12" alt="User" />
      <Avatar className="size-12" alt="Nina" fallback="NI" />
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

export function TextareaDemo() {
  return (
    <div className="grid gap-3 sm:max-w-lg">
      <Textarea placeholder="Write your message" />
      <Textarea error="Message is required" placeholder="Required field" />
    </div>
  );
}

export function DropdownDemo() {
  return (
    <Dropdown>
      <DropdownTrigger asChild>
        <Button variant="outline">Open menu</Button>
      </DropdownTrigger>
      <DropdownContent>
        <DropdownItem>Profile</DropdownItem>
        <DropdownItem>Settings</DropdownItem>
        <DropdownItem>Sign out</DropdownItem>
      </DropdownContent>
    </Dropdown>
  );
}

export function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="sm:max-w-xl">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="billing">Billing</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="rounded-lg border p-4 text-sm">Manage profile and login settings.</TabsContent>
      <TabsContent value="billing" className="rounded-lg border p-4 text-sm">Manage invoices and payment methods.</TabsContent>
    </Tabs>
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

export function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="secondary">Hover me</Button>
        </TooltipTrigger>
        <TooltipContent>Export this report</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export function LayoutDemo() {
  return (
    <Container className="rounded-xl border py-4">
      <Stack className="gap-3">
        <Flex className="items-center justify-between rounded-lg bg-black/[.04] p-3 text-sm dark:bg-white/[.08]">
          <span>Header</span>
          <span>Actions</span>
        </Flex>
        <Grid className="grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-lg bg-black/[.04] p-4 text-sm dark:bg-white/[.08]">Card A</div>
          <div className="rounded-lg bg-black/[.04] p-4 text-sm dark:bg-white/[.08]">Card B</div>
          <div className="rounded-lg bg-black/[.04] p-4 text-sm dark:bg-white/[.08]">Card C</div>
        </Grid>
      </Stack>
    </Container>
  );
}

export function AlertPlayground() {
  const [variant, setVariant] = React.useState<"default" | "success" | "warning" | "danger">("default");
  const [title, setTitle] = React.useState("Heads up");
  const [description, setDescription] = React.useState("This is an alert message.");
  const snippet = `<Alert variant="${variant}" title="${title}" description="${description}" />`;
  return (
    <div className="overflow-hidden rounded-2xl border border-black/10 bg-white dark:border-white/15 dark:bg-white/5">
      <div className="grid min-h-[280px] grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="flex items-center justify-center border-b border-black/10 p-6 lg:border-b-0 lg:border-r dark:border-white/15">
          <div className="w-full max-w-md">
            <Alert variant={variant} title={title} description={description} />
          </div>
        </div>
        <div className="space-y-3 p-5">
          <select value={variant} onChange={(e) => setVariant(e.target.value as typeof variant)} className="h-10 w-full rounded-lg border border-black/15 px-3 text-sm"><option value="default">default</option><option value="success">success</option><option value="warning">warning</option><option value="danger">danger</option></select>
          <input value={title} onChange={(e) => setTitle(e.target.value)} className="h-10 w-full rounded-lg border border-black/15 px-3 text-sm" placeholder="Title" />
          <input value={description} onChange={(e) => setDescription(e.target.value)} className="h-10 w-full rounded-lg border border-black/15 px-3 text-sm" placeholder="Description" />
          <pre className="overflow-x-auto rounded-lg border border-black/10 bg-black/[.03] p-3 text-xs"><code>{snippet}</code></pre>
        </div>
      </div>
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

export function TabsPlayground() {
  const [tab, setTab] = React.useState("account");
  const snippet = `<Tabs defaultValue="${tab}">...</Tabs>`;
  return (
    <div className="overflow-hidden rounded-2xl border border-black/10 bg-white dark:border-white/15 dark:bg-white/5">
      <div className="grid min-h-[280px] grid-cols-1 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="p-6 border-b border-black/10 lg:border-b-0 lg:border-r dark:border-white/15">
          <Tabs value={tab} onValueChange={setTab}>
            <TabsList><TabsTrigger value="account">Account</TabsTrigger><TabsTrigger value="billing">Billing</TabsTrigger></TabsList>
            <TabsContent value="account" className="rounded-lg border p-4 text-sm mt-3">Manage profile settings.</TabsContent>
            <TabsContent value="billing" className="rounded-lg border p-4 text-sm mt-3">Manage payment settings.</TabsContent>
          </Tabs>
        </div>
        <div className="space-y-3 p-5">
          <p className="text-sm">Active tab: <code>{tab}</code></p>
          <pre className="overflow-x-auto rounded-lg border border-black/10 bg-black/[.03] p-3 text-xs"><code>{snippet}</code></pre>
        </div>
      </div>
    </div>
  );
}
