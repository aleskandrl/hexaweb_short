/**
 * Builds the LinkedIn banners into public/, stretched siblings of og-cover.jpg:
 *   - linkedin-cover.jpg          personal profile background, 1584x396 (4:1)
 *   - linkedin-cover-company.jpg  company page cover,          1128x191 (~5.9:1)
 * The two formats differ: the company cover is far wider/shorter and its square
 * logo sits bottom-left (over the art), so it drops the wordmark and shifts the
 * headline right of the logo. Rendered from HTML with the real Michroma/Inter
 * fonts (sharp has no font pipeline), captured via headless Chrome + the DevTools
 * protocol so the exact clip survives Windows' window-size clamp. Rerun with:
 *   node scripts/build-linkedin-cover.mjs
 */
import { spawn, execFileSync } from 'node:child_process';
import { mkdirSync, mkdtempSync, readFileSync, writeFileSync, rmSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { setTimeout as sleep } from 'node:timers/promises';
import sharp from 'sharp';

const ROOT = path.resolve(import.meta.dirname, '..');
const SRC = path.join(ROOT, 'new_pictures');
const SCRATCH = process.env.LINKEDIN_SCRATCH || path.join(ROOT, '.tmp-linkedin'); // gitignored
rmSync(SCRATCH, { recursive: true, force: true });
mkdirSync(SCRATCH, { recursive: true });

const SYSTEM_PHOTO = path.join(SRC, 'hexakinetica family controller robot and tablet.png');
const LOGO_MASTER = path.join(SRC, 'logo-master.png');
const FONTS = path.join(ROOT, 'public', 'fonts');
const OUT_DIR = path.join(ROOT, 'public');
const SCALE = 2; // render at 2x, supersample down for crisp text

// --- Product crop from the 2:1 master (4000x2000) --------------------------
// The product cluster (cabinet 1000 .. arm 3050, centre ~2025) sits centred in
// the crop, with equal black margin either side. Mirrored gradients then fade
// BOTH edges into black, so the photo dissolves symmetrically — no hard cut on
// either side — while the cabinet/arm stay full-bright in the clear middle.
const CROP = { left: 350, top: 140, width: 3350, height: 1720 }; // 350..3700, centre 2025

// Nudge the whole photo (both fades move with it) off the right edge toward
// centre (~4.5 cm on screen). Fraction of banner width, so both formats match.
const PHOTO_SHIFT = 0.15;
// Drop the photo down so the table meets the bottom edge and the dark strip
// below it (table front / shadow) clips off. Fraction of banner height.
const PHOTO_VSHIFT = 0.09;

// --- Target formats --------------------------------------------------------
// fade: [solid%, clear%] of the photo width for ONE edge; mirrored to the other
// edge so both sides dissolve identically. clear% must stay below the product
// edges (~19% / ~81%). copyLeft clears the company logo box.
const FORMATS = [
  { name: 'linkedin-cover', W: 1584, H: 396, wordmark: true,
    copyLeft: 96, copyCentered: false, headlineSize: 42, fade: [5, 17] },
  { name: 'linkedin-cover-company', W: 1128, H: 191, wordmark: false,
    copyLeft: 250, copyCentered: true, headlineSize: 22, fade: [5, 17] },
];

const dataUri = (buf, mime) => `data:${mime};base64,${buf.toString('base64')}`;
const font = (f) => dataUri(readFileSync(path.join(FONTS, f)), 'font/woff2');

async function buildAssets() {
  const photo = await sharp(SYSTEM_PHOTO).extract(CROP).webp({ quality: 84 }).toBuffer();
  const logo = await sharp(LOGO_MASTER).trim().resize({ height: 200 }).png().toBuffer();
  return {
    photo: dataUri(photo, 'image/webp'),
    logo: dataUri(logo, 'image/png'),
    michroma: font('michroma-400.woff2'),
    inter400: font('inter-400.woff2'),
    inter500: font('inter-500.woff2'),
  };
}

function html(a, fmt) {
  const { W, H, wordmark, copyLeft, copyCentered, headlineSize, fade } = fmt;
  const photoW = Math.round(H * CROP.width / CROP.height);
  const shift = Math.round(W * PHOTO_SHIFT); // px the photo sits in from the right edge
  const vshift = Math.round(H * PHOTO_VSHIFT); // px the photo drops below centre
  const copyPos = copyCentered
    ? `top:50%;transform:translateY(-50%)`
    : `top:${Math.round(H * 0.43)}px`;
  const mark = wordmark
    ? `<div class="mark"><img src="${a.logo}" alt=""><span class="word">HEXAKINETICA</span></div>`
    : '';
  return `<!doctype html><html><head><meta charset="utf-8"><style>
  @font-face{font-family:'Michroma';src:url(${a.michroma}) format('woff2')}
  @font-face{font-family:'Inter';font-weight:400;src:url(${a.inter400}) format('woff2')}
  @font-face{font-family:'Inter';font-weight:500;src:url(${a.inter500}) format('woff2')}
  *{margin:0;padding:0;box-sizing:border-box}
  html,body{width:${W}px;height:${H}px;background:#000;overflow:hidden}
  .banner{position:relative;width:${W}px;height:${H}px;background:#000}

  /* Product: full arm, height-fit, nudged in from the right edge; the mirrored
     fade blends both sides, and its own black blends into the banner. */
  .photo{position:absolute;right:${shift}px;top:50%;transform:translateY(calc(-50% + ${vshift}px));height:${H}px;width:${photoW}px;display:block}
  /* Mirrored fade: dissolve BOTH edges of the photo into black (left into the
     text area, right into the margin). The cabinet/arm sit in the clear middle. */
  .photo-fade{position:absolute;right:${shift}px;top:0;height:${H}px;width:${photoW}px;
    background:linear-gradient(90deg,#000 0%,#000 ${fade[0]}%,rgba(0,0,0,0) ${fade[1]}%,rgba(0,0,0,0) ${100 - fade[1]}%,#000 ${100 - fade[0]}%,#000 100%)}

  /* Brand lock-up, top-left (profile only). */
  .mark{position:absolute;left:96px;top:56px;display:flex;align-items:center;gap:18px}
  .mark img{height:44px;width:auto;display:block}
  .mark .word{font-family:'Michroma';font-size:23px;letter-spacing:.24em;color:#f4f4f5;
    line-height:1;transform:translateY(-2px)}

  .copy{position:absolute;left:${copyLeft}px;${copyPos}}
  .headline{font-family:'Michroma';font-size:${headlineSize}px;line-height:1.16;color:#f4f4f5;letter-spacing:.01em}
  .headline .dim{color:rgba(255,255,255,.4)}
  </style></head><body>
  <div class="banner">
    <img class="photo" src="${a.photo}" alt="">
    <div class="photo-fade"></div>
    ${mark}
    <div class="copy">
      <div class="headline">WE BUILD ROBOTS<br><span class="dim">DIFFERENTLY</span></div>
    </div>
  </div>
  </body></html>`;
}

// --- Minimal CDP client over Node's built-in WebSocket ---------------------
function cdp(url) {
  const ws = new WebSocket(url);
  const pending = new Map();
  const waiters = [];
  let id = 0;
  ws.addEventListener('message', (e) => {
    const msg = JSON.parse(e.data);
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      msg.error ? reject(new Error(JSON.stringify(msg.error))) : resolve(msg.result);
    } else if (msg.method) {
      for (let i = waiters.length - 1; i >= 0; i--) {
        if (waiters[i].method === msg.method) waiters.splice(i, 1)[0].resolve(msg.params);
      }
    }
  });
  const ready = new Promise((res, rej) => {
    ws.addEventListener('open', res);
    ws.addEventListener('error', rej);
  });
  const send = (method, params = {}, sessionId) =>
    new Promise((resolve, reject) => {
      const mid = ++id;
      pending.set(mid, { resolve, reject });
      ws.send(JSON.stringify({ id: mid, method, params, ...(sessionId ? { sessionId } : {}) }));
    });
  const once = (method) => new Promise((resolve) => waiters.push({ method, resolve }));
  return { ready, send, once, close: () => ws.close() };
}

