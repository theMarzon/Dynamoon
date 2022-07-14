import { readdir as readDirectory } from 'node:fs/promises';
import { join    as createPath    } from 'node:path';

import { slashApplicationsPath } from '../../managers/directoriesPath.js';

import SlashApplication from '../../structures/Application/SlashApplication.js';

let directoryFolders = await readDirectory(slashApplicationsPath);

directoryFolders = directoryFolders.filter((folder) => !folder.startsWith('.'));

// Importa los archivos en paralelo
let loadedFiles = await Promise.all(directoryFolders.map(async (folder) => {

    const filePath = createPath(slashApplicationsPath, folder, 'main.js');

    const fileContent = (process.platform === 'win32') ? await import(`file://${filePath}`)
                                                       : await import(filePath);

    return new SlashApplication({

        ...fileContent.default,

        name: folder
    });
}));

// Organiza los archivos por su prioridad
loadedFiles = loadedFiles.sort((a, b) => b.priority - a.priority);

export default loadedFiles;
