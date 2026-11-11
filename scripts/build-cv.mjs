// Render scripts/cv/cv.html to the public, anonymised CV PDF with Chromium.
// Usage: npm run cv   (needs Playwright + Chromium: `npm i -D playwright && npx playwright install chromium`)
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';

// CommonJS require so a globally installed Playwright also resolves.
const { chromium } = createRequire(import.meta.url)('playwright');

const src = pathToFileURL(resolve('scripts/cv/cv.html')).href;
const out = resolve('public/docs/Nicholas_Previtali_CV.pdf');

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(src, { waitUntil: 'load' });
await page.pdf({ path: out, format: 'A4', printBackground: true, preferCSSPageSize: true });
await browser.close();
console.log(`wrote ${out}`);
