const discord = require('discord.js');
const path    = require('path');

const paths   = require('./paths.js');
const folders = require('./folders.js');

let files = {

    events:       [],
    services:     [],
    applications: []
};

// Importa los eventos
for (const _folder of folders.events) {

    // Genera la ruta exacta del archivo
    const filePath = path.join(paths.events, _folder, 'main.js');

    // Importa el archivo
    let fileContent = require(filePath);

    // Configura el archivo
    fileContent.name = _folder;

    fileContent.priority ??= 0;

    fileContent.intents  ??= [];
    fileContent.partials ??= [];

    fileContent.event ??= function () {};

    // Elimina los intentos repetidos
    fileContent.intents = fileContent.intents.filter((val, ind, arr) => arr.indexOf(val) === ind);

    // Elimina los parciales repetidos
    fileContent.partials = fileContent.partials.filter((val, ind, arr) => arr.indexOf(val) === ind);

    // Exporta el archivo
    files.events.push(fileContent);
};

// Importa los servicios
for (const _folder of folders.services) {

    // Genera la ruta exacta del archivo
    const filePath = path.join(paths.services, _folder, 'main.js');

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
    files.services.push(fileContent);
};

// Importa las aplicaciones (Comando)
for (const _folder of folders.applicationsCommands) {

    // Genera la ruta exacta del archivo
    const filePath = path.join(paths.applicationsCommands, _folder, 'main.js');

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
    files.applications.push(fileContent);
};

// Importa las aplicaciones (Mensaje)
for (const _folder of folders.applicationsMessages) {
    
    // Genera la ruta exacta del archivo
    const filePath = path.join(paths.applicationsMessages, _folder, 'main.js');

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
    files.applications.push(fileContent);
};

// Importa las aplicaciones (Usuario)
for (const _folder of folders.applicationsUsers) {

    // Genera la ruta exacta del archivo
    const filePath = path.join(paths.applicationsUsers, _folder, 'main.js');
    
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
    files.applications.push(fileContent);
};

for (const _file in files) {

    // Organiza los archivos por su prioridad
    files[_file] = files[_file].sort((a, b) => b.priority - a.priority);
};

// Exporta los archivos
module.exports = files;