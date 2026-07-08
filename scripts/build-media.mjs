/**
 * Builds all optimized site media from the masters in new_pictures/ into public/media/.
 * Masters stay out of git (see .gitignore); rerun after replacing a master:
 *   npm run media
 */
import { execFileSync } from 'node:child_process';
import { mkdirSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
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
const STUDIO_TABLET = path.join(SRC, 'HexaStudio Tablet.png');
const LOGO_MASTER = path.join(SRC, 'logo-master.png');

const out = (name) => path.join(OUT, name);
const pub = (name) => path.join(ROOT, 'public', name);

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

// --- Brand icons from the logo master (favicons, PWA, navbar mark) ---
const TRANSPARENT = { r: 0, g: 0, b: 0, alpha: 0 };
const logoTrim = await sharp(LOGO_MASTER).trim().toBuffer(); // drop transparent margin
const logoIcon = (n, bg) => sharp(logoTrim).resize(n, n, { fit: 'contain', background: bg });
await logoIcon(48, TRANSPARENT).png().toFile(pub('favicon-48x48.png'));
await logoIcon(96, TRANSPARENT).png().toFile(pub('favicon-96x96.png'));
// Rendered at ~36 CSS px in the navbar — keep it tiny (retina-safe at ~100px).
await sharp(logoTrim).resize({ height: 100 }).png().toFile(pub('logo-nav.png'));
// Padded on black for the iOS touch icon + PWA maskable icons (safe zone).
for (const [n, pad, name] of [[180, 0.12, 'apple-touch-icon.png'], [192, 0.16, 'logo-192.png'], [512, 0.16, 'logo-512.png']]) {
  const inner = Math.round(n * (1 - pad * 2));
  const logo = await sharp(logoTrim).resize(inner, inner, { fit: 'contain', background: TRANSPARENT }).png().toBuffer();
  await sharp({ create: { width: n, height: n, channels: 4, background: '#000000' } })
    .composite([{ input: logo, gravity: 'center' }]).png().toFile(pub(name));
}
// favicon.ico — one 48x48 PNG wrapped in an ICO container (sharp can't write .ico).
const icoPng = await logoIcon(48, TRANSPARENT).png().toBuffer();
const icoHead = Buffer.alloc(6); icoHead.writeUInt16LE(1, 2); icoHead.writeUInt16LE(1, 4);
const icoEntry = Buffer.alloc(16);
icoEntry.writeUInt8(48, 0); icoEntry.writeUInt8(48, 1);
icoEntry.writeUInt16LE(1, 4); icoEntry.writeUInt16LE(32, 6);
icoEntry.writeUInt32LE(icoPng.length, 8); icoEntry.writeUInt32LE(22, 12);
writeFileSync(pub('favicon.ico'), Buffer.concat([icoHead, icoEntry, icoPng]));

// --- og:image (public/og-cover.jpg) ---
// A committed branded card (logo + HEXAKINETICA wordmark + tagline on black),
// rendered from HTML with the real Michroma/Inter fonts — sharp has no browser/
// font pipeline, so `npm run media` intentionally leaves og-cover.jpg untouched.

// --- HexaStudio tablet: showcase sources for the Software section ---
// The 1.646 render sits on pure black, which dissolves into the page (same
// trick as the hero). Flatten so any alpha resolves to black, never white.
// A touch higher quality than the hero because the UI carries fine text.
for (const width of [2560, 1600]) {
  const base = sharp(STUDIO_TABLET).flatten({ background: '#000000' }).resize({ width });
  await base.clone().avif({ quality: 58 }).toFile(out(`studio-${width}.avif`));
  await base.clone().webp({ quality: 74 }).toFile(out(`studio-${width}.webp`));
}
await sharp(STUDIO_TABLET)
  .flatten({ background: '#000000' })
  .resize({ width: 1600 })
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(out('studio-1600.jpg'));

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
// (HexaStudio's Platform tile is now the studio-* render, generated above — no
// separate HMI tile.)

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

// --- Exploded scrub frames (desktop canvas sequence) ---
// The desktop scrub draws these to a <canvas> instead of seeking the mp4, so
// motion is smooth at any scroll speed (see ExplodedView.tsx). The centered
// square crop equals what object-cover already shows on the live <video>, so
// frames are pixel-parity with the current display — no quality regression.
const FRAMES = path.join(OUT, 'frames');
const FRAMES_TMP = path.join(ROOT, '.tmp-frames'); // gitignored; cleaned each run
const FRAME_FPS = 30; // ≈ every source frame (~300) — finest possible steps
const FRAME_QUALITY = 80;

// Clean + recreate so stale frames never linger (also handles a crashed run).
rmSync(FRAMES, { recursive: true, force: true });
rmSync(FRAMES_TMP, { recursive: true, force: true });
mkdirSync(FRAMES, { recursive: true });
mkdirSync(FRAMES_TMP, { recursive: true });

// 1) ffmpeg: fps downsample + centered square crop → full-res 1080² PNG stills.
//    crop=1080:1080 defaults x=(iw-ow)/2, y=(ih-oh)/2 → exact center square.
run([
  '-y', '-i', EXPLODED_VIDEO,
  '-vf', `fps=${FRAME_FPS},crop=1080:1080`,
  '-start_number', '0',
  path.join(FRAMES_TMP, 'frame-%03d.png'),
]);

// 2) sharp: WebP encode (crop is already 1080², no downscale) — matches the
//    rest of the pipeline and keeps quality at/above the current H.264 video.
const pngs = readdirSync(FRAMES_TMP).filter((f) => f.endsWith('.png')).sort();
let frameIndex = 0;
for (const png of pngs) {
  await sharp(path.join(FRAMES_TMP, png))
    .webp({ quality: FRAME_QUALITY })
    .toFile(path.join(FRAMES, `frame-${String(frameIndex).padStart(3, '0')}.webp`));
  frameIndex++;
}
rmSync(FRAMES_TMP, { recursive: true, force: true });
// FRAME_COUNT in ExplodedView.tsx must match this number.
console.log(`Exploded frames: ${frameIndex} × 1080² → ${FRAMES}`);

console.log('Media build complete →', OUT);
