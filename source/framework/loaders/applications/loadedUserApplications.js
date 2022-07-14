import { readdir as readDirectory } from 'node:fs/promises';
import { join    as createPath    } from 'node:path';

import { userApplicationsPath } from '../../managers/directoriesPath.js';

import UserApplication from '../../structures/Application/UserApplication.js';

let directoryFolders = await readDirectory(userApplicationsPath);

directoryFolders = directoryFolders.filter((folder) => !folder.startsWith('.'));

// Importa los archivos en paralelo
let loadedFiles = await Promise.all(directoryFolders.map(async (folder) => {

    const filePath = createPath(userApplicationsPath, folder, 'main.js');

    const fileContent = (process.platform === 'win32') ? await import(`file://${filePath}`)
                                                       : await import(filePath);

    return new UserApplication({

        ...fileContent.default,

        name: folder
    });
}));

// Organiza los archivos por su prioridad
loadedFiles = loadedFiles.sort((a, b) => b.priority - a.priority);

export default loadedFiles;
