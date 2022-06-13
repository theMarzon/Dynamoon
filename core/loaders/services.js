import path from 'node:path';
import fs   from 'node:fs';

import { servicesDirectory } from '../managers/directories.js';

import ServiceBuilder from '../builders/Service.js';

let loadedServices = [];

const servicesFolders = fs.readdirSync(servicesDirectory)
                          .filter((v) => !v.startsWith('.'));

for (const _folder of servicesFolders) {

    // Genera una ruta del archivo principal
    const filePath = path.join(servicesDirectory, _folder, 'main.js');

    // Importa el contenido del archivo
    let fileContent = await import(`file://${filePath}`);

    fileContent = new ServiceBuilder({

        ...fileContent.default,

        name: _folder
    });

    loadedServices.push(fileContent);
};

// Organiza los servicios cargados por su prioridad
loadedServices = loadedServices.sort((a, b) => b.priority - a.priority);

export default loadedServices;