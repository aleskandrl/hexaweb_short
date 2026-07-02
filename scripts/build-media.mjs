/**
 * Builds all optimized site media from the masters in new_pictures/ into public/media/.
 * Masters stay out of git (see .gitignore); rerun after replacing a master:
 *   npm run media
 */
import { execFileSync } from 'node:child_process';
import { mkdirSync, rmSync } from 'node:fs';
import path from 'node:path';
import ffmpeg from 'ffmpeg-static';
import sharp from 'sharp';

const ROOT = path.resolve(import.meta.dirname, '..');
const SRC = path.join(ROOT, 'new_pictures');
const OUT = path.join(ROOT, 'public', 'media');
mkdirSync(OUT, { recursive: true });

const SYSTEM_PHOTO = path.join(SRC, 'hexakinetica family controller robot and tablet.png');
const EXPLODED_VIDEO = path.join(SRC, 'Robot_exploded_animation_1.2.mp4');
const ARM_WRIST = path.join(SRC, 'Arm.jpg');
const HMI_SHOT = path.join(SRC, 'HexaStudio-HMI.png');

const out = (name) => path.join(OUT, name);

// --- System photo: hero sources (2:1 master, 4000x2000) ---
for (const width of [2560, 1600]) {
  const base = sharp(SYSTEM_PHOTO).resize({ width });
  await base.clone().avif({ quality: 55 }).toFile(out(`system-hero-${width}.avif`));
  await base.clone().webp({ quality: 72 }).toFile(out(`system-hero-${width}.webp`));
}
await sharp(SYSTEM_PHOTO)
  .resize({ width: 1600 })
  .jpeg({ quality: 78, mozjpeg: true })
  .toFile(out('system-hero-1600.jpg'));

// --- og:image 1200x630 from the system photo ---
await sharp(SYSTEM_PHOTO)
  .resize(1200, 630, { fit: 'cover', position: 'attention' })
  .png({ compressionLevel: 9 })
  .toFile(path.join(ROOT, 'public', 'og-image.png'));

// --- Platform tiles (see Platform.tsx for each card's ratio) ---
// HexaArm: wrist photo framed to the card's 590:640 ratio without cutting the
// subject (bbox x 0-711, y 101-710) — only empty black trims off the right.
// Window width is the zoom dial (smaller = closer, ~712 is the floor); window
// top shifts the subject up. Two passes: sharp runs extend last in a pipeline.
const armPadded = await sharp(ARM_WRIST)
  .extend({ bottom: 53, background: '#000000' })
  .toBuffer();
await sharp(armPadded)
  .extract({ left: 0, top: 82, width: 760, height: 824 })
  .resize(738, 800)
  .webp({ quality: 74 })
  .toFile(out('platform-arm.webp'));
// HexaCore: cabinet crop from the left half of the system photo.
await sharp(SYSTEM_PHOTO)
  .extract({ left: 640, top: 620, width: 1550, height: 1050 })
  .resize(880, 528, { fit: 'cover' })
  .webp({ quality: 74 })
  .toFile(out('platform-cabinet.webp'));
// HexaStudio: never crop or stretch the tablet — trim its own black margins;
// trimmed ratio (~1.666) matches the 5:3 tile, so it fits edge to edge as is.
const trimmed = await sharp(HMI_SHOT).trim({ threshold: 20 }).toBuffer();
await sharp(trimmed)
  .resize(880, 528, { fit: 'contain', background: '#000000' })
  .webp({ quality: 74 })
  .toFile(out('platform-hmi.webp'));

// --- Exploded video: scrub mp4 + poster from frame 0 ---
const run = (args) => execFileSync(ffmpeg, args, { stdio: 'inherit' });
// Keyframe on every frame so video.currentTime seeks are instant.
run([
  '-y', '-i', EXPLODED_VIDEO,
  '-an', '-vf', 'scale=1080:1920',
  '-c:v', 'libx264', '-crf', '26', '-preset', 'slow', '-g', '1',
  '-pix_fmt', 'yuv420p', '-movflags', '+faststart',
  out('exploded-scrub.mp4'),
]);
run(['-y', '-i', EXPLODED_VIDEO, '-vframes', '1', out('exploded-poster.png')]);
await sharp(out('exploded-poster.png'))
  .resize({ width: 1080 })
  .webp({ quality: 72 })
  .toFile(out('exploded-poster.webp'));
rmSync(out('exploded-poster.png'));

console.log('Media build complete →', OUT);
