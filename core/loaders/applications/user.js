import path from 'node:path';
import fs   from 'node:fs';

import { userApplicationsDirectory } from '../../managers/directories.js';

import UserApplicationBuilder from '../../builders/UserApplication.js';

let loadedApplications = [];

const applicationsFolders = fs.readdirSync(userApplicationsDirectory)
                              .filter((v) => !v.startsWith('.'));

for (const _folder of applicationsFolders) {

    // Genera una ruta del archivo principal
    const filePath = path.join(userApplicationsDirectory, _folder, 'main.js');

    // Importa el contenido del archivo
    let fileContent = await import(`file://${filePath}`);

    fileContent = new UserApplicationBuilder({

        ...fileContent.default,

        name: { default: _folder }
    });

    loadedApplications.push(fileContent);
};

// Organiza las aplicaciones cargadas por su prioridad
loadedApplications = loadedApplications.sort((a, b) => b.priority - a.priority);

export default loadedApplications;
