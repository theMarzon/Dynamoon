import { readdir as readDirectory } from 'node:fs/promises';
import { resolve as resolvePath   } from 'node:path';

import { messageApplicationsPath } from '../../directories.js';

import MessageApplication from '../../structures/Applications/MessageApplication.js';

let directoryFolders = await readDirectory(messageApplicationsPath);

directoryFolders = directoryFolders.filter((folder) => !folder.startsWith('.'));

// Importa los archivos en paralelo
let loadedMessageApplications = await Promise.all(directoryFolders.map(async (folder) => {

    const filePath = resolvePath(messageApplicationsPath, folder, 'main.js');

    const fileContent = (process.platform === 'win32')

        ? await import(`file:///${filePath}`)
        : await import(filePath);

    return new MessageApplication({

        ...fileContent.default,

        name: folder
    });
}));

// Organiza los archivos por su prioridad
loadedMessageApplications = loadedMessageApplications.sort((a, b) => b.priority - a.priority);

export default loadedMessageApplications;
