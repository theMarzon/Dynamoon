import fs from 'node:fs/promises';

import loadEvent from '../utils/loaders/loadEvent.js';

import { eventsPath } from '../managers/directoriesPath.js';

const loadQueue = [];

let directoryNames = await fs.readdir(eventsPath);

directoryNames = directoryNames.filter((value) => !value.startsWith('.'));

for (const _directoryName of directoryNames) {

    loadQueue.push(loadEvent(_directoryName));
};

let loadedFiles = await Promise.all(loadQueue);

// Organiza los archivos por su prioridad
loadedFiles = loadedFiles.sort((a, b) => b.priority - a.priority);

export default loadedFiles;
