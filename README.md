# Altech UI

Altech UI is a monorepo for a React + TypeScript component library with a modern documentation site.

## Why Developers Choose Altech UI

Altech UI is built for teams that want to ship UI faster without losing styling control.
Instead of rebuilding common UI patterns from scratch, developers can focus on product logic.

Core value:

- less boilerplate for common components (button, input, modal, table, and more)
- simple component APIs that stay flexible for real-world use cases
- Tailwind-friendly by design via `className` overrides
- typed, accessible, and consistent defaults across components

## Key Advantages

- Productivity-first:
  - ready-to-use components, variants, and common states
- Flexible styling:
  - override with Tailwind utility classes whenever needed
- TypeScript-first:
  - stronger autocomplete and safer UI development
- Consistent design primitives:
  - centralized color/radius/border tokens
- Better UX by default:
  - micro-interactions + `prefers-reduced-motion` support
- Easy adoption:
  - can be adopted incrementally, no big-bang migration required

## Best For

- startup and product teams moving fast
- freelancers or agencies that need high reusability across projects
- internal teams that want UI standardization without limiting creativity

## Packages

- `@altech-ui/react`: reusable UI components (typed, accessible, animated).
- `@altech-ui/docs`: documentation website built with Next.js.

## Tech Stack

- pnpm workspace
- Turborepo
- React 19
- TypeScript
- Tailwind CSS v4
- Next.js (docs app)
- tsup (library build)
- ESLint + Prettier
- Framer Motion
- Radix UI (Dialog primitive)
- class-variance-authority + clsx + tailwind-merge

## Structure

```txt
altech-ui/
  apps/
    docs/
      app/
      components/
      content/
      package.json
  packages/
    react/
      src/
        components/
          button/
          input/
          card/
          badge/
          table/
          modal/
        hooks/
        utils/
        styles/
        index.ts
      package.json
      tsconfig.json
      tsup.config.ts
  package.json
  pnpm-workspace.yaml
  turbo.json
  README.md
```

## Quick Start

```bash
pnpm install
pnpm dev
```

Main scripts:

```bash
pnpm dev
pnpm build
pnpm lint
pnpm typecheck
pnpm release
```

## Install Library

```bash
pnpm add @altech-ui/react
```

Import style tokens once in your app:

```ts
import "@altech-ui/react/styles.css";
```

## Usage Example

```tsx
import { Button, Input, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@altech-ui/react";

export function Example() {
  return (
    <div className="space-y-4">
      <Button variant="primary">Primary</Button>
      <Input label="Email" placeholder="email@example.com" />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Lukman</TableCell>
            <TableCell>lukman@example.com</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
```

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

All components:

- support `className` overrides
- are fully typed with TypeScript
- use `forwardRef` where needed
- use `class-variance-authority` for variants
- use `cn()` (`clsx` + `tailwind-merge`)
- include micro-interactions (hover/tap/focus/open/close) + `prefers-reduced-motion`

## Theming Tokens

```css
:root {
  --altech-background: #f7fafc;
  --altech-foreground: #0e1628;
  --altech-radius: 10px;
  --altech-primary: #0f62fe;
  --altech-primary-foreground: #f8fbff;
  --altech-muted: #e9effa;
  --altech-border: #d5dfef;
  --altech-danger: #d92d20;
  --altech-success: #12b76a;
  --altech-warning: #f79009;
}
```

## Publish to npm

1. Log in to npm:

```bash
npm login
```

2. Ensure the package version is correct in `packages/react/package.json`.

3. Build + verify:

```bash
pnpm build
pnpm lint
pnpm typecheck
```

4. Publish the package:

```bash
pnpm --filter @altech-ui/react publish --access public
```

Or use the release script:

```bash
pnpm release
```

## Development Notes

- The docs app runs in `apps/docs`.
- Library output:
  - `dist/index.js`
  - `dist/index.mjs`
  - `dist/index.d.ts`
  - `dist/styles.css`

## License

MIT
