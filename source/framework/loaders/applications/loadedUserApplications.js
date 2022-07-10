import fs   from 'node:fs/promises';
import path from 'node:path';

import { userApplicationsPath } from '../../managers/directoriesPath.js';

import UserApplication from '../../structures/Application/UserApplication.js';

let loadedFiles = [];

let directoryNames = await fs.readdir(userApplicationsPath, 'utf-8');

directoryNames = directoryNames.filter((value) => !value.startsWith('.'));

for (const _directoryName of directoryNames) {

    const filePath = path.join(userApplicationsPath, _directoryName, 'main.js');

    let fileContent = (process.platform === 'win32') ? await import(`file://${filePath}`)
                                                     : await import(filePath);

    fileContent = new UserApplication({

        ...fileContent.default,

        name: _directoryName
    });

    loadedFiles.push(fileContent);
};

// Organiza los archivos por su prioridad
loadedFiles = loadedFiles.sort((a, b) => b.priority - a.priority);

export default loadedFiles;
