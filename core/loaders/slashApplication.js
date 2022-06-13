import path from 'node:path';
import fs   from 'node:fs';

import { slashApplicationDirectory } from '../managers/directories.js';

import SlashApplicationBuilder from '../builders/SlashApplication.js';

let loadedApplications = [];

const applicationsFolders = fs.readdirSync(slashApplicationDirectory)
                              .filter((val) => !val.startsWith('.'));

for (const _folder of applicationsFolders) {

    // Genera una ruta del archivo principal
    const filePath = path.join(slashApplicationDirectory, _folder, 'main.js');

    // Importa el contenido del archivo
    let fileContent = await import(`file://${filePath}`);

    fileContent = new SlashApplicationBuilder({

        ...fileContent.default,

        name: { default: _folder }
    });

    loadedApplications.push(fileContent);
};

// Organiza las aplicaciones cargadas por su prioridad
loadedApplications = loadedApplications.sort((a, b) => b.priority - a.priority);

export default loadedApplications;
