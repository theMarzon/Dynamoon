import discord from 'discord.js';
import dotenv  from 'dotenv';

import intentsGroup  from './engine/groupers/intents.js';
import eventsManager from './engine/managers/events.js';

// El modo en el que se ejecuta el proyecto
const mode = (process.argv.includes('--dev-mode'))  ? 'development'
           : (process.argv.includes('--prod-mode')) ? 'production'
           :                                          'default';

// Configura las variables de entorno
dotenv.config();

// Crea el cliente
let client = new discord.Client({

    intents: intentsGroup,

    allowedMentions: { parse: [], repliedUser: false }
});

// Crea valores extra en el cliente
client.engine = {

    mode,

    name:    'Dinamoon',
    version: '0.5.0',

    repository: 'https://github.com/theMarzon/Dinamoon',

    images: {

        banner: 'https://i.ibb.co/ZNwcYYH/banner.png',
        icon:   'https://i.ibb.co/S56zQ17/icon.png',
        logo:   'https://i.ibb.co/02kJWXt/logo.png'
    }
};

// Ejecuta los eventos
eventsManager(client);

// Conecta el cliente
const token = (mode === 'development') ? process.env.DEVELOPMENT_TOKEN
            : (mode === 'production')  ? process.env.PRODUCTION_TOKEN
            :                            process.env.TOKEN;

client.login(token)
      .then(() => console.log('Connection established'));