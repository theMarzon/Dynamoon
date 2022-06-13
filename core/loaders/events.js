import path from 'node:path';
import fs   from 'node:fs';

import { eventsPath } from '../managers/directories.js';

import Event from '../structures/Event.js';

let loadedEvents = [];

const eventFolders = fs.readdirSync(eventsPath)
                       .filter((val) => !val.startsWith('.'));

for (const _folder of eventFolders) {

    // Genera una ruta del archivo principal
    const filePath = path.join(eventsPath, _folder, 'main.js');

    // Importa el contenido del archivo
    let fileContent = await import(`file://${filePath}`);

    fileContent = new Event({

        ...fileContent.default,

        name: _folder
    });

    loadedEvents.push(fileContent);
};

// Organiza los eventos cargados por su prioridad
loadedEvents = loadedEvents.sort((a, b) => b.priority - a.priority);

export default loadedEvents;
