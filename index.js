const discord = require('discord.js');
const dotenv  = require('dotenv');

const sources  = require('./engine/sources/export.js');
const managers = require('./engine/managers/export.js');

// Configura las variables de entorno
dotenv.config();

// Crea el cliente
const client = new discord.Client({

    intents:  sources.intents,
    partials: sources.partials,

    allowedMentions: { 
        
        parse: [], 

        repliedUser: false 
    },

    rest: { version: '10' }
});

// Ejecuta los eventos
managers.boot(client);

// Conecta el cliente
client.login(process.env.token)
.then(() => console.log('Conexion establecida'));