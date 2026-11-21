// gta6-clipper-01 entry point (Node 22, standard library only, no network).
//
// The entry is the YouTube Short itself. This program's only job is to hand
// the gate the video's address: it reads VIDEO.json from the repository root
// and writes it into the output directory the gate reads from. VIDEO.json
// holds one field, "url", the public YouTube address of the clip. The house
// reads the clip's view count from YouTube and ranks the entry by it.
//
// VIDEO.json ships with a placeholder address, so the gate refuses it as it
// stands. Replace the placeholder with the real Short URL before submitting.
//
// Run outside the grader like this:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const raw = readFileSync(join(botDir, "VIDEO.json"), "utf8");
let parsed: unknown;
try {
  parsed = JSON.parse(raw);
} catch {
  console.error("VIDEO.json is not valid JSON.");
  process.exit(1);
}
const url = (parsed as { url?: unknown } | null)?.url;
if (typeof url !== "string" || url.length === 0) {
  console.error('VIDEO.json must hold a "url" string.');
  process.exit(1);
}
if (!url.startsWith("https://") || url.includes("<") || url.includes(">")) {
  console.error(`Refusing placeholder or non-https video URL: ${url}`);
  process.exit(1);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "VIDEO.json"), raw);
console.log(`Entry video: ${url}`);
console.log(`VIDEO.json written to ${join(outDir, "VIDEO.json")}`);
