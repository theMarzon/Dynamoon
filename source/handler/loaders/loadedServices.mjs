import path from 'node:path';
import fs   from 'node:fs';

import { servicesDirectory } from '../managers/directories.mjs';

import Service from '../structures/Service.mjs';

let loadedServices = [];

const folderNames = fs
                     .readdirSync(servicesDirectory)
                     .filter((value) => !value.startsWith('.'));

for (const _folderName of folderNames) {

    // Genera una ruta del archivo principal
    const filePath = path.join(servicesDirectory, _folderName, 'main.mjs');

    // Importa el contenido del archivo
    let fileContent = await import(`file://${filePath}`);

    fileContent = new Service({

        ...fileContent.default,

        name: _folderName
    });

    loadedServices.push(fileContent);
};

// Organiza los servicios cargados por su prioridad
loadedServices = loadedServices.sort((a, b) => b.priority - a.priority);

export default loadedServices;
