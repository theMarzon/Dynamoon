import fs   from 'node:fs/promises';
import path from 'node:path';

import { userApplicationsPath } from '../../managers/directoriesPath.js';

import UserApplication from '../../structures/Application/UserApplication.js';

let loadedFiles = [];

let foldersName = await fs.readdir(userApplicationsPath, 'utf-8');

foldersName = foldersName.filter((value) => !value.startsWith('.'));

for (const _folderName of foldersName) {

    const filePath = path.join(userApplicationsPath, _folderName, 'main.js');

    let fileContent = await import(`file://${filePath}`);

    fileContent = new UserApplication({

        ...fileContent.default,

        name: { default: _folderName }
    });

    loadedFiles.push(fileContent);
};

// Organiza los archivos por su prioridad
loadedFiles = loadedFiles.sort((a, b) => b.priority - a.priority);

export default loadedFiles;
