import { readdir as readDirectory } from 'node:fs/promises';
import { join    as createPath    } from 'node:path';

import { servicesPath } from '../directoriesPath.js';

import Service from '../structures/Service.js';

let directoryFolders = await readDirectory(servicesPath);

directoryFolders = directoryFolders.filter((folder) => !folder.startsWith('.'));

// Importa los archivos en paralelo
let loadedFiles = await Promise.all(directoryFolders.map(async (folder) => {

    let fileContent;

    for (const _fileName of [ 'main.js', 'main.ts' ]) {

        const filePath = createPath(servicesPath, folder, _fileName);

        try {

            fileContent = (process.platform === 'win32') ? await import(`file://${filePath}`)
                                                         : await import(filePath);

        } catch {

            continue;
        };
    };

    return new Service({

        ...fileContent.default,

        name: folder
    });
}));

// Organiza los archivos por su prioridad
loadedFiles = loadedFiles.sort((a, b) => b.priority - a.priority);

export default loadedFiles;
