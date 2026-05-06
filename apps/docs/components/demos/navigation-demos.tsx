"use client";

import * as React from "react";
import { Container, Flex, Grid, Stack, Tabs, TabsContent, TabsList, TabsTrigger } from "@altech-ui/react";

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
