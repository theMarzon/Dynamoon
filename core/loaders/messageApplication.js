import path from 'node:path';
import fs   from 'node:fs';

import { messageApplicationDirectory } from '../managers/directories.js';

import MessageApplicationBuilder from '../builders/MessageApplication.js';

let loadedApplications = [];

const applicationsFolders = fs.readdirSync(messageApplicationDirectory)
                              .filter((val) => !val.startsWith('.'));

for (const _folder of applicationsFolders) {

    // Genera una ruta del archivo principal
    const filePath = path.join(messageApplicationDirectory, _folder, 'main.js');

    // Importa el contenido del archivo
    let fileContent = await import(`file://${filePath}`);

    fileContent = new MessageApplicationBuilder({

        ...fileContent.default,

        name: { default: _folder }
    });

    loadedApplications.push(fileContent);
};

// Organiza las aplicaciones cargadas por su prioridad
loadedApplications = loadedApplications.sort((a, b) => b.priority - a.priority);

export default loadedApplications;
