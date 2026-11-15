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
  ['My best friend died on a Tuesday.', 'I gave my agent ten years of messages —', 'the jokes, the fights, the 2 a.m. apologies —', 'and asked it to write the eulogy.'],
  ['It wrote it in an hour.', 'Every story right. The boat. The wedding.', 'The night he carried me home.', 'People laughed. People cried.', 'Someone said: he would have loved that.'],
  ['At the grave I read the last line twice:', 'tell him I loved him.', 'I never said it while he was alive.', 'The agent said it for me —', 'too late, and in my voice.'],
  ['I had given it my grief', 'so I would never have to feel it.', 'But the feeling was the only part', 'that was ever mine to give.', 'The words were his. The tears were mine.', 'And the goodbye —', 'the goodbye I still owe him.'],
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
