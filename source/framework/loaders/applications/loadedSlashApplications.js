import fs   from 'node:fs/promises';
import path from 'node:path';

import { slashApplicationsPath } from '../../managers/directoriesPath.js';

import SlashApplication from '../../structures/Application/SlashApplication.js';

let loadedFiles = [];

let directoryNames = await fs.readdir(slashApplicationsPath, 'utf-8');

directoryNames = directoryNames.filter((value) => !value.startsWith('.'));

for (const _directoryName of directoryNames) {

    const filePath = path.join(slashApplicationsPath, _directoryName, 'main.js');

    let fileContent = (process.platform === 'win32') ? await import(`file://${filePath}`)
                                                     : await import(filePath);

    fileContent = new SlashApplication({

        ...fileContent.default,

        name: _directoryName
    });

    loadedFiles.push(fileContent);
};

// Organiza los archivos por su prioridad
loadedFiles = loadedFiles.sort((a, b) => b.priority - a.priority);

export default loadedFiles;
