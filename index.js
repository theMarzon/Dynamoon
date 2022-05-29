import discord from 'discord.js';
import dotenv  from 'dotenv';
import path    from 'node:path';

import intentsGroup  from './engine/groupers/intents.js';
import partialsGroup from './engine/groupers/partials.js';
import eventsManager from './engine/managers/events.js';

// El modo en el que se ejecuta el proyecto
const projectMode = (process.argv.includes('--dev-mode'))  ? 'development'
                  : (process.argv.includes('--prod-mode')) ? 'production'
                                                           : 'default';

// Genera la ruta exacta del archivo ".env" segun el modo en el que se ejecute el proyecto
const envPath = (projectMode === 'development') ? path.join(process.cwd(), '.env.development')
              : (projectMode === 'production')  ? path.join(process.cwd(), '.env.production')
                                                : path.join(process.cwd(), '.env');

// Configura las variables de entorno
dotenv.config({ path: envPath });

// Crea el cliente
let client = new discord.Client({

    intents:  intentsGroup,
    partials: partialsGroup,

    allowedMentions: { parse: [], repliedUser: false }
});

// Crea valores extra en el cliente
client.engine = {

    mode: projectMode,

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

client.login(process.env.TOKEN)
      .then(() => console.log('Connection established'));