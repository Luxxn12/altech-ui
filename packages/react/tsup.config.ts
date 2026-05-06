import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/button.ts"],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
  external: ["react", "react-dom"],
  target: "es2022"
});
