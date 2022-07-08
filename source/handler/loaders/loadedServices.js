import fs   from 'node:fs/promises';
import path from 'node:path';

import { servicesPath } from '../managers/directoriesPath.js';

import Service from '../structures/Service.js';

let loadedFiles = [];

let foldersName = await fs.readdir(servicesPath, 'utf-8');

foldersName = foldersName.filter((value) => !value.startsWith('.'));

for (const _folderName of foldersName) {

    const filePath = path.join(servicesPath, _folderName, 'main.js');

    let fileContent = await import(`file://${filePath}`);

    fileContent = new Service({

        ...fileContent.default,

        name: _folderName
    });

    loadedFiles.push(fileContent);
};

// Organiza los archivos por su prioridad
loadedFiles = loadedFiles.sort((a, b) => b.priority - a.priority);

export default loadedFiles;
