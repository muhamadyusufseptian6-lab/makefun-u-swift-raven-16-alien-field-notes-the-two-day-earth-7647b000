// Alien Field Notes: The Two Day Earth Review
// Writes one original line — an alien tourist's review of planet Earth —
// to $MAKEFUN_OUTPUT_DIR/entry.txt (fallback: /output/entry.txt).
// Node 22, stdlib-only, deterministic: the same run always writes the same bytes.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Resolve paths from this script's location, never from process.cwd().
const repoDir = dirname(fileURLToPath(import.meta.url));
void repoDir;

const entry =
  "Earth: the locals carry their pets' poop in little bags like treasure, then let the pet sleep in their bed. 4/5 stars, would abduct again.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), entry, "utf8");
