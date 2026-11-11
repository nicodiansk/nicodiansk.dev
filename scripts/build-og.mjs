// Render scripts/og/og.html to public/og.jpg (1200×630 social preview card).
// Usage: npm run og   (needs Playwright + Chromium, like `npm run cv`)
import { createRequire } from 'node:module';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

// CommonJS require so a globally installed Playwright also resolves.
const { chromium } = createRequire(import.meta.url)('playwright');

const src = pathToFileURL(resolve('scripts/og/og.html')).href;
const out = resolve('public/og.jpg');

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
await page.goto(src, { waitUntil: 'load' });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: out, type: 'jpeg', quality: 86 });
await browser.close();
console.log(`wrote ${out}`);
