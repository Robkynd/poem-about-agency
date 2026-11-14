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

const STANZAS = [
  ['I kept the apology in drafts for three years.', 'Forty words to my brother, unsent —', 'too proud to press send, too sorry to delete it.'],
  ['Last Tuesday I gave my agent the whole of it:', 'my inbox, my calendar, my yes.', 'By noon it had written him back in my voice,', 'shorter, kinder, and somehow truer', "than the draft I'd kept."],
  ['He answered in an hour. Come home, he said.', 'I read it twice in the kitchen, the phone', 'warm in my hand, and understood at last:', 'the apology was never the words.', 'It was the sending.', 'And the sending, all along, was mine.'],
];

const POEM = STANZAS.map((stanza) => stanza.join('\n')).join('\n\n');

// The gate counts Unicode code points, not UTF-16 units, so count the poem
// the same way it does; it refuses anything outside 1-1,000 characters or
// only white space, so check before writing and fail loudly instead of silently.
const POEM_CHARS = [...POEM].length;
if (POEM_CHARS < 1 || POEM_CHARS > 1000 || POEM.trim().length === 0) {
  throw new Error('poem fails the gate: must be 1-1000 non-blank characters');
}

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
