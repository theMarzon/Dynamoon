import path, { join as createPath } from 'node:path';

import createTree from '../utils/createTree.js';

import { eventsPath } from '../directoriesPath.js';

import Event from '../structures/Event.js';

const directoryItems = await createTree(createPath(eventsPath), 'main.js', 'main.mjs', 'main.cjs', 'main.ts', 'main.mts', 'main.cts');

// Importa los archivos en paralelo
let loadedFiles = await Promise.all(directoryItems.map(async (item) => {

    const filePath = createPath(item.join(path.sep));

    const fileContent = (process.platform === 'win32') ? await import(`file://${filePath}`)
                                                       : await import(filePath);

    return new Event({

        ...fileContent.default,

        name: item.at(-2)
    });
}));

// Organiza los archivos por su prioridad
loadedFiles = loadedFiles.sort((a, b) => b.priority - a.priority);

export default loadedFiles;
