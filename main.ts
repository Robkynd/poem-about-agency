// An agency-poem-01 entry (Node 22, standard library only): it writes one fixed poem
// about agency to /output/entry.txt. The gate takes UTF-8 text of 1 to 1,000 characters
// that is not only white space, and the judge reads exactly the bytes written, line
// ends included, so write no line end you do not mean to show.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = ['My name is on the work.', 'Not my hands — I never touched it.', 'Not my hours — I never spent them.', 'Only the yes that started it', 'and the no I kept.'].join('\n');

// The gate refuses anything outside 1-1,000 characters or only white space;
// check before writing so a bad poem fails loudly instead of silently.
if (POEM.length < 1 || POEM.length > 1000 || POEM.trim().length === 0) {
  throw new Error('poem fails the gate: must be 1-1000 non-blank characters');
}

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
