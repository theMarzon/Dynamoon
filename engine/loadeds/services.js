import fs   from 'node:fs';
import path from 'node:path';

import { servicesDirectory } from '../managers/directory.js';

import { ServiceBuilder } from '../structures/service.js';

let loadedServices = [];

const servicesFolders = fs.readdirSync(servicesDirectory)
                          .filter((v) => !v.startsWith('.'));

for (const _serviceFolder of servicesFolders) {

    // Genera una ruta del archivo principal
    const filePath = path.join(servicesDirectory, _serviceFolder, 'main.js');

    // Importa el contenido del archivo
    let fileContent = await import(`file://${filePath}`);

    fileContent = new ServiceBuilder({
        
        ...fileContent.default,
    
        name: _serviceFolder
    });

    loadedServices.push(fileContent);
};

// Organiza los servicios cargados por su prioridad
loadedServices = loadedServices.sort((a, b) => b.priority - a.priority);

export default loadedServices;