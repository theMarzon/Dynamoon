import fs   from 'node:fs/promises';
import path from 'node:path';

import { userApplicationsPath } from '../../managers/directoriesPath.js';

import UserApplication from '../../structures/Application/UserApplication.js';

const loadQueue = [];

let directoryNames = await fs.readdir(userApplicationsPath);

directoryNames = directoryNames.filter((value) => !value.startsWith('.'));

for (const _directoryName of directoryNames) {

    loadQueue.push((async () => {

        const filePath = path.join(userApplicationsPath, _directoryName, 'main.js');

        const fileContent = (process.platform === 'win32') ? await import(`file://${filePath}`)
                                                           : await import(filePath);

        return new UserApplication({

            ...fileContent.default,

            name: _directoryName
        });
    })());
};

let loadedFiles = await Promise.all(loadQueue);

// Organiza los archivos por su prioridad
loadedFiles = loadedFiles.sort((a, b) => b.priority - a.priority);

export default loadedFiles;
