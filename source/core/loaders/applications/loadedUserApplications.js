import path from 'node:path';
import fs   from 'node:fs';

import { userApplicationsPath } from '../../managers/directories.js';

import UserApplication from '../../structures/Application/UserApplication.js';

let loadedApplications = [];

const applicationFolders = fs.readdirSync(userApplicationsPath)
                             .filter((value) => !value.startsWith('.'));

for (const _applicationFolder of applicationFolders) {

    // Genera una ruta del archivo principal
    const filePath = path.join(userApplicationsPath, _applicationFolder, 'main.js');

    // Importa el contenido del archivo
    let fileContent = await import(`file://${filePath}`);

    fileContent = new UserApplication({

        ...fileContent.default,

        name: { default: _applicationFolder }
    });

    loadedApplications.push(fileContent);
};

// Organiza las aplicaciones cargadas por su prioridad
loadedApplications = loadedApplications.sort((a, b) => b.priority - a.priority);

export default loadedApplications;