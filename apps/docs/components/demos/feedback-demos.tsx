"use client";

import * as React from "react";
import { Alert, Avatar, Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@altech-ui/react";
import { GeneratedCode } from "@/components/generated-code";

export function AlertDemo() {
  return (
    <div className="pt-3 mx-auto grid w-full max-w-2xl gap-3">
      <Alert title="Heads up" description="This is a default alert." />
      <Alert variant="success" title="Success" description="Data has been saved." />
      <Alert variant="warning" title="Warning" description="Please review required fields." />
      <Alert variant="danger" title="Danger" description="Unable to process request." />
    </div>
  );
}

export function AlertPlayground() {
  const [variant, setVariant] = React.useState<"default" | "success" | "warning" | "danger">("default");
  const [title, setTitle] = React.useState("Heads up");
  const [description, setDescription] = React.useState("This is an alert message.");
  const snippet = `import { Alert } from "@altech-ui/react";

export function Example() {
  return (
    <Alert
      variant="${variant}"
      title="${title}"
      description="${description}"
    />
  );
}`;
  return (
    <div className="playground-panel overflow-hidden rounded-2xl border border-black/15 bg-white dark:border-white/25 dark:bg-white/5">
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
          <GeneratedCode code={snippet} />
        </div>
      </div>
    </div>
  );
}

export function AvatarDemo() {
  return (
    <div className="pt-3 flex items-center justify-center gap-3">
      <Avatar alt="Lukman" fallback="LU" variant="circle" size="md" />
      <Avatar src="https://i.pravatar.cc/80?img=12" alt="User" variant="rounded" size="lg" />
      <Avatar alt="Nina" fallback="NI" variant="square" size="xl" />
    </div>
  );
}

export function TooltipDemo() {
  return (
    <div className="pt-3 flex justify-center">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="secondary">Hover me</Button>
          </TooltipTrigger>
          <TooltipContent variant="brand" size="md">Export this report</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
