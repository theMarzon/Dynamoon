import fs   from 'node:fs/promises';
import path from 'node:path';

import { eventsPath } from '../managers/directoriesPath.js';

import Event from '../structures/Event.js';

const loadQueue = [];

let directoryNames = await fs.readdir(eventsPath);

directoryNames = directoryNames.filter((value) => !value.startsWith('.'));

for (const _directoryName of directoryNames) {

    loadQueue.push((async () => {

        const filePath = path.join(eventsPath, _directoryName, 'main.js');

        const fileContent = (process.platform === 'win32') ? await import(`file://${filePath}`)
                                                           : await import(filePath);

        return new Event({

            ...fileContent.default,

            name: _directoryName
        });
    })());
};

let loadedFiles = await Promise.all(loadQueue);

// Organiza los archivos por su prioridad
loadedFiles = loadedFiles.sort((a, b) => b.priority - a.priority);

export default loadedFiles;
