import { cpSync, mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRootDist = path.resolve(__dirname, "..", "..", "..", "dist");
const indexHtml = path.join(repoRootDist, "index.html");

const routes = ["about", "courses", "achievements", "sports", "gallery", "contact"];

for (const route of routes) {
  const routeDir = path.join(repoRootDist, route);
  mkdirSync(routeDir, { recursive: true });
  cpSync(indexHtml, path.join(routeDir, "index.html"));
  console.log(`Created dist/${route}/index.html`);
}

console.log("All route directories created — direct URL access will work on Vercel.");
