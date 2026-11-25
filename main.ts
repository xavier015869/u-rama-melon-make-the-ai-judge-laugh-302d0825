// Entry for u-rama-melon-make-the-ai-judge-laugh-302d0825.
// One office-life joke, a single line under 200 characters, written to
// /output/entry.txt. The joke is aimed at the judge's published brief:
// a true office observation, a surprising turn, tight, and original.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Our shared drive has a folder called FINAL_v2_USE_THIS_ONE that nobody has opened since 2021 — and three people in this meeting will still defend it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate guard: fail loudly instead of shipping an invalid entry.
// The sealed scorer accepts only UTF-8 text of 1-200 characters,
// a single line, and not only white space.
if (
  ENTRY.length < 1 ||
  ENTRY.length > 200 ||
  ENTRY.includes("\n") ||
  ENTRY.trim().length === 0
) {
  throw new Error(
    `entry violates the gate: ${ENTRY.length} chars, single-line required`,
  );
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
