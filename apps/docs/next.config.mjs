import nextra from "nextra";

const withNextra = nextra({});

export default withNextra({
  transpilePackages: ["@altech-ui/react"],
  turbopack: {
    resolveAlias: {
      "next-mdx-import-source-file": "./mdx-components.tsx"
    }
  }
});
