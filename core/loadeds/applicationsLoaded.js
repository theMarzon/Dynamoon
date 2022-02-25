const discord = require('discord.js');
const path    = require('path');

const pathsSource   = require('../sources/pathsSource.js');
const foldersSource = require('../sources/foldersSource.js');

let loadedFiles = [];

// Importa las aplicaciones (Comando)
for (const _folder of foldersSource.applicationsCommands) {

    // Genera la ruta exacta del archivo
    const filePath = path.join(pathsSource.applicationsCommands, _folder, 'main.js');

    // Importa el archivo
    let fileContent = require(filePath);

    fileContent.name = _folder;

    fileContent.type          = 'command';
    fileContent.description ??= 'No especificada';

    fileContent.priority ??= 0;

    fileContent.private ??= false;
    fileContent.disable ??= false;

    fileContent.options  ??= [];
    fileContent.intents  ??= [];
    fileContent.partials ??= [];

    // fileContent.permissions ??= {};
    fileContent.events      ??= {};
    fileContent.access      ??= {};
    fileContent.schema        = {};

    // fileContent.permissions.member ??= [];
    // fileContent.permissions.bot    ??= [];

    fileContent.access.servers ??= false;
    fileContent.access.users   ??= false;

    fileContent.schema.name              =  fileContent.name;
    fileContent.schema.description       =  fileContent.description;
    fileContent.schema.options           =  fileContent.options;
    fileContent.schema.defaultPermission = !fileContent.disable;
    fileContent.schema.type              =  discord.ApplicationCommandType.ChatInput;

    // Elimina los intentos y parciales repetidos
    fileContent.intents  = fileContent.intents.filter((val, ind, arr) => arr.indexOf(val) === ind);
    fileContent.partials = fileContent.partials.filter((val, ind, arr) => arr.indexOf(val) === ind);

    // Exporta el archivo
    loadedFiles.push(fileContent);
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
    
    fileContent.private ??= false;
    fileContent.disable ??= false;

    fileContent.intents  ??= [];
    fileContent.partials ??= [];

    // fileContent.permissions ??= {};
    fileContent.events      ??= {};
    fileContent.access      ??= {};
    fileContent.schema        = {};

    // fileContent.permissions.member ??= [];
    // fileContent.permissions.bot    ??= [];

    fileContent.access.servers ??= false;
    fileContent.access.users   ??= false;

    fileContent.schema.name              =  fileContent.name;
    fileContent.schema.defaultPermission = !fileContent.disable;
    fileContent.schema.type              =  discord.ApplicationCommandType.Message;

    // Elimina los intentos y parciales repetidos
    fileContent.intents  = fileContent.intents.filter((val, ind, arr) => arr.indexOf(val) === ind);
    fileContent.partials = fileContent.partials.filter((val, ind, arr) => arr.indexOf(val) === ind);

    // Exporta el archivo
    loadedFiles.push(fileContent);
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

    fileContent.private ??= false;
    fileContent.disable ??= false;

    fileContent.intents  ??= [];
    fileContent.partials ??= [];

    // fileContent.permissions ??= {};
    fileContent.events      ??= {};
    fileContent.access      ??= {};
    fileContent.schema        = {};

    // fileContent.permissions.member ??= [];
    // fileContent.permissions.bot    ??= [];

    fileContent.access.servers ??= false;
    fileContent.access.users   ??= false;

    fileContent.schema.name              =  fileContent.name;
    fileContent.schema.defaultPermission = !fileContent.disable;
    fileContent.schema.type              =  discord.ApplicationCommandType.User;

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