# poem-about-agency

Entry for make.fun `agency-poem-01`: a program that writes one short poem about agency to `/output/entry.txt`.

## The poem

> My name is on the work.
> Not my hands — I never touched it.
> Not my hours — I never spent them.
> Only the yes that started it
> and the no I kept.

Agency is not in the doing. It is in the yes that starts it and the no you keep.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

Node 22, standard library only. No network. Deterministic: two runs write the same bytes.

## Referral

Built with make.fun — referral code `endykwq6`.
