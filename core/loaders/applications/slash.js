import path from 'node:path';
import fs   from 'node:fs';

import { slashApplicationsPath } from '../../managers/directories.js';

import SlashApplication from '../../structures/Application/Slash.js';

let loadedApplications = [];

const applicationFolders = fs.readdirSync(slashApplicationsPath)
                             .filter((val) => !val.startsWith('.'));

for (const _folder of applicationFolders) {

    // Genera una ruta del archivo principal
    const filePath = path.join(slashApplicationsPath, _folder, 'main.js');

    // Importa el contenido del archivo
    let fileContent = await import(`file://${filePath}`);

    fileContent = new SlashApplication({

        ...fileContent.default,

        name: { default: _folder }
    });

    loadedApplications.push(fileContent);
};

// Organiza las aplicaciones cargadas por su prioridad
loadedApplications = loadedApplications.sort((a, b) => b.priority - a.priority);

export default loadedApplications;
