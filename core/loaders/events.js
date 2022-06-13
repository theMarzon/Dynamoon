import path from 'node:path';
import fs   from 'node:fs';

import { eventDirectory } from '../managers/directories.js';

import EventBuilder from '../builders/Event.js';

let loadedEvents = [];

const eventsFolders = fs.readdirSync(eventDirectory)
                        .filter((val) => !val.startsWith('.'));

for (const _folder of eventsFolders) {

    // Genera una ruta del archivo principal
    const filePath = path.join(eventDirectory, _folder, 'main.js');

    // Importa el contenido del archivo
    let fileContent = await import(`file://${filePath}`);

    fileContent = new EventBuilder({

        ...fileContent.default,

        name: _folder
    });

    loadedEvents.push(fileContent);
};

// Organiza los eventos cargados por su prioridad
loadedEvents = loadedEvents.sort((a, b) => b.priority - a.priority);

export default loadedEvents;