async function render(a, fmt) {
  const htmlFile = path.join(SCRATCH, `${fmt.name}.html`);
  writeFileSync(htmlFile, html(a, fmt));
  const fileUrl = 'file:///' + htmlFile.replace(/\\/g, '/');

  const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
  // A unique profile per run: a stale SingletonLock in a shared dir makes a new
  // headless Chrome attach to the old instance instead of opening its own port.
  const userDir = mkdtempSync(path.join(tmpdir(), 'hexa-linkedin-'));
  const chromeLog = path.join(SCRATCH, 'chrome.log');
  const chrome = spawn(CHROME, [
    '--headless=new', '--disable-gpu', '--hide-scrollbars', '--no-first-run',
    '--no-default-browser-check', '--disable-extensions',
    '--remote-debugging-port=0', '--remote-allow-origins=*',
    `--user-data-dir=${userDir}`, 'about:blank',
  ], { stdio: ['ignore', 'ignore', (await import('node:fs')).openSync(chromeLog, 'w')] });

  const killTree = () => {
    try { execFileSync('taskkill', ['/PID', String(chrome.pid), '/T', '/F'], { stdio: 'ignore' }); } catch {}
  };

  try {
    // Chrome writes the chosen port to DevToolsActivePort in the profile dir.
    const portFile = path.join(userDir, 'DevToolsActivePort');
    let port;
    for (let i = 0; i < 300; i++) {
      if (existsSync(portFile)) {
        const line = readFileSync(portFile, 'utf8').split('\n')[0].trim();
        if (line) { port = line; break; }
      }
      await sleep(100);
    }
    if (!port) throw new Error(`Chrome did not expose a debugging port. See ${chromeLog}`);

    const ver = await (await fetch(`http://127.0.0.1:${port}/json/version`)).json();
    const c = cdp(ver.webSocketDebuggerUrl);
    await c.ready;

    const { targetId } = await c.send('Target.createTarget', { url: 'about:blank' });
    const { sessionId } = await c.send('Target.attachToTarget', { targetId, flatten: true });

    await c.send('Page.enable', {}, sessionId);
    await c.send('Emulation.setDeviceMetricsOverride',
      { width: fmt.W, height: fmt.H, deviceScaleFactor: SCALE, mobile: false }, sessionId);

    const loaded = c.once('Page.loadEventFired');
    await c.send('Page.navigate', { url: fileUrl }, sessionId);
    await loaded;

    // Wait for @font-face to finish + two frames so text is painted.
    await c.send('Runtime.evaluate', {
      expression: 'document.fonts.ready.then(()=>new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(()=>r(true)))))',
      awaitPromise: true,
    }, sessionId);

    const { data } = await c.send('Page.captureScreenshot', {
      format: 'png',
      clip: { x: 0, y: 0, width: fmt.W, height: fmt.H, scale: 1 },
      captureBeyondViewport: true,
    }, sessionId);

    c.close();
    return Buffer.from(data, 'base64');
  } finally {
    killTree();
    // Best-effort: Chrome may still hold handles right after taskkill, so a failed
    // temp cleanup must never mask the render result (it lives under the OS temp).
    await sleep(400);
    try { rmSync(userDir, { recursive: true, force: true }); } catch {}
  }
}

const assets = await buildAssets();
for (const fmt of FORMATS) {
  const png = await render(assets, fmt); // fmt.W*2 x fmt.H*2
  const outJpg = path.join(OUT_DIR, `${fmt.name}.jpg`);
  // Supersample down to the exact LinkedIn size for crisp text.
  await sharp(png).resize(fmt.W, fmt.H).jpeg({ quality: 92, mozjpeg: true }).toFile(outJpg);
  // Keep the crisp 2x too, for inspection / high-DPI use.
  await sharp(png).jpeg({ quality: 94, mozjpeg: true }).toFile(path.join(SCRATCH, `${fmt.name}@2x.jpg`));
  const meta = await sharp(outJpg).metadata();
  console.log(`${fmt.name}: ${meta.width}x${meta.height} -> ${outJpg}`);
}
