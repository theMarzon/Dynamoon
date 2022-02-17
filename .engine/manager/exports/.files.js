const discord = require('discord.js');
const fs      = require('fs');
const path    = require('path');

const directories = require('./directories.js');

const folders = {

    events:   fs.readdirSync(directories.events).filter((val) => !val.startsWith('.')),
    services: fs.readdirSync(directories.services).filter((val) => !val.startsWith('.')),
    
    applications: {

        commands: fs.readdirSync(directories.applicationsCommands).filter((val) => !val.startsWith('.')),
        messages: fs.readdirSync(directories.applicationsMessages).filter((val) => !val.startsWith('.')),
        users:    fs.readdirSync(directories.applicationsUsers).filter((val) => !val.startsWith('.'))
    }
};

let cache = {

    events:       [],
    services:     [],
    applications: []
};

// Carga los eventos
for (const _folder of folders.events) {

    // Crea las rutas exactas de los archivos
    const configFilePath = path.join(directories.events, _folder, 'config.json');
    const eventFilePath  = path.join(directories.events, _folder, 'event.js');

    let configFileContent = require(configFilePath);
    let eventFileContent  = require(eventFilePath);

    // Configura el archivo
    configFileContent.name = _folder;

    configFileContent.priority ??= 0;

    configFileContent.intents  ??= [];
    configFileContent.partials ??= [];

    configFileContent.event = eventFileContent;

    // Exporta el archivo
    cache.events.push(configFileContent);
    
    // Limpia la cache del importador
    delete require.cache[configFilePath];
    delete require.cache[eventFilePath];
};

// Carga los servicios
for (const _folder of folders.services) {

    // Crea las rutas exactas de los archivos
    const configFilePath   = path.join(directories.services, _folder, 'config.json');
    const eventsFolderPath = path.join(directories.services, _folder, 'events');

    let configFileContent = require(configFilePath);

    // Configura el archivo
    configFileContent.name = _folder;

    configFileContent.priority ??= 0;

    configFileContent.intents  ??= [];
    configFileContent.partials ??= [];

    configFileContent.events = {};

    const eventsFiles = fs.readdirSync(eventsFolderPath).filter((val) => !val.startsWith('.'));

    for (const _eventFile of eventsFiles) {

        const eventFilePath = path.join(eventsFolderPath, _eventFile);

        const eventFileContent = require(eventFilePath);

        // Exporta el archivo
        configFileContent.events[_eventFile.substring(0, _eventFile.length - 3)] = eventFileContent;

        // Limpia la cache del importador
        delete require.cache[eventFilePath];
    };

    // Exporta el archivo
    cache.services.push(configFileContent);
    
    // Limpia la cache del importador
    delete require.cache[configFilePath];
    delete require.cache[eventsFolderPath];
};

// Carga las aplicaciones (Comando)
for (const _folder of folders.applications.commands) {

    // Crea las rutas exactas de los archivos
    const configFilePath   = path.join(directories.applications.commands, _folder, 'config.json');
    const eventsFolderPath = path.join(directories.applications.commands, _folder, 'events');

    let configFileContent = require(configFilePath);

    // Configura el archivo
    configFileContent.name = _folder;
    
    configFileContent.type = 'command';
    
    configFileContent.description ??= 'No especificada';

    configFileContent.priority ??= 0;

    configFileContent.servers ??= false;
    configFileContent.users   ??= false;
    configFileContent.hide    ??= false;

    configFileContent.options  ??= [];
    configFileContent.intents  ??= [];
    configFileContent.partials ??= [];
    
    configFileContent.schema = {};

    configFileContent.schema.name        = configFileContent.name;
    configFileContent.schema.description = configFileContent.description;
    configFileContent.schema.options     = configFileContent.options;
    configFileContent.schema.type        = discord.ApplicationCommandType.ChatInput;

    configFileContent.events = {};

    const eventsFiles = fs.readdirSync(eventsFolderPath).filter((val) => !val.startsWith('.'));

    for (const _eventFile of eventsFiles) {

        // Crea la ruta exacta del archivo
        const eventFilePath = path.join(eventsFolderPath, _eventFile);

        const eventFileContent = require(eventFilePath);

        // Exporta el archivo
        configFileContent.events[_eventFile.substring(0, _eventFile.length - 3)] = eventFileContent;

        // Limpia la cache del importador
        delete require.cache[eventFilePath];
    };

    // Exporta el archivo
    cache.applications.push(configFileContent);
    
    // Limpia la cache del importador
    delete require.cache[configFilePath];
    delete require.cache[eventsFolderPath];
};

