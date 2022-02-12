const discord = require('discord.js');
const fs      = require('fs');
const path    = require('path');

const paths = {

    applications: {

        commands: path.join(process.cwd(), 'applications/commands'),
        messages: path.join(process.cwd(), 'applications/messages'),
        users:    path.join(process.cwd(), 'applications/users')
    },

    events:    path.join(process.cwd(), 'events'),
    services:  path.join(process.cwd(), 'services'),
    databases: path.join(process.cwd(), 'databases')
};

const folders = {

    applications: {

        commands: fs.readdirSync(paths.applications.commands).filter((val) => !val.startsWith('.')),
        messages: fs.readdirSync(paths.applications.messages).filter((val) => !val.startsWith('.')),
        users:    fs.readdirSync(paths.applications.users).filter((val) => !val.startsWith('.'))
    },

    events:    fs.readdirSync(paths.events).filter((val) => !val.startsWith('.')),
    services:  fs.readdirSync(paths.services).filter((val) => !val.startsWith('.')),
    databases: fs.readdirSync(paths.databases).filter((val) => !val.startsWith('.'))
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
    const file = path.join(paths.applications.commands, _folder, 'main.js');

    // Carga el archivo
    const content = require(file);

    // Configura el archivo
    content.name = _folder;

    content.type          = 'command';
    content.description ??= 'No especificada';

    content.priority ??= 0;
    
    content.users   ??= false;
    content.servers ??= false;
    content.hide    ??= false;

    content.options     ??= [];
    content.intents     ??= [];
    content.partials    ??= [];
    // content.permissions ??= [];

    content.events ??= {};
    
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

    content.events ??= {};

    content.schema                   = {};
    content.schema.name              = content.name;
    content.schema.type              = discord.ApplicationCommandType.Message;
    content.schema.defaultPermission = true;

    // Carga el archivo en la cache
    cache.applications.push(content);
    
    // Limpia la cache temporal
    delete require.cache[file];
};

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

    content.events ??= {};

    content.schema                   = {};
    content.schema.name              = content.name;
    content.schema.type              = discord.ApplicationCommandType.User;
    content.schema.defaultPermission = true;

    // Carga el archivo en la cache
    cache.applications.push(content);

    // Limpia la cache temporal
    delete require.cache[file];
};

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

    content.events ??= {};

    // Carga el archivo en la cache
    cache.services.push(content);
    
    // Limpia la cache temporal
    delete require.cache[file];
};

for (const _folder of folders.databases) {

    // Genera la ruta exacta del archivo
    const file = path.join(paths.databases, _folder, 'main.js');

    // Carga el archivo
    const content = require(file);

    // Configura el archivo
    content.name = _folder;

    content.database ??= {};

    // Carga el archivo en la cache
    cache.databases.push(content);
    
    // Limpia la cache temporal
    delete require.cache[file];
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