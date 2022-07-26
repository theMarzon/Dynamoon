import { readdir as readDirectory } from 'node:fs/promises';
import { join    as createPath    } from 'node:path';

import { chatApplicationsPath } from '../../directories.js';

import ChatApplication from '../../structures/Applications/ChatApplication.js';

let directoryFolders = await readDirectory(chatApplicationsPath);

directoryFolders = directoryFolders.filter((folder) => !folder.startsWith('.'));

// Importa los archivos en paralelo
let loadedChatApplications = await Promise.all(directoryFolders.map(async (folder) => {

    const filePath = createPath(chatApplicationsPath, folder, 'main.js');

    const fileContent = (process.platform === 'win32') ? await import(`file:///${filePath}`)
                                                       : await import(filePath);

    return new ChatApplication({

        ...fileContent.default,

        name: folder
    });
}));

// Organiza los archivos por su prioridad
loadedChatApplications = loadedChatApplications.sort((a, b) => b.priority - a.priority);

export default loadedChatApplications;
