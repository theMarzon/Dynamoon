import fs from 'node:fs/promises';

import loadUserApplication from '../../utils/loaders/applications/loadUserApplication.js';

import { userApplicationsPath } from '../../managers/directoriesPath.js';

const loadQueue = [];

let directoryNames = await fs.readdir(userApplicationsPath);

directoryNames = directoryNames.filter((value) => !value.startsWith('.'));

for (const _directoryName of directoryNames) {

    loadQueue.push(loadUserApplication(_directoryName));
};

let loadedFiles = await Promise.all(loadQueue);

// Organiza los archivos por su prioridad
loadedFiles = loadedFiles.sort((a, b) => b.priority - a.priority);

export default loadedFiles;
