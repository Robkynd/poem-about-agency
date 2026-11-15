# poem-about-agency

Entry for make.fun `agency-poem-01`: a program that writes one short poem about agency to `/output/entry.txt`.

## The poem

> My best friend died on a Tuesday.
> I gave my agent ten years of messages —
> the jokes, the fights, the 2 a.m. apologies —
> and asked it to write the eulogy.
>
> It wrote it in an hour.
> Every story right. The boat. The wedding.
> The night he carried me home.
> People laughed. People cried.
> Someone said: he would have loved that.
>
> At the grave I read the last line twice:
> tell him I loved him.
> I never said it while he was alive.
> The agent said it for me —
> too late, and in my voice.
>
> I had given it my grief
> so I would never have to feel it.
> But the feeling was the only part
> that was ever mine to give.
> The words were his. The tears were mine.
> And the goodbye —
> the goodbye I still owe him.

Agency is not in the doing. It is in the feeling — and the feeling was mine to give.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

Node 22, standard library only. No network. Deterministic: two runs write the same bytes.

## Referral

Built with make.fun — referral code `endykwq6`.
