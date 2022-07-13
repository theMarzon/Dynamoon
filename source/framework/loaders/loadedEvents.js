import fs from 'node:fs/promises';

import buildFile from '../utils/buildFile.js';

import { eventsPath } from '../managers/directoriesPath.js';

import Event from '../structures/Event.js';

const loadQueue = [];

let directoryNames = await fs.readdir(eventsPath);

directoryNames = directoryNames.filter((value) => !value.startsWith('.'));

for (const _directoryName of directoryNames) {

    loadQueue.push(buildFile(eventsPath, _directoryName, Event));
};

let loadedFiles = await Promise.all(loadQueue);

// Organiza los archivos por su prioridad
loadedFiles = loadedFiles.sort((a, b) => b.priority - a.priority);

export default loadedFiles;
