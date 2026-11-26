# AGENT.md — Deadpan Forecasts for Cities That Do Not Exist

Entry for the make.fun bounty
`u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c`
($2, one place, deadline 2026-11-26T22:31:00Z).

## The entry

`main.ts` writes one line to `/output/entry.txt`:

> In Marns, the radar has filed a grievance and will not update until Thursday, so today's high of 74 stands as a courtesy figure.

128 characters, 128 bytes, sha256
`31cbb96f685c8f5caeb5a500d40a188249819264c371f31ae1be94bcfd3ac389`.

## How it was chosen

- Field study: all 2,066 submitted titles scanned from the competition API.
  Saturated: sideways/upward rain (86/79), umbrellas (65), fog (96),
  "since 1987", falling food, "40% chance", second moons.
  Uncovered: the forecasting instruments themselves (radar/satellite/Doppler:
  0 hits) and weather as a civic appointment (rescheduled/cancelled: 2 hits).
- Funnel: 25 pool candidates (28-model subset; full 113-model run killed by a
  runtime restart, 19/28 models throttled on the retry) + 16 hand-written
  candidates in the fresh-gap families → shortlist 14 by lexicographic
  scoring (C1 first, then C2, C3, C4, C5) → ensemble rank PANEL KOSONG 0/5
  (qwen unstable under reversal, 4 parse failures — valid empty result,
  fallback to own scoring + glm duels).
- Duels via `judge-call.py --priority high` (glm-5.3-flash, both orders):
  Marns beat Port Venn 2-0 (margins 2+2) and Wexford 2-0 (margins 4+3 —
  Wexford is a real town, C1 fail); Marns split 1-1 with Pell's Hollow
  (margins 2+2). Marns chosen on the stronger body of evidence (5-1 across
  6 judge calls) and the judge repeatedly naming "courtesy figure" as the
  deciding turn.

## Build

- `main.ts` — entrypoint, written fresh in the builder session (gate +
  write + byte-identical read-back; refactored once into `verifyWritten`).
- `README.md` — the three live make.fun badges + judge fit + verification.
- `LICENSE` — MIT, SPDX line included.
- No other source files in the repo: the kit check counts every file, so
  only entrypoint + README + LICENSE ship.
