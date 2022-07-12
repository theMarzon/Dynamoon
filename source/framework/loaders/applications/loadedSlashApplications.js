import fs from 'node:fs/promises';

import loadSlashApplication from '../../utils/loaders/applications/loadSlashApplication.js';

import { slashApplicationsPath } from '../../managers/directoriesPath.js';

const loadQueue = [];

let directoryNames = await fs.readdir(slashApplicationsPath);

directoryNames = directoryNames.filter((value) => !value.startsWith('.'));

for (const _directoryName of directoryNames) {

    loadQueue.push(loadSlashApplication(_directoryName));
};

let loadedFiles = await Promise.all(loadQueue);

// Organiza los archivos por su prioridad
loadedFiles = loadedFiles.sort((a, b) => b.priority - a.priority);

export default loadedFiles;
