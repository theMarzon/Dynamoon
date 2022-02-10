const discord = require('discord.js');
const fs      = require('fs');
const path    = require('path');

const paths = {

    applications: {

        commands: path.join(__dirname, '../../../applications/commands'),
        messages: path.join(__dirname, '../../../applications/messages'),
        users:    path.join(__dirname, '../../../applications/users')
    },

    events:   path.join(__dirname, '../../../events'),
    services: path.join(__dirname, '../../../services')
};

const folders = {

    applications: {

        commands: fs.readdirSync(paths.applications.commands).filter((val) => !val.startsWith('.')),
        messages: fs.readdirSync(paths.applications.messages).filter((val) => !val.startsWith('.')),
        users:    fs.readdirSync(paths.applications.users).filter((val) => !val.startsWith('.'))
    },

    events:   fs.readdirSync(paths.events).filter((val) => !val.startsWith('.')),
    services: fs.readdirSync(paths.services).filter((val) => !val.startsWith('.'))
};

let cache = {

    applications: [],
    events:       [],
    services:     []
};

// Carga las aplicaciones del tipo comando
for (const _folder of folders.applications.commands) {

    // Genera la ruta exacta del archivo
    const file = path.join(paths.applications.commands, _folder, 'main.js');

    // Carga el archivo
    const content = require(file);

    // Configura el archivo
    content.name          = _folder;
    content.type          = 'command';
    content.description ??= 'No especificada';
    content.options     ??= [];

    content.priority ??= 0;

    content.users   ??= false;
    content.servers ??= false;
    content.hide    ??= false;

    content.intents     ??= [];
    content.partials    ??= [];
    // content.permissions ??= [];
    content.events      ??= {};
    
    content.schema                   = {};
    content.schema.name              = content.name;
    content.schema.description       = content.description;
    content.schema.options           = content.options;
    content.schema.type              = discord.ApplicationCommandType.ChatInput;
    content.schema.defaultPermission = true;

    // Carga el archivo en la cache
    cache.applications.push(content);

    // Limpia la cache temporal
    delete require.cache[file];
};

// Carga las aplicaciones del tipo mensaje
for (const _folder of folders.applications.messages) {
    
    // Genera la ruta exacta del archivo
    const file = path.join(paths.applications.messages, _folder, 'main.js');

    // Carga el archivo
    const content = require(file);

    // Configura el archivo
    content.name = _folder;
    content.type = 'message';

    content.priority ??= 0;

    content.users   ??= false;
    content.servers ??= false;
    content.hide    ??= false;

    content.intents     ??= [];
    content.partials    ??= [];
    // content.permissions ??= [];
    content.events      ??= {};

    content.schema                   = {};
    content.schema.name              = content.name;
    content.schema.type              = discord.ApplicationCommandType.Message;
    content.schema.defaultPermission = true;

    // Carga el archivo en la cache
    cache.applications.push(content);
    
    // Limpia la cache temporal
    delete require.cache[file];
};

// Carga las aplicaciones del tipo usuario
for (const _folder of folders.applications.users) {

    // Genera la ruta exacta del archivo
    const file = path.join(paths.applications.users, _folder, 'main.js');
    
    // Carga el archivo
    const content = require(file);

    // Configura el archivo
    content.name = _folder;
    content.type = 'user';

    content.priority ??= 0;

    content.users   ??= false;
    content.servers ??= false;
    content.hide    ??= false;

    content.intents     ??= [];
    content.partials    ??= [];
    // content.permissions ??= [];
    content.events      ??= {};

    content.schema                   = {};
    content.schema.name              = content.name;
    content.schema.type              = discord.ApplicationCommandType.User;
    content.schema.defaultPermission = true;

    // Carga el archivo en la cache
    cache.applications.push(content);

    // Limpia la cache temporal
    delete require.cache[file];
};

// Carga los eventos
for (const _folder of folders.events) {

    // Genera la ruta exacta del archivo
    const file = path.join(paths.events, _folder, 'main.js');

    // Carga el archivo
    const content = require(file);

    // Configura el archivo
    content.name = _folder;

    content.priority ??= 0;

    content.intents  ??= [];
    content.partials ??= [];

    content.event ??= function () {};

    // Carga el archivo en la cache
    cache.events.push(content);
    
    // Limpia la cache temporal
    delete require.cache[file];
};

// Carga los servicios
for (const _folder of folders.services) {

    // Genera la ruta exacta del archivo
    const file = path.join(paths.services, _folder, 'main.js');

    // Carga el archivo
    const content = require(file);

    // Configura el archivo
    content.name = _folder;

    content.priority ??= 0;
    
    content.intents  ??= [];
    content.partials ??= [];
    content.events   ??= {};

    // Carga el archivo en la cache
    cache.services.push(content);
    
    // Limpia la cache temporal
    delete require.cache[file];
};

// Controlador de prioridades
for (const _cache in cache) {

    cache[_cache] = cache[_cache].sort((a, b) => b.priority - a.priority);
};

// Controlador de intentos
for (const _cache in cache) {

    for (const _file of cache[_cache]) {

        let intents = [];

        for (const _intent of _file.intents) {

            if (intents.includes(_intent)) continue;

            intents.push(_intent);
        };

        _file.intents = intents;
    };
};

// Controlador de parciales
for (const _cache in cache) {

    for (const _file of cache[_cache]) {

        let partials = [];

        for (const _partial of _file.partials) {

            if (partials.includes(_partial)) continue;

            partials.push(_partial);
        };

        _file.partials = partials;
    };
};

// Exporta los archivos cargados en la cache
module.exports = cache;