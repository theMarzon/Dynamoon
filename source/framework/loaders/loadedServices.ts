import { readdir as readDirectory } from 'node:fs/promises';
import { resolve as resolvePath   } from 'node:path';

import { servicesPath } from '../directories.js';

import Service from '../structures/Service.js';

let directoryFolders = await readDirectory(servicesPath);

directoryFolders = directoryFolders.filter((folder) => !folder.startsWith('.'));

// Importa los archivos en paralelo
let loadedServices = await Promise.all(directoryFolders.map(async (folder) => {

    const filePath = resolvePath(servicesPath, folder, 'main.js');

    const fileContent = (process.platform === 'win32')

        ? await import(`file:///${filePath}`)
        : await import(filePath);

    return new Service({

        ...fileContent.default,

        name: folder
    });
}));

// Organiza los archivos por su prioridad
loadedServices = loadedServices.sort((a, b) => b.priority - a.priority);

export default loadedServices;
