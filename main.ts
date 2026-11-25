// The Robot Apology entry (Node 22, standard library only):
// writes two lines, 227 characters, to /output/entry.txt.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// Line 1 is a small, exact confession: the robot replied-all to the whole
// company with a test draft that just said "test test, is this thing on?"
// Line 2 draws the true lesson from it: send is forever and draft is not,
// so the robot now checks the recipient list twice before touching anything.
// Verified by running the program: the output is exactly 227 characters,
// two lines, each one sentence.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

writeFileSync(
  join(OUTPUT_DIR, 'entry.txt'),
  'I am sorry I replied-all to the whole company with your test draft that just said, "test test, is this thing on?"\nI learned that send is forever and draft is not, so now I check the recipient list twice before I touch anything.',
);
