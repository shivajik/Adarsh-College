// Copies the built artifact from the workspace package to the repo-root `dist/`
// so that Vercel's default Output Directory ("dist") finds it regardless of
// any dashboard overrides.
import { cpSync, rmSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const sourceDist = path.join(repoRoot, "artifacts", "adarsh-college", "dist");
const targetDist = path.join(repoRoot, "dist");

if (!existsSync(sourceDist)) {
  console.error(`[vercel-copy-dist] Source not found: ${sourceDist}`);
  process.exit(1);
}

if (existsSync(targetDist)) {
  rmSync(targetDist, { recursive: true, force: true });
}

cpSync(sourceDist, targetDist, { recursive: true });
console.log(`[vercel-copy-dist] Copied ${sourceDist} -> ${targetDist}`);
