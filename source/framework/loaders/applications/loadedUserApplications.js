import fsp from 'node:fs/promises';

import importFile from '../../utils/importFile.js';

import { userApplicationsPath } from '../../managers/directoriesPath.js';

import UserApplication from '../../structures/Application/UserApplication.js';

let directoryFolders = await fsp.readdir(userApplicationsPath);

directoryFolders = directoryFolders.filter((val) => !val.startsWith('.'));

// Importa los archivos de forma paralela
let loadedFiles = await Promise.all(directoryFolders.map((val) => importFile(userApplicationsPath, val, UserApplication)));

// Organiza los archivos por su prioridad
loadedFiles = loadedFiles.sort((a, b) => b.priority - a.priority);

export default loadedFiles;
