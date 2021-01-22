import ModuleRepos from './modules.js';

import Parcel from 'parcel-bundler';

import { rmSync, mkdirSync, readFileSync, writeFileSync } from 'fs';

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const clonesDir = `${__dirname.replace('/src', '')}/clones`;
const modulesDir = `${__dirname.replace('/src', '')}/modules`;

const resetDir = (dir) => {
  rmSync(dir, { recursive: true, force: true });
  mkdirSync(dir);
};

resetDir(clonesDir);
resetDir(modulesDir);

import { exec } from 'child_process';

const parcelOptions = {
  minify: true,
  watch: false,
  sourceMaps: false,
  outDir: modulesDir
};

let moduleJson = [];

for (const repo of ModuleRepos) {
  console.log(repo);

  const url = `https://github.com/${repo.split('@')[0]}.git`;
  const commitHash = repo.split('@')[1];

  const name = repo.split('@')[0];

  const cloneDir = `${clonesDir}/${name}`;

  console.log('Cloning...');

  await new Promise((res) => exec(`git clone ${url} ${cloneDir}`, res));

  console.log('Checkout...');

  process.chdir(cloneDir);

  await new Promise((res) => exec(`git checkout ${commitHash}`, res))

  const manifest = JSON.parse(readFileSync(`${cloneDir}/goosemodModule.json`));

  console.log(manifest);

  const outFile = `${manifest.name.replace(/ /g, '_').toLowerCase()}.js`;

  const bundler = new Parcel(`${cloneDir}/${manifest.main}`, Object.assign(parcelOptions, {
    outFile
  }));

  const bundle = await bundler.bundle();

  const outPath = `${modulesDir}/${outFile}`;
  let jsCode = readFileSync(outPath, 'utf8');

  jsCode = `${jsCode};parcelRequire('${manifest.main.split('/').pop()}').default`; // Make eval return the index module's default export

  console.log(jsCode);

  writeFileSync(outPath, jsCode);

  moduleJson.push({
    name: manifest.name,
    description: manifest.description,
    version: manifest.version,
    tags: manifest.tags,
    authors: manifest.authors
  });
}