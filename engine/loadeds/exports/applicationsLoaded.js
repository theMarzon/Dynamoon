const discord = require('discord.js');
const path    = require('path');

const pathsSource   = require('../../sources/exports/pathsSource.js');
const foldersSource = require('../../sources/exports/foldersSource.js');

let cache = [];

// Importa las aplicaciones (Comando)
for (const _folder of foldersSource.applicationsCommands) {

    // Genera la ruta exacta del archivo
    const filePath = path.join(pathsSource.applicationsCommands, _folder, 'main.js');

    // Importa el archivo
    let fileContent = require(filePath);

    // Configura la estructura del archivo
    fileContent.name = _folder;

    fileContent.type          = 'command';
    fileContent.description ??= 'No especificada';

    fileContent.priority ??= 0;
    
    fileContent.defaultPermission ??= true;
    fileContent.users             ??= false;
    fileContent.servers           ??= false;
    fileContent.hide              ??= false;

    fileContent.options  ??= [];
    fileContent.intents  ??= [];
    fileContent.partials ??= [];

    fileContent.events ??= {};
    fileContent.schema   = {};

    fileContent.schema.name              = fileContent.name;
    fileContent.schema.description       = fileContent.description;
    fileContent.schema.options           = fileContent.options;
    fileContent.schema.defaultPermission = fileContent.defaultPermission;
    fileContent.schema.type              = discord.ApplicationCommandType.ChatInput;

    // Elimina los intentos repetidos
    fileContent.intents = fileContent.intents.filter((val, ind, arr) => arr.indexOf(val) === ind);

    // Elimina los parciales repetidos
    fileContent.partials = fileContent.partials.filter((val, ind, arr) => arr.indexOf(val) === ind);

    // Exporta el archivo
    cache.push(fileContent);
};

// Importa las aplicaciones (Mensaje)
for (const _folder of foldersSource.applicationsMessages) {
    
    // Genera la ruta exacta del archivo
    const filePath = path.join(pathsSource.applicationsMessages, _folder, 'main.js');

    // Importa el archivo
    let fileContent = require(filePath);

    // Configura la estructura del archivo
    fileContent.name = _folder;

    fileContent.type = 'message';

    fileContent.priority ??= 0;

    fileContent.defaultPermission ??= true;
    fileContent.users             ??= false;
    fileContent.servers           ??= false;
    fileContent.hide              ??= false;

    fileContent.intents  ??= [];
    fileContent.partials ??= [];

    fileContent.events ??= {};
    fileContent.schema   = {};

    fileContent.schema.name              = fileContent.name;
    fileContent.schema.defaultPermission = fileContent.defaultPermission;
    fileContent.schema.type              = discord.ApplicationCommandType.Message;

    // Elimina los intentos repetidos
    fileContent.intents = fileContent.intents.filter((val, ind, arr) => arr.indexOf(val) === ind);

    // Elimina los parciales repetidos
    fileContent.partials = fileContent.partials.filter((val, ind, arr) => arr.indexOf(val) === ind);

    // Exporta el archivo
    cache.push(fileContent);
};

// Importa las aplicaciones (Usuario)
for (const _folder of foldersSource.applicationsUsers) {

    // Genera la ruta exacta del archivo
    const filePath = path.join(pathsSource.applicationsUsers, _folder, 'main.js');
    
    // Importa el archivo
    let fileContent = require(filePath);

    // Configura la estructura del archivo
    fileContent.name = _folder;
    
    fileContent.type = 'user';

    fileContent.priority ??= 0;

    fileContent.defaultPermission ??= true;
    fileContent.users             ??= false;
    fileContent.servers           ??= false;
    fileContent.hide              ??= false;

    fileContent.intents  ??= [];
    fileContent.partials ??= [];

    fileContent.events ??= {};
    fileContent.schema   = {};

    fileContent.schema.name              = fileContent.name;
    fileContent.schema.defaultPermission = fileContent.defaultPermission;
    fileContent.schema.type              = discord.ApplicationCommandType.User;

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