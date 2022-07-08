import fs   from 'node:fs/promises';
import path from 'node:path';

import { messageApplicationsPath } from '../../managers/directoriesPath.js';

import MessageApplication from '../../structures/Application/MessageApplication.js';

let loadedFiles = [];

const foldersName = (await fs.readdir(messageApplicationsPath, 'utf-8')).filter((value) => !value.startsWith('.'));

for (const _folderName of foldersName) {

    const filePath = path.join(messageApplicationsPath, _folderName, 'main.js');

    let fileContent = await import(`file://${filePath}`);

    fileContent = new MessageApplication({

        ...fileContent.default,

        name: { default: _folderName }
    });

    loadedFiles.push(fileContent);
};

// Organiza los archivos por su prioridad
loadedFiles = loadedFiles.sort((a, b) => b.priority - a.priority);

export default loadedFiles;
