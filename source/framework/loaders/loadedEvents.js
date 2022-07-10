import fs   from 'node:fs/promises';
import path from 'node:path';

import { eventsPath } from '../managers/directoriesPath.js';

import Event from '../structures/Event.js';

let loadedFiles = [];

let foldersName = await fs.readdir(eventsPath, 'utf-8');

foldersName = foldersName.filter((value) => !value.startsWith('.'));

for (const _folderName of foldersName) {

    const filePath = path.join(eventsPath, _folderName, 'main.js');

    let fileContent = (process.platform === 'win32') ? await import(`file://${filePath}`)
                                                     : await import(filePath);

    fileContent = new Event({

        ...fileContent.default,

        name: _folderName
    });

    loadedFiles.push(fileContent);
};

// Organiza los archivos por su prioridad
loadedFiles = loadedFiles.sort((a, b) => b.priority - a.priority);

export default loadedFiles;
