import path from 'node:path';
import fs   from 'node:fs';

import { messageApplicationsPath } from '../../managers/directories.js';

import MessageApplication from '../../structures/Application/Message.js';

let loadedApplications = [];

const applicationFolders = fs.readdirSync(messageApplicationsPath)
                             .filter((val) => !val.startsWith('.'));

for (const _applicationFolder of applicationFolders) {

    // Genera una ruta del archivo principal
    const filePath = path.join(messageApplicationsPath, _applicationFolder, 'main.js');

    // Importa el contenido del archivo
    let fileContent = await import(`file://${filePath}`);

    fileContent = new MessageApplication({

        ...fileContent.default,

        name: { default: _applicationFolder }
    });

    loadedApplications.push(fileContent);
};

// Organiza las aplicaciones cargadas por su prioridad
loadedApplications = loadedApplications.sort((a, b) => b.priority - a.priority);

export default loadedApplications;
