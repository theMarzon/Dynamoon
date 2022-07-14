import fsp from 'node:fs/promises';

import importFile from '../utils/importFile.js';

import { eventsPath } from '../managers/directoriesPath.js';

import Event from '../structures/Event.js';

let directoryFolders = await fsp.readdir(eventsPath);

directoryFolders = directoryFolders.filter((folder) => !folder.startsWith('.'));

// Importa los archivos de forma paralela
let loadedFiles = await Promise.all(directoryFolders.map((folder) => importFile(eventsPath, folder, Event)));

// Organiza los archivos por su prioridad
loadedFiles = loadedFiles.sort((a, b) => b.priority - a.priority);

export default loadedFiles;
