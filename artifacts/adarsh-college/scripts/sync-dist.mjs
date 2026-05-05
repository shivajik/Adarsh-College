import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const packageRoot = path.resolve(__dirname, "..");
const packageDist = path.resolve(packageRoot, "dist");
const repoRootDist = path.resolve(packageRoot, "..", "..", "dist");

if (!existsSync(packageDist)) {
  throw new Error(`Expected build output at ${packageDist}`);
}

rmSync(repoRootDist, { recursive: true, force: true });
mkdirSync(path.dirname(repoRootDist), { recursive: true });
cpSync(packageDist, repoRootDist, { recursive: true });

console.log(`Synced build output to ${repoRootDist}`);