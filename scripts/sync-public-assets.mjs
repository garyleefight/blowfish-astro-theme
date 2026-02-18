#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(scriptDir, '..');
const packagePublic = path.join(packageRoot, 'public');
const targetPublic = path.join(process.cwd(), 'public');
const assetDirs = ['blowfish-lib', 'blowfish-icons', 'blowfish-img'];

if (!fs.existsSync(packagePublic)) {
  console.error(`[blowfish-astro-sync] Missing source directory: ${packagePublic}`);
  process.exit(1);
}

fs.mkdirSync(targetPublic, { recursive: true });

for (const dirName of assetDirs) {
  const srcDir = path.join(packagePublic, dirName);
  if (!fs.existsSync(srcDir)) continue;

  const destDir = path.join(targetPublic, dirName);
  if (path.resolve(srcDir) === path.resolve(destDir)) {
    console.log(`[blowfish-astro-sync] Skipped ${dirName} (source and destination are the same path)`);
    continue;
  }
  fs.cpSync(srcDir, destDir, { recursive: true, force: true });
  console.log(`[blowfish-astro-sync] Synced ${dirName} -> ${path.relative(process.cwd(), destDir)}`);
}
