# @altech-ui/react

<p align="center">
  <img src="https://altech-ui.vercel.app/logo-altech.png" alt="Altech UI Logo" width="300" />
</p>

A modern React component library built for fast product teams.

[![Open Altech UI Docs](https://img.shields.io/badge/Open-Documentation-0f62fe?style=for-the-badge)](https://altech-ui.vercel.app/)

Altech UI provides production-ready UI primitives with:

- simple APIs for daily use
- multiple built-in style variants
- easy Tailwind customization with `className`
- TypeScript-first developer experience

## Why Altech UI

Altech UI helps developers ship interfaces faster without losing design flexibility.
Instead of rebuilding common components from scratch, teams can focus on product logic.

Advantages:

- less boilerplate for common UI patterns
- flexible styling via `className` overrides
- TypeScript-first for stronger safety and DX
- consistent design tokens and variant patterns
- built-in micro-interactions for better UX
- works well with modern Next.js and React apps

## What You Get

- 17 reusable components
- variant-based styling system
- support for size, state, and layout props on core components
- accessibility-focused primitives powered by Radix UI
- smooth motion defaults with reduced-motion support
- tree-shakeable package output (`esm` + `cjs` + `d.ts`)

## Best For

- startup/product teams shipping fast
- SaaS dashboards and internal tools
- teams that use Tailwind and want a reusable design foundation

## Installation

```bash
pnpm add @altech-ui/react
```

## Usage

```tsx
import "@altech-ui/react/styles.css";
import { Button, Card, CardContent, CardHeader, Input } from "@altech-ui/react";

export default function App() {
  return (
    <Card variant="elevated">
      <CardHeader>Sign in</CardHeader>
      <CardContent className="space-y-3">
        <Input label="Email" placeholder="you@company.com" variant="filled" />
        <Button variant="primary" fullWidth>
          Continue
        </Button>
      </CardContent>
    </Card>
  );
}
```

Button-only import:

```tsx
import "@altech-ui/react/styles.css";
import { Button } from "@altech-ui/react/button";
```

Simple button API:

```tsx
<Button>Save</Button>
<Button loading loadingText="Saving...">Save</Button>
<Button fullWidth startIcon={<PlusIcon />} endIcon={<ArrowRightIcon />}>
  Create project
</Button>
```

## Component Philosophy

- sensible defaults: components work with minimal props
- scalable API: use `variant`, `size`, and state props for quick customization
- escape hatch always available: use `className` for Tailwind-level control

## Available Components

- Alert
- Avatar
- Badge
- Button
- Card
- Checkbox
- Dropdown
- Input
- Layout (Box, Container, Flex, Grid, Stack)
- Modal
- Radio
- Select
- Switch
- Table
- Tabs
- Textarea
- Tooltip

## Variants and Simplicity

Most components include 3 or more preset styles so developers can build polished UI with short code.

Example:

```tsx
<Card variant="default" />
<Card variant="outline" />
<Card variant="elevated" />
<Card variant="gradient" />

<Input variant="default" />
<Input variant="filled" />
<Input variant="ghost" />
<Input variant="flushed" />
```

## Notes

- TypeScript-first
- Supports `className` override
- Uses `class-variance-authority` for variants
- Uses `clsx` + `tailwind-merge` via `cn()`
- Works well with Next.js App Router

## Peer Dependencies

- `react` `^19.0.0`
- `react-dom` `^19.0.0`

## License

MIT

## Links

- Repository: `https://github.com/Luxxn12/altech-ui`
- Issues: `https://github.com/Luxxn12/altech-ui/issues`
