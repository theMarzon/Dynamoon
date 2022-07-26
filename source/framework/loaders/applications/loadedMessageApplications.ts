import { readdir as readDirectory } from 'node:fs/promises';
import { join    as createPath    } from 'node:path';

import { messageApplicationsPath } from '../../directoriesPath.js';

import MessageApplication from '../../structures/Applications/MessageApplication.js';

let directoryFolders = await readDirectory(messageApplicationsPath);

directoryFolders = directoryFolders.filter((folder) => !folder.startsWith('.'));

// Importa los archivos en paralelo
let loadedFiles = await Promise.all(directoryFolders.map(async (folder) => {

    let fileContent;

    for (const _fileName of [ 'main.js', 'main.ts' ]) {

        const filePath = createPath(messageApplicationsPath, folder, _fileName);

        try {

            fileContent = (process.platform === 'win32') ? await import(`file://${filePath}`)
                                                         : await import(filePath);

        } catch {

            continue;
        };
    };

    return new MessageApplication({

        ...fileContent.default,

        name: folder
    });
}));

// Organiza los archivos por su prioridad
loadedFiles = loadedFiles.sort((a, b) => b.priority - a.priority);

export default loadedFiles;
