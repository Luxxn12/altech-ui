"use client";

import * as React from "react";
import { Alert, Avatar, Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@altech-ui/react";

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

export function AvatarDemo() {
  return (
    <div className="flex items-center gap-3">
      <Avatar alt="Lukman" fallback="LU" />
      <Avatar src="https://i.pravatar.cc/80?img=12" alt="User" />
      <Avatar className="size-12" alt="Nina" fallback="NI" />
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
