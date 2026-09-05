import { spawnSync } from 'node:child_process';
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { join, resolve } from 'node:path';

const DEFAULT_BASE_PATH = '/achip-explorer';

const args = process.argv.slice(2);
let requestedBasePath;
const nextArgs = [];

for (let index = 0; index < args.length; index += 1) {
  const arg = args[index];

  if (arg === '--base-path') {
    requestedBasePath = args[index + 1];
    index += 1;
  } else if (arg.startsWith('--base-path=')) {
    requestedBasePath = arg.slice('--base-path='.length);
  } else {
    nextArgs.push(arg);
  }
}

if (requestedBasePath === undefined && args.includes('--base-path')) {
  console.error('Missing value after --base-path. Example: --base-path=/achip-explorer');
  process.exit(1);
}

const rawBasePath = requestedBasePath ?? process.env.NEXT_PUBLIC_BASE_PATH ?? DEFAULT_BASE_PATH;
const trimmedBasePath = rawBasePath.trim();
const basePath = trimmedBasePath === '/' ? '' : trimmedBasePath.replace(/\/+$/, '');

if (
  basePath &&
  (!basePath.startsWith('/') ||
    basePath.includes('://') ||
    basePath.includes('?') ||
    basePath.includes('#'))
) {
  console.error('Base path must be empty or a pathname such as /achip-explorer.');
  process.exit(1);
}

const require = createRequire(import.meta.url);
const nextCli = require.resolve('next/dist/bin/next');
const env = {
  ...process.env,
  NEXT_PUBLIC_BASE_PATH: basePath,
};

console.log(`Building static site for ${basePath || '/'} ...`);

const result = spawnSync(process.execPath, [nextCli, 'build', ...nextArgs], {
  env,
  stdio: 'inherit',
});

if (result.error) {
  console.error(result.error.message);
  process.exit(1);
}

if (result.status !== 0) {
  process.exit(result.status ?? 1);
}

const outputDirectory = resolve('out');

function findHtmlFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = join(directory, entry.name);

    if (entry.isDirectory()) {
      return findHtmlFiles(entryPath);
    }

    return entry.name.endsWith('.html') ? [entryPath] : [];
  });
}

if (basePath) {
  const invalidUrls = [];
  const expectedPrefix = `${basePath}/`;
  const attributePattern = /(?:src|href)=["'](\/[^/][^"']*)["']/g;

  for (const htmlFile of findHtmlFiles(outputDirectory)) {
    const html = readFileSync(htmlFile, 'utf8');

    for (const match of html.matchAll(attributePattern)) {
      const url = match[1];
      if (url !== basePath && !url.startsWith(expectedPrefix)) {
        invalidUrls.push(`${htmlFile}: ${url}`);
      }
    }
  }

  const rootHtml = readFileSync(join(outputDirectory, 'index.html'), 'utf8');
  if (!rootHtml.includes(`${basePath}/_next/static/`)) {
    invalidUrls.push('out/index.html: Next.js chunk URLs do not contain the deployment prefix');
  }

  if (invalidUrls.length > 0) {
    console.error('\nStatic export contains URLs that escape the deployment folder:');
    invalidUrls.forEach((url) => console.error(`  ${url}`));
    process.exit(1);
  }
}

writeFileSync(
  join(outputDirectory, 'deployment-info.json'),
  `${JSON.stringify(
    {
      basePath: basePath || '/',
      uploadContentsTo: basePath || 'website document root',
    },
    null,
    2
  )}\n`
);

console.log(`Static export verified for ${basePath || '/'}; upload the contents of out/.`);
