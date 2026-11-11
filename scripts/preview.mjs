// Build the static export at the server root and serve ./out locally.
// Usage: npm run preview            (builds, then serves on http://localhost:4173)
//        npm run preview -- --no-build
import { spawnSync } from 'node:child_process';
import { createReadStream, existsSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, normalize, resolve, sep } from 'node:path';

const root = resolve('out');
const port = Number(process.env.PORT) || 4173;

if (!process.argv.includes('--no-build')) {
  const npx = process.platform === 'win32' ? 'npx.cmd' : 'npx';
  const res = spawnSync(npx, ['next', 'build'], {
    stdio: 'inherit',
    shell: process.platform === 'win32',
    env: { ...process.env, NODE_ENV: 'production', PAGES_BASE_PATH: '' },
  });
  if (res.status !== 0) process.exit(res.status ?? 1);
}

const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.pdf': 'application/pdf',
  '.txt': 'text/plain',
};

createServer((req, res) => {
  let url;
  try {
    url = decodeURIComponent((req.url || '/').split('?')[0]);
  } catch {
    return res.writeHead(400).end();
  }
  let file = normalize(join(root, url));
  if (file !== root && !file.startsWith(root + sep)) return res.writeHead(403).end();
  if (existsSync(file) && statSync(file).isDirectory()) file = join(file, 'index.html');
  if (!existsSync(file)) file = join(root, '404.html');
  const notFound = !existsSync(file) || (file.endsWith('404.html') && !url.endsWith('404.html'));
  res.writeHead(notFound ? 404 : 200, {
    'Content-Type': types[extname(file)] || 'application/octet-stream',
  });
  createReadStream(file).pipe(res);
}).listen(port, () => console.log(`\n  Preview ready → http://localhost:${port}\n`));
