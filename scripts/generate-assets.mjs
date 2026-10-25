// Regenerates raster brand assets in public/ from SVG/HTML sources.
//   node scripts/generate-assets.mjs
// Icons are rendered with sharp; the social card (og.png) with headless Chrome
// so it uses the real web fonts.
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = fileURLToPath(new URL('..', import.meta.url));
const pub = (f) => `${root}public/${f}`;

// Full-bleed square mark (Apple touch icon, schema.org logo).
const square = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" fill="#141a17"/><g transform="translate(4.8 4.8) scale(0.7)"><circle cx="11" cy="21" r="4" fill="none" stroke="#ffffff" stroke-width="2.2"/><path d="M13.9 18.1 17.6 14.4" stroke="#ffffff" stroke-width="2.2"/><rect x="17" y="7" width="8" height="8" fill="#8fa6f0"/></g></svg>`;
const favicon = readFileSync(pub('favicon.svg'));

await sharp(Buffer.from(square), { density: 1200 }).resize(180, 180).png().toFile(pub('apple-touch-icon.png'));
await sharp(Buffer.from(square), { density: 1200 }).resize(512, 512).png().toFile(pub('logo.png'));

// favicon.ico holding a single 32×32 PNG (supported by every current browser).
const png32 = await sharp(favicon, { density: 600 }).resize(32, 32).png().toBuffer();
const header = Buffer.alloc(22);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // type: icon
header.writeUInt16LE(1, 4); // image count
header.writeUInt8(32, 6); // width
header.writeUInt8(32, 7); // height
header.writeUInt8(0, 8); // palette size
header.writeUInt8(0, 9); // reserved
header.writeUInt16LE(1, 10); // color planes
header.writeUInt16LE(32, 12); // bits per pixel
header.writeUInt32LE(png32.length, 14); // image size
header.writeUInt32LE(22, 18); // image offset
writeFileSync(pub('favicon.ico'), Buffer.concat([header, png32]));

const chrome = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
if (existsSync(chrome)) {
  execFileSync(chrome, [
    '--headless=new',
    '--disable-gpu',
    '--hide-scrollbars',
    '--force-device-scale-factor=1',
    '--window-size=1200,630',
    `--screenshot=${pub('og.png')}`,
    `file://${root}scripts/og.html`,
  ]);
} else {
  console.warn('Chrome not found; skipped og.png');
}

console.log('Generated apple-touch-icon.png, logo.png, favicon.ico, og.png');
