"use client";

import * as React from "react";
import { Container, Flex, Grid, Stack, Tabs, TabsContent, TabsList, TabsTrigger } from "@altech-ui/react";
import { GeneratedCode } from "@/components/generated-code";

export function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="pt-3 mx-auto sm:max-w-xl">
      <TabsList variant="boxed">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="billing">Billing</TabsTrigger>
      </TabsList>
      <TabsContent value="account" spacing="lg" className="rounded-lg border p-4 text-sm">Manage profile and login settings.</TabsContent>
      <TabsContent value="billing" spacing="lg" className="rounded-lg border p-4 text-sm">Manage invoices and payment methods.</TabsContent>
    </Tabs>
  );
}

export function TabsPlayground() {
  const [tab, setTab] = React.useState("account");
  const snippet = `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@altech-ui/react";

export function Example() {
  return (
    <Tabs defaultValue="${tab}">
      <TabsList variant="line">
        <TabsTrigger variant="line" value="account">Account</TabsTrigger>
        <TabsTrigger variant="line" value="billing">Billing</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="rounded-lg border p-4 text-sm mt-3">
        Manage profile settings.
      </TabsContent>
      <TabsContent value="billing" className="rounded-lg border p-4 text-sm mt-3">
        Manage payment settings.
      </TabsContent>
    </Tabs>
  );
}`;
  return (
    <div className="playground-panel overflow-hidden rounded-2xl border border-black/15 bg-white dark:border-white/25 dark:bg-white/5">
      <div className="grid min-h-[280px] grid-cols-1 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="p-6 border-b border-black/10 lg:border-b-0 lg:border-r dark:border-white/15">
          <Tabs value={tab} onValueChange={setTab}>
            <TabsList variant="line"><TabsTrigger variant="line" value="account">Account</TabsTrigger><TabsTrigger variant="line" value="billing">Billing</TabsTrigger></TabsList>
            <TabsContent value="account" className="rounded-lg border p-4 text-sm mt-3">Manage profile settings.</TabsContent>
            <TabsContent value="billing" className="rounded-lg border p-4 text-sm mt-3">Manage payment settings.</TabsContent>
          </Tabs>
        </div>
        <div className="space-y-3 p-5">
          <p className="text-sm">Active tab: <code>{tab}</code></p>
          <GeneratedCode code={snippet} />
        </div>
      </div>
    </div>
  );
}

export function LayoutDemo() {
  return (
    <Container className="mx-auto max-w-4xl rounded-xl border pt-7 pb-4">
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
