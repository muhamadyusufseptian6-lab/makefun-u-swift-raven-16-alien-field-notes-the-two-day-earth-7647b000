// TDD-lite checks for the Alien Field Notes entry (kit: program/v1, gate: 1-200 chars UTF-8).
// Run: node test.mjs  (from this directory)
import { spawnSync } from "node:child_process";
import { mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const dir = dirname(fileURLToPath(import.meta.url));
const expected =
  "Earth: the locals carry their pets' poop in little bags like treasure, then let the pet sleep in their bed. 4/5 stars, would abduct again.";

let failures = 0;
function check(name, ok, detail = "") {
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}${detail ? " — " + detail : ""}`);
  if (!ok) failures++;
}

// 1. stdlib-only imports in main.ts
const mainSrc = readFileSync(join(dir, "main.ts"), "utf8");
const imports = [...mainSrc.matchAll(/from\s+["']([^"']+)["']/g)].map((m) => m[1]);
check(
  "stdlib-only imports",
  imports.length > 0 && imports.every((i) => i.startsWith("node:")),
  imports.join(", "),
);

// 2. run main.ts twice into temp dirs, check gate + determinism
function runOnce() {
  const out = mkdtempSync(join(tmpdir(), "alien-entry-"));
  const r = spawnSync(process.execPath, ["main.ts"], {
    cwd: dir,
    env: { ...process.env, MAKEFUN_OUTPUT_DIR: out },
    encoding: "utf8",
  });
  const text = r.status === 0 ? readFileSync(join(out, "entry.txt"), "utf8") : null;
  rmSync(out, { recursive: true, force: true });
  return { status: r.status, stderr: r.stderr, text };
}
const a = runOnce();
const b = runOnce();
check("main.ts exits 0", a.status === 0, a.stderr.trim());
check("entry.txt written", a.text !== null);
if (a.text !== null) {
  check("entry is 1-200 chars", a.text.length >= 1 && a.text.length <= 200, `${a.text.length} chars`);
  check("entry is not only whitespace", a.text.trim().length > 0);
  check("entry is single line", !a.text.includes("\n"));
  check("entry matches the final line", a.text === expected);
}
check("deterministic across runs", a.text !== null && a.text === b.text);

if (failures > 0) {
  console.log(`\n${failures} check(s) failed`);
  process.exit(1);
}
console.log("\nAll checks passed.");
