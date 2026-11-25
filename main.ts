// Repotted Into a Mug — One Star, Written in Sap.
// Writes one one-line 1-star review, in the voice of a houseplant
// about its human owner, to /output/entry.txt.
// The review is fixed text, so every run writes byte-identical output.
// Before writing, the program enforces the competition gate itself:
// UTF-8 text, 1 to 279 characters, not only white space, one line.
import { mkdirSync, writeFileSync } from "node:fs";

const REVIEW =
  "One star. He repotted me into a mug and called it minimalism.";

const chars = [...REVIEW].length;
if (chars < 1 || chars > 279 || REVIEW.trim().length === 0 || REVIEW.includes("\n")) {
  console.error(`gate failed: review is ${chars} characters`);
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REVIEW, "utf8");