// Carga las aplicaciones (Mensaje)
for (const _folder of folders.applications.messages) {

    // Crea las rutas exactas de los archivos
    const configFilePath   = path.join(directories.applications.messages, _folder, 'config.json');
    const eventsFolderPath = path.join(directories.applications.messages, _folder, 'events');

    let configFileContent = require(configFilePath);

    // Configura el archivo
    configFileContent.name = _folder;
    
    configFileContent.type = 'message';
    
    configFileContent.description ??= 'No especificada';

    configFileContent.priority ??= 0;

    configFileContent.servers ??= false;
    configFileContent.users   ??= false;
    configFileContent.hide    ??= false;

    configFileContent.intents  ??= [];
    configFileContent.partials ??= [];
    
    configFileContent.schema = {};

    configFileContent.schema.name        = configFileContent.name;
    configFileContent.schema.description = configFileContent.description;
    configFileContent.schema.type        = discord.ApplicationCommandType.Message;

    configFileContent.events = {};

    const eventsFiles = fs.readdirSync(eventsFolderPath).filter((val) => !val.startsWith('.'));

    for (const _eventFile of eventsFiles) {

        // Crea la ruta exacta del archivo
        const eventFilePath = path.join(eventsFolderPath, _eventFile);

        const eventFileContent = require(eventFilePath);

        // Exporta el archivo
        configFileContent.events[_eventFile.substring(0, _eventFile.length - 3)] = eventFileContent;

        // Limpia la cache del importador
        delete require.cache[eventFilePath];
    };

    // Exporta el archivo
    cache.applications.push(configFileContent);
    
    // Limpia la cache del importador
    delete require.cache[configFilePath];
    delete require.cache[eventsFolderPath];
};

// Carga las aplicaciones (Usuario)
for (const _folder of folders.applications.users) {

    // Crea las rutas exactas de los archivos
    const configFilePath   = path.join(directories.applications.users, _folder, 'config.json');
    const eventsFolderPath = path.join(directories.applications.users, _folder, 'events');

    let configFileContent = require(configFilePath);

    // Configura el archivo
    configFileContent.name = _folder;
    
    configFileContent.type = 'user';

    configFileContent.description ??= 'No especificada';

    configFileContent.priority ??= 0;

    configFileContent.servers ??= false;
    configFileContent.users   ??= false;
    configFileContent.hide    ??= false;

    configFileContent.intents  ??= [];
    configFileContent.partials ??= [];
    
    configFileContent.schema = {};

    configFileContent.schema.name         = configFileContent.name;
    configFileContent.schema.description  = configFileContent.description;
    configFileContent.schema.type         = discord.ApplicationCommandType.User;

    configFileContent.events = {};

    const eventsFiles = fs.readdirSync(eventsFolderPath).filter((val) => !val.startsWith('.'));

    for (const _eventFile of eventsFiles) {

        // Crea la ruta exacta del archivo
        const eventFilePath = path.join(eventsFolderPath, _eventFile);

        const eventFileContent = require(eventFilePath);

        // Exporta el archivo
        configFileContent.events[_eventFile.substring(0, _eventFile.length - 3)] = eventFileContent;

        // Limpia la cache del importador
        delete require.cache[eventFilePath];
    };

    // Exporta el archivo
    cache.applications.push(configFileContent);
    
    // Limpia la cache del importador
    delete require.cache[configFilePath];
    delete require.cache[eventsFolderPath];
};

// Organiza por prioridad
cache.events       = cache.events.sort((a, b) => b.priority - a.priority);
cache.services     = cache.services.sort((a, b) => b.priority - a.priority);
cache.applications = cache.applications.sort((a, b) => b.priority - a.priority);

// Configura los intentos
for (const _event of cache.events) {
    
    // Filtra los intentos repetidos
    _event.intents = _event.intents.filter((val, ind, arr) => arr.indexOf(val) === ind);

    // Convierte los intentos a BitInt
    _event.intents = _event.intents.map((val) => discord.IntentsBitField.Flags[val]);
};

for (const _service of cache.services) {

    // Filtra los intentos repetidos
    _service.intents = _service.intents.filter((val, ind, arr) => arr.indexOf(val) === ind);

    // Convierte los intentos a BitInt
    _service.intents = _service.intents.map((val) => discord.IntentsBitField.Flags[val]);
};

for (const _application of cache.applications) {

    // Filtra los intentos repetidos
    _application.intents = _application.intents.filter((val, ind, arr) => arr.indexOf(val) === ind);

    // Convierte los intentos a BitInt
    _application.intents = _application.intents.map((val) => discord.IntentsBitField.Flags[val]);
};

// Configura los parciales
for (const _event of cache.events) {
    
    // Filtra los parciales repetidos
    _event.partials = _event.partials.filter((val, ind, arr) => arr.indexOf(val) === ind);

    // Convierte los parciales a BitInt
    _event.partials = _event.partials.map((val) => discord.Partials[val]);
};

for (const _service of cache.services) {
    
    // Filtra los parciales repetidos
    _service.partials = _service.partials.filter((val, ind, arr) => arr.indexOf(val) === ind);

    // Convierte los parciales a BitInt
    _service.partials = _service.partials.map((val) => discord.Partials[val]);
};

for (const _application of cache.applications) {
    
    // Filtra los parciales repetidos
    _application.partials = _application.partials.filter((val, ind, arr) => arr.indexOf(val) === ind);

    // Convierte los parciales a BitInt
    _application.partials = _application.partials.map((val) => discord.Partials[val]);
};

// Exporta los archivos cargados
module.exports = cache;