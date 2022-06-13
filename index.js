import path    from 'node:path';
import discord from 'discord.js';
import dotenv  from 'dotenv';

import groupedIntents  from './core/groupers/intents.js';
import groupedPartials from './core/groupers/partials.js';
import eventsManager   from './core/managers/events.js';

// Crea el cliente
const client = new discord.Client({

    intents:  groupedIntents,
    partials: groupedPartials,

    allowedMentions: { parse: [], repliedUser: false }
});

// Crea valores extra en el cliente
client.core = {

    environment: (process.argv.includes('--development')) ? 'development'
               : (process.argv.includes('--production'))  ? 'production'
                                                          : 'standard',

    name:    'Dinamoon',
    version: '0.6.0',

    repository: 'https://github.com/theMarzon/Dinamoon',

    images: {

        banner: 'https://i.ibb.co/ZNwcYYH/banner.png',
        icon:   'https://i.ibb.co/S56zQ17/icon.png',
        logo:   'https://i.ibb.co/02kJWXt/logo.png'
    }
};

// Configura las variables de entorno
dotenv.config({

    path: (client.core.environment === 'development') ? path.join(process.cwd(), '.env.development')
        : (client.core.environment === 'production')  ? path.join(process.cwd(), '.env.production')
                                                      : path.join(process.cwd(), '.env')
});

// Ejecuta los eventos
eventsManager(client);

client.login(process.env.TOKEN)
      .then(() => console.log('Bot connected'));
