import { readdir as readDirectory } from 'node:fs/promises';
import { resolve as resolvePath   } from 'node:path';

import { userApplicationsPath } from '../../directories.js';

import UserApplication from '../../structures/Applications/UserApplication.js';

let directoryFolders = await readDirectory(userApplicationsPath);

directoryFolders = directoryFolders.filter((folder) => !folder.startsWith('.'));

// Importa los archivos en paralelo
let loadedUserApplications = await Promise.all(directoryFolders.map(async (folder) => {

    const filePath = resolvePath(userApplicationsPath, folder, 'main.js');

    const fileContent = (process.platform === 'win32')

        ? await import(`file:///${filePath}`)
        : await import(filePath);

    return new UserApplication({

        ...fileContent.default,

        name: folder
    });
}));

// Organiza los archivos por su prioridad
loadedUserApplications = loadedUserApplications.sort((a, b) => b.priority - a.priority);

export default loadedUserApplications;
