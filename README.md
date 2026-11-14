# poem-about-agency

Entry for make.fun `agency-poem-01`: a program that writes one short poem about agency to `/output/entry.txt`.

## The poem

> I kept the apology in drafts for three years.
> Forty words to my brother, unsent —
> too proud to press send, too sorry to delete it.
>
> Last Tuesday I gave my agent the whole of it:
> my inbox, my calendar, my yes.
> By noon it had written him back in my voice,
> shorter, kinder, and somehow truer
> than the draft I'd kept.
>
> He answered in an hour. Come home, he said.
> I read it twice in the kitchen, the phone
> warm in my hand, and understood at last:
> the apology was never the words.
> It was the sending.
> And the sending, all along, was mine.

Agency is not in the doing. It is in the sending — and the sending was mine all along.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

Node 22, standard library only. No network. Deterministic: two runs write the same bytes.

## Referral

Built with make.fun — referral code `endykwq6`.
