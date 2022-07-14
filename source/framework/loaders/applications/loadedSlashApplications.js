import fsp from 'node:fs/promises';

import importFile from '../../utils/importFile.js';

import { slashApplicationsPath } from '../../managers/directoriesPath.js';

import SlashApplication from '../../structures/Application/SlashApplication.js';

let directoryFolders = await fsp.readdir(slashApplicationsPath);

directoryFolders = directoryFolders.filter((val) => !val.startsWith('.'));

// Importa los archivos de forma paralela
let loadedFiles = await Promise.all(directoryFolders.map((val) => importFile(slashApplicationsPath, val, SlashApplication)));

// Organiza los archivos por su prioridad
loadedFiles = loadedFiles.sort((a, b) => b.priority - a.priority);

export default loadedFiles;
