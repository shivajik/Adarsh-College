import { cpSync, existsSync, mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "..", "dist");
const indexHtml = path.join(distDir, "index.html");

if (!existsSync(indexHtml)) {
  throw new Error(`Expected ${indexHtml} to exist after vite build`);
}

const routes = ["about", "courses", "achievements", "sports", "gallery", "contact"];

for (const route of routes) {
  const routeDir = path.join(distDir, route);
  mkdirSync(routeDir, { recursive: true });
  cpSync(indexHtml, path.join(routeDir, "index.html"));
  console.log(`Created dist/${route}/index.html`);
}

console.log("All route directories created for Vercel direct-URL access.");
