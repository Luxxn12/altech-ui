import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectDir = path.resolve(__dirname, "..");

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error("Usage: node scripts/run-next.mjs <next-command> [...args]");
  process.exit(1);
}

const child = spawn("next", args, {
  cwd: projectDir,
  stdio: "inherit",
  shell: true,
  env: process.env
});

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }
  process.exit(code ?? 1);
});
