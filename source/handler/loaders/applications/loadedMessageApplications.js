import path from 'node:path';
import fs   from 'node:fs';

import { messageApplicationsDirectory } from '../../managers/directories.js';

import MessageApplication from '../../structures/Application/MessageApplication.js';

let loadedApplications = [];

const applicationFolders = fs
                            .readdirSync(messageApplicationsDirectory)
                            .filter((value) => !value.startsWith('.'));

for (const _applicationFolder of applicationFolders) {

    // Genera una ruta del archivo principal
    const filePath = path.join(messageApplicationsDirectory, _applicationFolder, 'main.js');

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
