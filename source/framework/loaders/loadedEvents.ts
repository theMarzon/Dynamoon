import { readdir as readDirectory } from 'node:fs/promises';
import { resolve as resolvePath   } from 'node:path';

import { eventsPath } from '../directories.js';

import Event from '../structures/Event.js';

let directoryFolders = await readDirectory(eventsPath);

directoryFolders = directoryFolders.filter((folder) => !folder.startsWith('.'));

// Importa los archivos en paralelo
let loadedEvents = await Promise.all(directoryFolders.map(async (folder) => {

    const filePath = resolvePath(eventsPath, folder, 'main.js');

    const fileContent = (process.platform === 'win32')

        ? await import(`file:///${filePath}`)
        : await import(filePath);

    return new Event({

        ...fileContent.default,

        name: folder
    });
}));

// Organiza los archivos por su prioridad
loadedEvents = loadedEvents.sort((a, b) => b.priority - a.priority);

export default loadedEvents;
