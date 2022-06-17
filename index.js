import path    from 'node:path';
import discord from 'discord.js';
import dotenv  from 'dotenv';

import usedParameters from './source/core/managers/usedParameters.js';
import usedIntents    from './source/core/groupers/usedIntents.js';
import usedPartials   from './source/core/groupers/usedPartials.js';
import executeEvents  from './source/core/managers/executeEvents.js';

// Crea el cliente
const client = new discord.Client({

    intents:  usedIntents,
    partials: usedPartials,

    allowedMentions: { parse: [], repliedUser: false }
});

// Crea valores extra en el cliente
client.core = {

    name:       'Dinamoon',
    version:    '0.6.0',
    repository: 'https://github.com/theMarzon/Dinamoon',

    images: {

        banner: 'https://i.ibb.co/ZNwcYYH/banner.png',
        icon:   'https://i.ibb.co/S56zQ17/icon.png',
        logo:   'https://i.ibb.co/02kJWXt/logo.png'
    }
};

// Configura las variables de entorno
dotenv.config({

    path: (usedParameters.environment === 'development') ? path.join(process.cwd(), '.env.development')
        : (usedParameters.environment === 'production')  ? path.join(process.cwd(), '.env.production')
        :                                                  path.join(process.cwd(), '.env')
});

// Ejecuta los eventos
executeEvents(client);

client.login(process.env.TOKEN)
      .then(() => console.log('Connection established'));
