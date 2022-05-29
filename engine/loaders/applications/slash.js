import fs   from 'node:fs';
import path from 'node:path';

import { slashApplicationsPath } from '../../managers/directory.js';

import { SlashApplicationBuilder } from '../../structures/Application/Slash.js';

let loadedApplications = [];

const applicationsFolders = fs.readdirSync(slashApplicationsPath)
                              .filter((v) => !v.startsWith('.'));

for (const _folder of applicationsFolders) {

    // Genera la ruta exacta del archivo
    const filePath = path.join(slashApplicationsPath, _folder, 'main.js');

    // Importa el contenido del archivo
    let fileContent = await import(`file://${filePath}`);

    // Construye la aplicacion
    fileContent = new SlashApplicationBuilder({
        
        ...fileContent.default,
    
        name: { default: _folder }
    });

    loadedApplications.push(fileContent);
};

// Organiza los archivos importados por su prioridad
loadedApplications = loadedApplications.sort((a, b) => b.priority - a.priority);

export default loadedApplications;