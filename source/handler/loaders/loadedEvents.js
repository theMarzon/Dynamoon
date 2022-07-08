import fs   from 'node:fs/promises';
import path from 'node:path';

import { eventsPath } from '../managers/directoriesPath.js';

import Event from '../structures/Event.js';

let loadedFiles = [];

const foldersName = (await fs.readdir(eventsPath, 'utf-8')).filter((value) => !value.startsWith('.'));

for (const _folderName of foldersName) {

    const filePath = path.join(eventsPath, _folderName, 'main.js');

    let fileContent = await import(`file://${filePath}`);

    fileContent = new Event({

        ...fileContent.default,

        name: _folderName
    });

    loadedFiles.push(fileContent);
};

// Organiza los archivos por su prioridad
loadedFiles = loadedFiles.sort((a, b) => b.priority - a.priority);

export default loadedFiles;
