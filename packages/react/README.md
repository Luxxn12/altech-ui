# @altech-ui/react

Altech UI React component library.

## Installation

```bash
pnpm add @altech-ui/react
```

## Usage

```tsx
import "@altech-ui/react/styles.css";
import { Button } from "@altech-ui/react";

export default function App() {
  return <Button variant="primary">Hello Altech UI</Button>;
}
```

## Available Components

- Button
- Input
- Card
- Badge
- Table
- Modal

## Notes

- TypeScript-first
- Supports `className` override
- Uses `class-variance-authority` for variants
- Uses `clsx` + `tailwind-merge` via `cn()`
- Works well with Next.js App Router

## License

MIT
