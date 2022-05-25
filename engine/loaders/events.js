import fs   from 'node:fs';
import path from 'node:path';

import { eventsPath } from '../managers/directory.js';

import { EventBuilder } from '../structures/Event.js';

let loadedEvents = [];

const eventsFolders = fs.readdirSync(eventsPath)
                        .filter((val) => !val.startsWith('.'));

for (const _folder of eventsFolders) {

    // Genera la ruta exacta del archivo
    const filePath = path.join(eventsPath, _folder, 'main.js');

    // Importa el contenido del archivo
    let fileContent = await import(`file://${filePath}`);

    // Construye el evento
    fileContent = new EventBuilder({
        
        ...fileContent.default,
    
        package: _folder
    });

    loadedEvents.push(fileContent);
};

// Organiza los archivos importados por su prioridad
loadedEvents = loadedEvents.sort((a, b) => b.priority - a.priority);

export default loadedEvents;