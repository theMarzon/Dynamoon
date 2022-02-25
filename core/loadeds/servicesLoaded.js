const path = require('path');

const pathsSource   = require('../sources/pathsSource.js');
const foldersSource = require('../sources/foldersSource.js');

let loadedFiles = [];

// Importa los eventos
for (const _folder of foldersSource.services) {

    // Genera la ruta exacta del archivo
    const filePath = path.join(pathsSource.services, _folder, 'main.js');

    // Importa el archivo
    let fileContent = require(filePath);

    // Configura la estructura del archivo
    fileContent.name = _folder;

    fileContent.priority ??= 0;
    
    fileContent.intents  ??= [];
    fileContent.partials ??= [];

    fileContent.events ??= {};

    // Elimina los intentos y parciales repetidos
    fileContent.intents  = fileContent.intents.filter((val, ind, arr) => arr.indexOf(val) === ind);
    fileContent.partials = fileContent.partials.filter((val, ind, arr) => arr.indexOf(val) === ind);

    // Exporta el archivo
    loadedFiles.push(fileContent);
};

// Organiza los archivos por su prioridad
loadedFiles = loadedFiles.sort((a, b) => b.priority - a.priority);

// Exporta los archivos
module.exports = loadedFiles;