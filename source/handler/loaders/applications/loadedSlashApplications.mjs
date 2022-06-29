import path from 'node:path';
import fs   from 'node:fs';

import { slashApplicationsDirectory } from '../../managers/directories.mjs';

import SlashApplication from '../../structures/Application/SlashApplication.mjs';

let loadedApplications = [];

const folderNames = fs
                     .readdirSync(slashApplicationsDirectory)
                     .filter((value) => !value.startsWith('.'));

for (const _folderName of folderNames) {

    // Genera una ruta del archivo principal
    const filePath = path.join(slashApplicationsDirectory, _folderName, 'main.mjs');

    // Importa el contenido del archivo
    let fileContent = await import(`file://${filePath}`);

    fileContent = new SlashApplication({

        ...fileContent.default,

        name: { default: _folderName }
    });

    loadedApplications.push(fileContent);
};

// Organiza las aplicaciones cargadas por su prioridad
loadedApplications = loadedApplications.sort((a, b) => b.priority - a.priority);

export default loadedApplications;
