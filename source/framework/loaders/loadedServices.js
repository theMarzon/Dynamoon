import { readdir as readDirectory } from 'node:fs/promises';

import importFile from '../utils/importFile.js';

import { servicesPath } from '../managers/directoriesPath.js';

import Service from '../structures/Service.js';

let directoryFolders = await readDirectory(servicesPath);

directoryFolders = directoryFolders.filter((folder) => !folder.startsWith('.'));

// Importa los archivos en paralelo
let loadedFiles = await Promise.all(directoryFolders.map((folder) => importFile(servicesPath, folder, Service)));

// Organiza los archivos por su prioridad
loadedFiles = loadedFiles.sort((a, b) => b.priority - a.priority);

export default loadedFiles;
