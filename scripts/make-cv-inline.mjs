#!/usr/bin/env node
/**
 * Regenera la línea `const CV_EN = {...};` de src/pages/index.astro
 * a partir de src/cv-en.json (proyectos en inglés).
 *
 * Uso:
 *   node scripts/make-cv-inline.mjs
 *
 * Regla AGENTS.md #2: cada vez que cambie src/cv-en.json, ejecutar este
 * script para mantener el toggle EN sincronizado.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const pagePath = join(root, 'src', 'pages', 'index.astro');
const cvPath = join(root, 'src', 'cv-en.json');

const page = readFileSync(pagePath, 'utf8');
const cv = JSON.parse(readFileSync(cvPath, 'utf8'));

const line = '  const CV_EN = ' + JSON.stringify({ projects: cv.projects }) + ';\n';
const pattern = /^  const CV_EN = .*;\r?\n/m;

if (!pattern.test(page)) {
  console.error('No se encontró la línea `const CV_EN` en src/pages/index.astro.');
  process.exit(1);
}

writeFileSync(pagePath, page.replace(pattern, line));
console.log(`CV_EN inline regenerado con ${cv.projects.length} proyectos desde src/cv-en.json.`);