const path = require('path');

const pathsSource   = require('../../sources/exports/pathsSource.js');
const foldersSource = require('../../sources/exports/foldersSource.js');

let cache = [];

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

    // Elimina los intentos repetidos
    fileContent.intents = fileContent.intents.filter((val, ind, arr) => arr.indexOf(val) === ind);

    // Elimina los parciales repetidos
    fileContent.partials = fileContent.partials.filter((val, ind, arr) => arr.indexOf(val) === ind);

    // Exporta el archivo
    cache.push(fileContent);
};

// Organiza los archivos por su prioridad
cache = cache.sort((a, b) => b.priority - a.priority);

// Exporta los archivos
module.exports = cache;