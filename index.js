const discord = require('discord.js');
const dotenv  = require('dotenv');

const intentsSource  = require('./core/sources/intentsSource.js');
const partialsSource = require('./core/sources/partialsSource.js');
const eventsManager  = require('./core/managers/eventsManager.js');

// Configura las variables de entorno
dotenv.config();

// Crea el cliente
const client = new discord.Client({

    intents:  intentsSource,
    partials: partialsSource,

    allowedMentions: { 
        
        parse: [], 

        repliedUser: false 
    },

    rest: { version: '10' }
});

// Ejecuta los eventos
eventsManager(client);

// Conecta el cliente
client.login(process.env.TOKEN)
.then(() => console.log('Conexion establecida'));