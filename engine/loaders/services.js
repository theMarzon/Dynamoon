import fs   from 'node:fs';
import path from 'node:path';

import { servicesPath } from '../managers/directory.js';

import { ServiceBuilder } from '../structures/Service.js';

let loadedServices = [];

const servicesFolders = fs.readdirSync(servicesPath)
                          .filter((val) => !val.startsWith('.'));

for (const _folder of servicesFolders) {

    // Genera la ruta exacta del archivo
    const filePath = path.join(servicesPath, _folder, 'main.js');

    // Importa el contenido del archivo
    let fileContent = await import(`file://${filePath}`);

    // Construye el servicio
    fileContent = new ServiceBuilder({
        
        ...fileContent.default,
    
        name: _folder
    });

    loadedServices.push(fileContent);
};

// Organiza los archivos importados por su prioridad
loadedServices = loadedServices.sort((a, b) => b.priority - a.priority);

export default loadedServices;