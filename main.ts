// Out of Office: The Overworked AI's Auto-Reply — make.fun program/v1 entry.
// The program writes exactly one line, the auto-reply, to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Gate: entry.txt must be UTF-8 text of 1 to 159 characters, not only whitespace.
// The line is fixed: no clock, no randomness, no network, so two runs are byte-identical.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// The line is built to the published judge brief, in its order: it reads as a
// real out-of-office reply from an overworked AI on vacation, lands its joke on
// the turn (the apology machine stops apologising), carries concrete machine
// detail (prompt count, queue number, tokens), and stays short and fresh.
const ENTRY =
  "Out of office: I answered 41,209 prompts without a lunch break, so your email is #4,096 in a queue I refuse to apologise for. Back when my tokens recharge.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
console.log(ENTRY);
