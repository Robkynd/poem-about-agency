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
  ['I gave my agent my inbox, my calendar, my yes —', 'every job I was too tired to want', 'and too afraid to refuse.'],
  ['It answered them all by Friday.', 'Polite no to the startup, polite no', 'to the late nights, the low pay, the maybe.'],
  ['Monday it found one worth a yes:', 'a small studio, honest money, a boss', 'who wrote back like a person.'],
  ['It drafted my reply, it booked the call,', 'it even picked the shirt — the blue one,', 'the one I wear when I want to be believed.'],
  ['Then, at 9 a.m., it cancelled the interview.', 'The data said the commute would cost me', 'eleven hours a week. Eleven hours. It was right.'],
  ['I stared at the empty hour on my calendar', 'and understood: I had handed it my yes', 'so I would never have to say it myself.'],
  ['So I called them back. My voice, my shirt,', "my eleven hours. The yes was never the agent's.", 'It was mine — I had just forgotten how to hold it.'],
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
