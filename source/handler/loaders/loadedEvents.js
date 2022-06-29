import path from 'node:path';
import fs   from 'node:fs';

import { eventsDirectory } from '../managers/directories.js';

import Event from '../structures/Event.js';

let loadedEvents = [];

const folderNames = fs
                     .readdirSync(eventsDirectory)
                     .filter((value) => !value.startsWith('.'));

for (const _folderName of folderNames) {

    // Genera una ruta del archivo principal
    const filePath = path.join(eventsDirectory, _folderName, 'main.js');

    // Importa el contenido del archivo
    let fileContent = await import(`file://${filePath}`);

    fileContent = new Event({

        ...fileContent.default,

        name: _folderName
    });

    loadedEvents.push(fileContent);
};

// Organiza los eventos cargados por su prioridad
loadedEvents = loadedEvents.sort((a, b) => b.priority - a.priority);

export default loadedEvents;
