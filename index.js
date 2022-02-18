const discord = require('discord.js');
const dotenv  = require('dotenv');

const manager = require('./.engine/manager/export.js');

// Configura las variables de entorno
dotenv.config();

// Crea el cliente
const client = new discord.Client({

    intents:  manager.intents,
    partials: manager.partials,

    allowedMentions: { 
        
        parse: [], 

        repliedUser: false 
    },

    rest: { version: '10' }
});

// Carga los archivos
require('./.engine/boot.js')(client);

// Conecta el cliente
client.login(process.env.token)
.then(() => console.log('Conexion establecida'));