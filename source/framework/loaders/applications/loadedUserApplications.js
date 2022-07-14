import { readdir as readDirectory } from 'node:fs/promises';

import importFile from '../../utils/importFile.js';

import { userApplicationsPath } from '../../managers/directoriesPath.js';

import UserApplication from '../../structures/Application/UserApplication.js';

let directoryFolders = await readDirectory(userApplicationsPath);

directoryFolders = directoryFolders.filter((folder) => !folder.startsWith('.'));

// Importa los archivos en paralelo
let loadedFiles = await Promise.all(directoryFolders.map((folder) => importFile(userApplicationsPath, folder, UserApplication)));

// Organiza los archivos por su prioridad
loadedFiles = loadedFiles.sort((a, b) => b.priority - a.priority);

export default loadedFiles;
