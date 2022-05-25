import fs   from 'node:fs';
import path from 'node:path';

import { messageApplicationsPath } from '../../managers/directory.js';

import { MessageApplicationBuilder } from '../../structures/Application/Message.js';

let loadedApplications = [];

const applicationsFolders = fs.readdirSync(messageApplicationsPath)
                              .filter((val) => !val.startsWith('.'));

for (const _folder of applicationsFolders) {

    // Genera la ruta exacta del archivo
    const filePath = path.join(messageApplicationsPath, _folder, 'main.js');

    // Importa el contenido del archivo
    let fileContent = await import(`file://${filePath}`);

    // Construye la aplicacion
    fileContent = new MessageApplicationBuilder({
        
        ...fileContent.default,
    
        package: _folder
    });

    loadedApplications.push(fileContent);
};

// Organiza los archivos importados por su prioridad
loadedApplications = loadedApplications.sort((a, b) => b.priority - a.priority);

export default loadedApplications;