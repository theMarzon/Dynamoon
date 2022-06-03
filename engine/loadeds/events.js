import fs   from 'node:fs';
import path from 'node:path';

import { eventsDirectory } from '../managers/directory.js';

import { EventBuilder } from '../structures/event.js';

let loadedEvents = [];

const eventsFolders = fs.readdirSync(eventsDirectory)
                        .filter((v) => !v.startsWith('.'));

for (const _eventFolder of eventsFolders) {

    // Genera una ruta del archivo principal
    const filePath = path.join(eventsDirectory, _eventFolder, 'main.js');

    // Importa el contenido del archivo
    let fileContent = await import(`file://${filePath}`);

    fileContent = new EventBuilder({
        
        ...fileContent.default,
    
        name: _eventFolder
    });

    loadedEvents.push(fileContent);
};

// Organiza los eventos cargados por su prioridad
loadedEvents = loadedEvents.sort((a, b) => b.priority - a.priority);

export default loadedEvents;