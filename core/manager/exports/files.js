const discord = require('discord.js');
const fs      = require('fs');
const path    = require('path');

const directories = require('./directories.js');

const folders = {

    applications: {

        commands: fs.readdirSync(directories.applications.commands).filter((val) => !val.startsWith('.')),
        messages: fs.readdirSync(directories.applications.messages).filter((val) => !val.startsWith('.')),
        users:    fs.readdirSync(directories.applications.users).filter((val) => !val.startsWith('.'))
    },

    events:    fs.readdirSync(directories.events).filter((val) => !val.startsWith('.')),
    services:  fs.readdirSync(directories.services).filter((val) => !val.startsWith('.')),
    databases: fs.readdirSync(directories.databases).filter((val) => !val.startsWith('.'))
};

let cache = {

    applications: [],
    events:       [],
    services:     [],
    databases:    []
};

// Carga los archivos
for (const _folder of folders.applications.commands) {

    // Genera la ruta exacta del archivo
    const filePath = path.join(directories.applications.commands, _folder, 'main.js');

    // Carga el archivo
    let fileContent = require(filePath);

    // Configura el archivo
    fileContent.name = _folder;

    fileContent.type          = 'command';
    fileContent.description ??= 'No especificada';

    fileContent.priority ??= 0;
    
    fileContent.users   ??= false;
    fileContent.servers ??= false;
    fileContent.hide    ??= false;

    fileContent.options     ??= [];
    fileContent.intents     ??= [];
    fileContent.partials    ??= [];
    // content.permissions ??= [];

    fileContent.events ??= {};
    
    fileContent.schema                   = {};
    fileContent.schema.name              = fileContent.name;
    fileContent.schema.description       = fileContent.description;
    fileContent.schema.options           = fileContent.options;
    fileContent.schema.type              = discord.ApplicationCommandType.ChatInput;
    fileContent.schema.defaultPermission = true;

    // Carga el archivo en la cache
    cache.applications.push(fileContent);

    // Limpia la cache temporal
    delete require.cache[filePath];
};

for (const _folder of folders.applications.messages) {
    
    // Genera la ruta exacta del archivo
    const filePath = path.join(directories.applications.messages, _folder, 'main.js');

    // Carga el archivo
    let fileContent = require(filePath);

    // Configura el archivo
    fileContent.name = _folder;

    fileContent.type = 'message';

    fileContent.priority ??= 0;

    fileContent.users   ??= false;
    fileContent.servers ??= false;
    fileContent.hide    ??= false;

    fileContent.intents     ??= [];
    fileContent.partials    ??= [];
    // content.permissions ??= [];

    fileContent.events ??= {};

    fileContent.schema                   = {};
    fileContent.schema.name              = fileContent.name;
    fileContent.schema.type              = discord.ApplicationCommandType.Message;
    fileContent.schema.defaultPermission = true;

    // Carga el archivo en la cache
    cache.applications.push(fileContent);
    
    // Limpia la cache temporal
    delete require.cache[filePath];
};

for (const _folder of folders.applications.users) {

    // Genera la ruta exacta del archivo
    const filePath = path.join(directories.applications.users, _folder, 'main.js');
    
    // Carga el archivo
    let fileContent = require(filePath);

    // Configura el archivo
    fileContent.name = _folder;
    
    fileContent.type = 'user';

    fileContent.priority ??= 0;

    fileContent.users   ??= false;
    fileContent.servers ??= false;
    fileContent.hide    ??= false;

    fileContent.intents     ??= [];
    fileContent.partials    ??= [];
    // content.permissions ??= [];

    fileContent.events ??= {};

    fileContent.schema                   = {};
    fileContent.schema.name              = fileContent.name;
    fileContent.schema.type              = discord.ApplicationCommandType.User;
    fileContent.schema.defaultPermission = true;

    // Carga el archivo en la cache
    cache.applications.push(fileContent);

    // Limpia la cache temporal
    delete require.cache[filePath];
};

for (const _folder of folders.events) {

    // Genera la ruta exacta del archivo
    const filePath = path.join(directories.events, _folder, 'main.js');

    // Carga el archivo
    let fileContent = require(filePath);

    // Configura el archivo
    fileContent.name = _folder;

    fileContent.priority ??= 0;

    fileContent.intents  ??= [];
    fileContent.partials ??= [];

    fileContent.event ??= function () {};

    // Carga el archivo en la cache
    cache.events.push(fileContent);
    
    // Limpia la cache temporal
    delete require.cache[filePath];
};

for (const _folder of folders.services) {

    // Genera la ruta exacta del archivo
    const filePath = path.join(directories.services, _folder, 'main.js');

    // Carga el archivo
    let fileContent = require(filePath);

    // Configura el archivo
    fileContent.name = _folder;

    fileContent.priority ??= 0;
    
    fileContent.intents  ??= [];
    fileContent.partials ??= [];

    fileContent.events ??= {};

    // Carga el archivo en la cache
    cache.services.push(fileContent);
    
    // Limpia la cache temporal
    delete require.cache[filePath];
};

for (const _folder of folders.databases) {

    // Genera la ruta exacta del archivo
    const filePath = path.join(directories.databases, _folder, 'main.js');

    // Carga el archivo
    let fileContent = require(filePath);

    // Configura el archivo
    fileContent.name = _folder;

    fileContent.database ??= {};

    // Carga el archivo en la cache
    cache.databases.push(fileContent);
    
    // Limpia la cache temporal
    delete require.cache[filePath];
};

// Organiza por prioridades
cache.applications = cache.applications.sort((a, b) => b.priority - a.priority);
cache.events       = cache.events.sort((a, b) => b.priority - a.priority);
cache.services     = cache.services.sort((a, b) => b.priority - a.priority);

// Controla los intentos
for (const _application of cache.applications) {

    let intents = [];

    for (const _intent of _application.intents) {

        if (intents.includes(_intent)) continue;

        intents.push(_intent);
    };

    _application.intents = intents;
};

for (const _event of cache.events) {

    let intents = [];

    for (const _intent of _event.intents) {

        if (intents.includes(_intent)) continue;

        intents.push(_intent);
    };

    _event.intents = intents;
};

for (const _services of cache.services) {

    let intents = [];

    for (const _intent of _services.intents) {

        if (intents.includes(_intent)) continue;

        intents.push(_intent);
    };

    _services.intents = intents;
};

// Controla los parciales
for (const _application of cache.applications) {

    let partials = [];

    for (const _partial of _application.partials) {

        if (partials.includes(_partial)) continue;

        partials.push(_partial);
    };

    _application.partials = partials;
};

for (const _event of cache.events) {

    let partials = [];

    for (const _partial of _event.partials) {

        if (partials.includes(_partial)) continue;

        partials.push(_partial);
    };

    _event.partials = partials;
};

for (const _services of cache.services) {

    let partials = [];

    for (const _partial of _services.partials) {

        if (partials.includes(_partial)) continue;

        partials.push(_partial);
    };

    _services.partials = partials;
};

// Exporta los archivos cargados en la cache
module.exports = cache;