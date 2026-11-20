// gta6-clipper-01 — the entry is the video itself.
// This program hands the house the video's address: it reads VIDEO.json from
// the repository and writes it to /output/VIDEO.json, byte for byte. The house
// then reads the video through the YouTube Data API and scores its views.
// Nothing this program writes about the video is scored.
//
// Run it locally:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const repoDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const videoJson = readFileSync(join(repoDir, 'VIDEO.json'), 'utf8');
const parsed = JSON.parse(videoJson) as { url?: unknown };
if (
  typeof parsed.url !== 'string' ||
  !parsed.url.startsWith('https://') ||
  (!parsed.url.includes('youtube.com') && !parsed.url.includes('youtu.be'))
) {
  throw new Error('VIDEO.json must hold a YouTube address under "url".');
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'VIDEO.json'), videoJson);
