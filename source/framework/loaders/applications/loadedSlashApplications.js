import { readdir as readDirectory } from 'node:fs/promises';

import importFile from '../../utils/importFile.js';

import { slashApplicationsPath } from '../../managers/directoriesPath.js';

import SlashApplication from '../../structures/Application/SlashApplication.js';

let directoryFolders = await readDirectory(slashApplicationsPath);

directoryFolders = directoryFolders.filter((folder) => !folder.startsWith('.'));

// Importa los archivos en paralelo
let loadedFiles = await Promise.all(directoryFolders.map((folder) => importFile(slashApplicationsPath, folder, SlashApplication)));

// Organiza los archivos por su prioridad
loadedFiles = loadedFiles.sort((a, b) => b.priority - a.priority);

export default loadedFiles;
