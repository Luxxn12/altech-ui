# Altech UI

Altech UI adalah monorepo untuk component library React + TypeScript dengan docs site modern.

## Packages

- `@altech-ui/react`: reusable UI components (typed, accessible, animated).
- `@altech-ui/docs`: website dokumentasi berbasis Next.js.

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

## Struktur

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

Perintah utama:

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

Import style token sekali di app:

```ts
import "@altech-ui/react/styles.css";
```

## Contoh Pakai

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

## Komponen Saat Ini

- Button
- Input
- Card
- Badge
- Table
- Modal

Semua komponen:

- support `className` override
- typed dengan TypeScript
- menggunakan `forwardRef` untuk elemen yang butuh ref
- variant system dengan `class-variance-authority`
- util `cn()` (`clsx` + `tailwind-merge`)
- animasi micro-interaction (hover/tap/focus/open/close) + `prefers-reduced-motion`

## Theming Tokens

```css
:root {
  --altech-background: #f7fafc;
  --altech-foreground: #0e1628;
  --altech-primary: #0f62fe;
  --altech-primary-foreground: #f8fbff;
  --altech-muted: #e9effa;
  --altech-border: #d5dfef;
  --altech-danger: #d92d20;
  --altech-success: #12b76a;
  --altech-warning: #f79009;
}
```

## Publish ke npm

1. Login npm:

```bash
npm login
```

2. Pastikan versi package sudah benar di `packages/react/package.json`.

3. Build + verifikasi:

```bash
pnpm build
pnpm lint
pnpm typecheck
```

4. Publish package:

```bash
pnpm --filter @altech-ui/react publish --access public
```

Atau gunakan script:

```bash
pnpm release
```

## Development Notes

- Docs app berjalan di `apps/docs`.
- Library output:
  - `dist/index.js`
  - `dist/index.mjs`
  - `dist/index.d.ts`
  - `dist/styles.css`

## License

MIT
