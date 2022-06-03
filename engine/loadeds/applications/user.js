import fs   from 'node:fs';
import path from 'node:path';

import { userApplicationsDirectory } from '../../managers/directory.js';

import { UserApplicationBuilder } from '../../structures/application/user.js';

let loadedApplications = [];

const applicationsFolders = fs.readdirSync(userApplicationsDirectory)
                              .filter((v) => !v.startsWith('.'));

for (const _applicationFolder of applicationsFolders) {

    // Genera una ruta del archivo principal
    const filePath = path.join(userApplicationsDirectory, _applicationFolder, 'main.js');

    // Importa el contenido del archivo
    let fileContent = await import(`file://${filePath}`);

    fileContent = new UserApplicationBuilder({
        
        ...fileContent.default,
    
        name: { default: _applicationFolder }
    });

    loadedApplications.push(fileContent);
};

// Organiza las aplicaciones cargadas por su prioridad
loadedApplications = loadedApplications.sort((a, b) => b.priority - a.priority);

export default loadedApplications;