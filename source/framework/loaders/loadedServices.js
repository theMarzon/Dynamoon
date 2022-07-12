import fs from 'node:fs/promises';

import loadService from '../utils/loaders/loadService.js';

import { servicesPath } from '../managers/directoriesPath.js';

const loadQueue = [];

let directoryNames = await fs.readdir(servicesPath);

directoryNames = directoryNames.filter((value) => !value.startsWith('.'));

for (const _directoryName of directoryNames) {

    loadQueue.push(loadService(_directoryName));
};

let loadedFiles = await Promise.all(loadQueue);

// Organiza los archivos por su prioridad
loadedFiles = loadedFiles.sort((a, b) => b.priority - a.priority);

export default loadedFiles;
