import fs   from 'node:fs/promises';
import path from 'node:path';

import { eventsPath } from '../managers/directoriesPath.js';

import Event from '../structures/Event.js';

let loadedFiles = [];

let directoryNames = await fs.readdir(eventsPath, 'utf-8');

directoryNames = directoryNames.filter((value) => !value.startsWith('.'));

for (const _directoryName of directoryNames) {

    const filePath = path.join(eventsPath, _directoryName, 'main.js');

    let fileContent = (process.platform === 'win32') ? await import(`file://${filePath}`)
                                                     : await import(filePath);

    fileContent = new Event({

        ...fileContent.default,

        name: _directoryName
    });

    loadedFiles.push(fileContent);
};

// Organiza los archivos por su prioridad
loadedFiles = loadedFiles.sort((a, b) => b.priority - a.priority);

export default loadedFiles;
