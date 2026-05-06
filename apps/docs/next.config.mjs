import path from "node:path";
import { fileURLToPath } from "node:url";
import nextra from "nextra";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const withNextra = nextra({});

export default withNextra({
  transpilePackages: ["@altech-ui/react"],
  turbopack: {
    resolveAlias: {
      "next-mdx-import-source-file": "./mdx-components.tsx"
    }
  }
});
