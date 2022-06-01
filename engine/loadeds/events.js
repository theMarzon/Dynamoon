import fs   from 'node:fs';
import path from 'node:path';

import eventBuilder from '../builders/event.js';

import { eventDirectory } from '../managers/directory.js';

let loadedEvents = [];

const eventsFolders = fs.readdirSync(eventDirectory)
                        .filter((v) => !v.startsWith('.'));

for (const _eventFolder of eventsFolders) {

    // Genera una ruta del archivo principal
    const filePath = path.join(eventDirectory, _eventFolder, 'main.js');

    // Importa el contenido del archivo
    let fileContent = await import(`file://${filePath}`);

    fileContent = new eventBuilder({
        
        ...fileContent.default,
    
        name: _eventFolder
    });

    loadedEvents.push(fileContent);
};

// Organiza los eventos cargados por su prioridad
loadedEvents = loadedEvents.sort((a, b) => b.priority - a.priority);

export default loadedEvents;