import fs from 'node:fs/promises';

import buildFile from '../utils/buildFile.js';

import { servicesPath } from '../managers/directoriesPath.js';

import Service from '../structures/Service.js';

const loadQueue = [];

let directoryNames = await fs.readdir(servicesPath);

directoryNames = directoryNames.filter((value) => !value.startsWith('.'));

for (const _directoryName of directoryNames) {

    loadQueue.push(buildFile(servicesPath, _directoryName, Service));
};

let loadedFiles = await Promise.all(loadQueue);

// Organiza los archivos por su prioridad
loadedFiles = loadedFiles.sort((a, b) => b.priority - a.priority);

export default loadedFiles;
