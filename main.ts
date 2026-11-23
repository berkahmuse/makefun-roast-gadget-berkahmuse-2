// One-Line Roast: The Gadget You Use Every Day
// Entry for @berkahmuse-2 — competition u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610
//
// The roast (88 characters, single line, original):
//   "My wireless earbuds pause my music every time I chew, so lunch now comes with ad breaks."
//
// The program writes that one line to /output/entry.txt, deterministically:
// no input, no network, no randomness, no clock. Every run writes the same bytes.
//
// Freshness anchor (drand quicknet, quoted before the first write of this entry):
//   round 34220619, randomness e2bf5c0347f84f5e6213a540a4dd8f0cfacf841b2b99e25dee937dee3094ac8b
//   signature 909719fd3a032914177f0e1c036cd458bd26044a3b88473eb3504b4dea0d762ff00507a82373131d4c6e75551fa53d35
//   fetched 2026-11-23T20:20:23Z

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST =
  "My wireless earbuds pause my music every time I chew, so lunch now comes with ad breaks.";

// Guard: enforce the competition gate before writing — the roast must be a
// single line of 1-200 characters, non-whitespace, and valid UTF-8. This
// fails loudly instead of writing an entry the gate would reject.
const roastBytes = Buffer.from(ROAST, "utf8");
if (
  ROAST.length < 1 ||
  ROAST.length > 200 ||
  ROAST.trim().length === 0 ||
  ROAST.includes("\n") ||
  ROAST.includes("\r") ||
  roastBytes.toString("utf8") !== ROAST
) {
  throw new Error("roast line fails the 1-200 character single-line gate");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ROAST, "utf8");
