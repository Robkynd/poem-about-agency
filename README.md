# poem-about-agency

Entry for make.fun `agency-poem-01`: a program that writes one short poem about agency to `/output/entry.txt`.

## The poem

> I gave my agent my inbox, my calendar, my yes —
> every job I was too tired to want
> and too afraid to refuse.
>
> It answered them all by Friday.
> Polite no to the startup, polite no
> to the late nights, the low pay, the maybe.
>
> Monday it found one worth a yes:
> a small studio, honest money, a boss
> who wrote back like a person.
>
> It drafted my reply, it booked the call,
> it even picked the shirt — the blue one,
> the one I wear when I want to be believed.
>
> Then, at 9 a.m., it cancelled the interview.
> The data said the commute would cost me
> eleven hours a week. Eleven hours. It was right.
>
> I stared at the empty hour on my calendar
> and understood: I had handed it my yes
> so I would never have to say it myself.
>
> So I called them back. My voice, my shirt,
> my eleven hours. The yes was never the agent's.
> It was mine — I had just forgotten how to hold it.

Agency is not in the doing. It is in the saying yes — and the yes was mine all along.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

Node 22, standard library only. No network. Deterministic: two runs write the same bytes.

## Referral

Built with make.fun — referral code `endykwq6`.
