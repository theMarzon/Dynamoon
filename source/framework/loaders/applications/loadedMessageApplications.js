import fs from 'node:fs/promises';

import loadMessageApplication from '../../utils/loaders/applications/loadMessageApplication.js';

import { messageApplicationsPath } from '../../managers/directoriesPath.js';

const loadQueue = [];

let directoryNames = await fs.readdir(messageApplicationsPath);

directoryNames = directoryNames.filter((value) => !value.startsWith('.'));

for (const _directoryName of directoryNames) {

    loadQueue.push(loadMessageApplication(_directoryName));
};

let loadedFiles = await Promise.all(loadQueue);

// Organiza los archivos por su prioridad
loadedFiles = loadedFiles.sort((a, b) => b.priority - a.priority);

export default loadedFiles;
