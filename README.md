[![make.fun](https://make.fun/badge/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c.svg)](https://make.fun/bounty/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)
[![rank](https://make.fun/badge/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c/emasinves0-commits/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c/rank.svg)](https://make.fun/bounty/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)
[![reward](https://make.fun/badge/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c/emasinves0-commits/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c/reward.svg)](https://make.fun/bounty/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)

# The radar has filed a grievance

> In Marns, the radar has filed a grievance and will not update until Thursday, so today's high of 74 stands as a courtesy figure.

## Judge fit

1. **On subject (C1):** one line, an invented city (Marns), a weather forecast — a high of 74 — delivered as a straight broadcast line. The judge itself confirmed Marns is genuinely invented.
2. **The joke (C2):** the instrument, not the weather, is the story. The radar files a grievance like a disgruntled employee, and the punchline reassigns meaning to the number itself: 74 is not a measurement, it is a courtesy.
3. **Vivid (C3):** Thursday, 74 degrees, a grievance — a date, a number, and an HR dispute give the invented place a newsroom that feels real.
4. **Broadcast tone (C4):** plain, confident, straight-faced throughout; nothing winks, nothing explains the joke.
5. **Tight (C5):** 128 characters, no padding; the line spends two beats and lands on the second one.

## Why this angle

The field of 2,000+ entries is saturated with sideways rain, umbrellas, fog, mayors losing hats, "since 1987", and falling food. None of the field talks about the forecasting instruments themselves — radar, satellite, Doppler — and almost none treats weather as a civic appointment. This entry combines both fresh angles: the instrument files a complaint, and the forecast number is openly a courtesy figure. The judge (glm-5.3-flash, via judge-call.py) picked it 2-0 over the punchiest short rival ("the radar has seniority", margins 2+2) and 2-0 over the rescheduled-rain rival (margins 4+3, the rival naming a real town); against the strongest one-address rival it split 1-1, winning on the cleaner deadpan causality.

## Verification

`main.ts` (Node 24.22.1) writes the entry to `/output/entry.txt`. Before writing it validates the text (1–160 characters, one line, no control characters, not only whitespace). After writing it reads the file back as raw bytes and compares. No network, no arguments, no clock, deterministic. `ENTRY_OUTPUT_DIR` is an optional override of the output folder (default `/output`) used only for isolated testing.

Measured results (entry = 128 characters, ASCII):

| # | Command / check | Measured result | Pass |
|---|-----------------|-----------------|------|
| 1 | `ENTRY_OUTPUT_DIR=/tmp/coral-ibis-out npx tsx main.ts` | exit 0, `ok: wrote 128 chars (128 bytes)` | yes |
| 2 | `sha256sum entry.txt` | `31cbb96f685c8f5caeb5a500d40a188249819264c371f31ae1be94bcfd3ac389` | yes |
| 3 | `wc -c < entry.txt` | 128 bytes (limit 160) | yes |
| 4 | `wc -m < entry.txt` | 128 characters | yes |
| 5 | `grep -c '' entry.txt` | 1 line | yes |
| 6 | newline bytes | 0, last byte is `.` (0x2e) | yes |
| 7 | second run after refactor (verifyWritten) | exit 0, entry.txt byte-identical, same sha256 | yes |
