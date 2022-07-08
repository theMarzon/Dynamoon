import fs   from 'node:fs/promises';
import path from 'node:path';

import { slashApplicationsPath } from '../../managers/directoriesPath.js';

import SlashApplication from '../../structures/Application/SlashApplication.js';

let loadedFiles = [];

const foldersName = (await fs.readdir(slashApplicationsPath, 'utf-8')).filter((value) => !value.startsWith('.'));

for (const _folderName of foldersName) {

    const filePath = path.join(slashApplicationsPath, _folderName, 'main.js');

    let fileContent = await import(`file://${filePath}`);

    fileContent = new SlashApplication({

        ...fileContent.default,

        name: { default: _folderName }
    });

    loadedFiles.push(fileContent);
};

// Organiza los archivos por su prioridad
loadedFiles = loadedFiles.sort((a, b) => b.priority - a.priority);

export default loadedFiles;
