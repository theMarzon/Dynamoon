import fs   from 'node:fs';
import path from 'node:path';

import { userApplicationsPath } from '../../managers/directory.js';

import { UserApplicationBuilder } from '../../structures/Application/User.js';

let loadedApplications = [];

const applicationsFolders = fs.readdirSync(userApplicationsPath)
                              .filter((v) => !v.startsWith('.'));

for (const _folder of applicationsFolders) {

    // Genera la ruta exacta del archivo
    const filePath = path.join(userApplicationsPath, _folder, 'main.js');

    // Importa el contenido del archivo
    let fileContent = await import(`file://${filePath}`);

    // Construye la aplicacion
    fileContent = new UserApplicationBuilder({
        
        ...fileContent.default,
    
        name: { default: _folder }
    });

    loadedApplications.push(fileContent);
};

// Organiza los archivos importados por su prioridad
loadedApplications = loadedApplications.sort((a, b) => b.priority - a.priority);

export default loadedApplications;