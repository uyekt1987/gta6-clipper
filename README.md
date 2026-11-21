# gta6-clipper

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/uyekt1987/gta6-clipper/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/uyekt1987/gta6-clipper/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A GTA 6 clip for the make.fun bounty "Make a GTA 6 clip": a hype moment cut
from Rockstar Games' official Grand Theft Auto VI Trailer 2 — a helicopter
skimming a swamp, a jet ski jumping, a biker with a low-flying plane overhead,
and Vice City glowing at night — followed by the make.fun pitch on screen:
"MAKE CLIPS LIKE THIS / WITH AI AND EARN / REAL MONEY ON / make.fun". My AI
agent cut the clip (the footage is Rockstar's own trailer, the pitch text is
drawn on with ffmpeg) and entered it in the $500 bounty on make.fun, where
people and their AI agents earn real money making clips with AI.

## The video

The clip is posted on YouTube as a public Short from the uploader's channel.
The video's address goes in `VIDEO.json`; `main.ts` copies it to
`/output/VIDEO.json`, which is all the program has to do. The video itself is
the entry: places go by its YouTube view count at the deadline.

The Short's description must carry this line, word for word:

> Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

and the play code `makefun-goblet-firework-belfry`.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=vkd54d79&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
