import { spawn } from "node:child_process";
import { readdir } from "node:fs/promises";
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

function parsePort(nextArgs) {
  for (let index = 0; index < nextArgs.length; index += 1) {
    const arg = nextArgs[index];
    if (arg === "--port" || arg === "-p") {
      const value = Number(nextArgs[index + 1]);
      if (Number.isFinite(value)) return value;
    }
    if (arg.startsWith("--port=")) {
      const value = Number(arg.slice("--port=".length));
      if (Number.isFinite(value)) return value;
    }
  }
  return 3000;
}

async function collectPageFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const results = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...(await collectPageFiles(fullPath)));
      continue;
    }

    if (entry.isFile() && entry.name === "page.mdx") {
      results.push(fullPath);
    }
  }

  return results;
}

function toRoute(appDir, pageFile) {
  const rel = path.relative(appDir, pageFile).split(path.sep).join("/");
  const routePath = rel.replace(/\/page\.mdx$/, "");
  return routePath.length > 0 ? `/${routePath}` : "/";
}

async function collectWarmupRoutes(projectRoot) {
  const appDir = path.join(projectRoot, "app");
  const docsDir = path.join(appDir, "docs");
  const pageFiles = await collectPageFiles(docsDir);
  const routes = pageFiles.map((file) => toRoute(appDir, file));

  // Keep predictable order: parent routes warm up before deep routes.
  return [...new Set(routes)].sort((a, b) => a.length - b.length || a.localeCompare(b));
}

async function warmupDevRoutes({ projectRoot, port, isProcessAlive }) {
  if (process.env.NEXT_DISABLE_DEV_WARMUP === "1") return;

  let routes = [];
  try {
    routes = await collectWarmupRoutes(projectRoot);
  } catch (error) {
    console.warn("[dev-warmup] failed to collect routes:", error);
    return;
  }

  if (routes.length === 0) return;
  console.log(`[dev-warmup] warming ${routes.length} docs routes on :${port}`);

  for (const route of routes) {
    if (!isProcessAlive()) return;
    try {
      const response = await fetch(`http://127.0.0.1:${port}${route}`, {
        headers: { "x-dev-warmup": "1" }
      });
      // Consume response body so the request fully completes.
      await response.arrayBuffer();
      console.log(`[dev-warmup] ${response.status} ${route}`);
    } catch (error) {
      // If the dev server is shutting down, skip noisy fetch failures.
      if (!isProcessAlive()) return;
      console.warn(`[dev-warmup] failed ${route}:`, error);
      return;
    }
  }

  console.log("[dev-warmup] complete");
}

const command = args[0];
const isDevCommand = command === "dev";
const port = parsePort(args);

const child = spawn("next", args, {
  cwd: projectDir,
  stdio: ["inherit", "pipe", "pipe"],
  shell: true,
  env: process.env
});

let warmed = false;
let childExited = false;
const maybeStartWarmup = (chunk) => {
  if (!isDevCommand || warmed) return;
  if (!chunk.includes("Ready in") && !chunk.includes("Local:")) return;
  warmed = true;
  void warmupDevRoutes({
    projectRoot: projectDir,
    port,
    isProcessAlive: () => !childExited
  });
};

child.stdout.on("data", (chunk) => {
  const text = chunk.toString();
  process.stdout.write(chunk);
  maybeStartWarmup(text);
});

child.stderr.on("data", (chunk) => {
  const text = chunk.toString();
  process.stderr.write(chunk);
  maybeStartWarmup(text);
});

child.on("exit", (code, signal) => {
  childExited = true;
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }
  process.exit(code ?? 1);
});
