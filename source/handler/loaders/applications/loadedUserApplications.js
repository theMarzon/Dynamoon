import path from 'node:path';
import fs   from 'node:fs';

import { userApplicationsDirectory } from '../../managers/directories.js';

import UserApplication from '../../structures/Application/UserApplication.js';

let loadedApplications = [];

const folderNames = fs
                     .readdirSync(userApplicationsDirectory)
                     .filter((value) => !value.startsWith('.'));

for (const _folderName of folderNames) {

    // Genera una ruta del archivo principal
    const filePath = path.join(userApplicationsDirectory, _folderName, 'main.js');

    // Importa el contenido del archivo
    let fileContent = await import(`file://${filePath}`);

    fileContent = new UserApplication({

        ...fileContent.default,

        name: { default: _folderName }
    });

    loadedApplications.push(fileContent);
};

// Organiza las aplicaciones cargadas por su prioridad
loadedApplications = loadedApplications.sort((a, b) => b.priority - a.priority);

export default loadedApplications;
