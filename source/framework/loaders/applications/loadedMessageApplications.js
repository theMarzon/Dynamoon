import fsp from 'node:fs/promises';

import importFile from '../../utils/importFile.js';

import { messageApplicationsPath } from '../../managers/directoriesPath.js';

import MessageApplication from '../../structures/Application/MessageApplication.js';

let directoryFolders = await fsp.readdir(messageApplicationsPath);

directoryFolders = directoryFolders.filter((folder) => !folder.startsWith('.'));

// Importa los archivos de forma paralela
let loadedFiles = await Promise.all(directoryFolders.map((folder) => importFile(messageApplicationsPath, folder, MessageApplication)));

// Organiza los archivos por su prioridad
loadedFiles = loadedFiles.sort((a, b) => b.priority - a.priority);

export default loadedFiles;
