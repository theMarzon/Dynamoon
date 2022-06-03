import fs   from 'node:fs';
import path from 'node:path';

import { messageApplicationsDirectory } from '../../managers/directory.js';

import { MessageApplicationBuilder } from '../../structures/application/message.js';

let loadedApplications = [];

const applicationsFolders = fs.readdirSync(messageApplicationsDirectory)
                              .filter((v) => !v.startsWith('.'));

for (const _applicationFolder of applicationsFolders) {

    // Genera una ruta del archivo principal
    const filePath = path.join(messageApplicationsDirectory, _applicationFolder, 'main.js');

    // Importa el contenido del archivo
    let fileContent = await import(`file://${filePath}`);

    fileContent = new MessageApplicationBuilder({
        
        ...fileContent.default,
    
        name: { default: _applicationFolder }
    });

    loadedApplications.push(fileContent);
};

// Organiza las aplicaciones cargadas por su prioridad
loadedApplications = loadedApplications.sort((a, b) => b.priority - a.priority);

export default loadedApplications;