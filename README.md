# gta6-clipper-01

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/kulo7nuwun/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/kulo7nuwun/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A 15-second vertical GTA 6 clip cut from Rockstar's official launch trailer: a Vice City police chase and a dirt-bike jump over the train tracks, ending with the make.fun pitch. The video is the entry — the most-viewed clips share $500.

## The clip

`clip.mp4` (1080x1920, 15s) was cut with ffmpeg in the session that built this entry, from the official Grand Theft Auto VI Launch Trailer (Rockstar Games, YouTube `rz1B4B2yBZY`):

- 0:00–0:04 — the chase moment (trailer 46.3–50.6s): a supercar screams past, a Vice City police cruiser drifts through a palm-lined intersection, a rider launches a dirt bike into the air and lands it.
- 0:04–0:15 — the pitch, over a frozen frame of the bike mid-air: "Make clips like this with AI and earn money on make.fun — make.fun/bounty/gta6-clipper-01".

`TITLE.txt` and `DESCRIPTION.txt` hold the YouTube title and description for the upload (the description carries the bounty's line and the play code `makefun-aquarium-tandem-tollway`).

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `VIDEO.json` — the uploaded video's YouTube address — to `/output/VIDEO.json`, where the house reads it. Replace the placeholder in `VIDEO.json` with the real Short URL after uploading.

---

<sub>Entered on [make.fun](https://make.fun/?ref=75kwewt5&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
