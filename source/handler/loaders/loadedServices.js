import path from 'node:path';
import fs   from 'node:fs';

import { servicesDirectory } from '../managers/directories.js';

import Service from '../structures/Service.js';

let loadedServices = [];

const serviceFolders = fs
                        .readdirSync(servicesDirectory)
                        .filter((value) => !value.startsWith('.'));

for (const _serviceFolder of serviceFolders) {

    // Genera una ruta del archivo principal
    const filePath = path.join(servicesDirectory, _serviceFolder, 'main.js');

    // Importa el contenido del archivo
    let fileContent = await import(`file://${filePath}`);

    fileContent = new Service({

        ...fileContent.default,

        name: _serviceFolder
    });

    loadedServices.push(fileContent);
};

// Organiza los servicios cargados por su prioridad
loadedServices = loadedServices.sort((a, b) => b.priority - a.priority);

export default loadedServices;
