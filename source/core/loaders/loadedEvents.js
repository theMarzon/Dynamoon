import path from 'node:path';
import fs   from 'node:fs';

import { eventsPath } from '../managers/directories.js';

import Event from '../structures/Event.js';

let loadedEvents = [];

const eventFolders = fs.readdirSync(eventsPath)
                       .filter((value) => !value.startsWith('.'));

for (const _eventFolder of eventFolders) {

    // Genera una ruta del archivo principal
    const filePath = path.join(eventsPath, _eventFolder, 'main.js');

    // Importa el contenido del archivo
    let fileContent = await import(`file://${filePath}`);

    fileContent = new Event({

        ...fileContent.default,

        name: _eventFolder
    });

    loadedEvents.push(fileContent);
};

// Organiza los eventos cargados por su prioridad
loadedEvents = loadedEvents.sort((a, b) => b.priority - a.priority);

export default loadedEvents;
