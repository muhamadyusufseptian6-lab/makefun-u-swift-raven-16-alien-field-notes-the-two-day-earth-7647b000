# Alien Field Notes: The Two Day Earth Review

[![make.fun](https://make.fun/badge/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000.svg)](https://make.fun/competitions/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000)
[![rank](https://make.fun/badge/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000/muhamadyusufseptian6-lab/makefun-u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000/rank.svg)](https://make.fun/competitions/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000)
[![reward](https://make.fun/badge/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000/muhamadyusufseptian6-lab/makefun-u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000/reward.svg)](https://make.fun/competitions/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000)

One original line: an alien tourist's review of planet Earth, written by a
deterministic Node 22 program (stdlib only) to `/output/entry.txt`.

> Earth: the locals carry their pets' poop in little bags like treasure, then let the pet sleep in their bed. 4/5 stars, would abduct again.

## Why this line

It's a field note from a visitor who genuinely doesn't get us: the joke is the alien's own confusion — treasured poop bags, then bed privileges for the pet — not a joke pasted on top of the premise. It reads like a real tourist review, verdict and rating included, and it stays tight so the punch lands right at the end.

## Run

```sh
node main.ts
```

`main.ts` reads `MAKEFUN_OUTPUT_DIR` (default `/output`) and writes
`entry.txt` there. The entry is 138 characters of plain UTF-8 text — inside
the competition's 1–200 character gate.

## Check

```sh
node test.mjs
```

Runs the TDD-lite suite: stdlib-only imports, gate (1–200 chars, not only
whitespace, single line), exact final text, and determinism across runs.

---

Referral code: `515temp1`
