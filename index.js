const discord = require('discord.js');
const dotenv  = require('dotenv');

const manager = require('./core/manager/exports.js');

// Configura las variables de entorno
dotenv.config();

// Crea el cliente
const client = new discord.Client({

    intents:  manager.intents,
    partials: manager.partials,

    allowedMentions: { 
        
        parse: [], 
        repliedUser: false 
    }
});

// Carga los archivos
require('./core/boot.js')(client);

// Conecta el cliente
client.login(process.env.token)
.then(() => console.log('Conexion establecida'))
.catch((err) => console.log('Conexion fallida', err));