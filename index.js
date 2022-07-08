import discord from 'discord.js';
import dotenv  from 'dotenv';

import usedIntents   from './source/handler/groupers/usedIntents.js';
import usedPartials  from './source/handler/groupers/usedPartials.js';
import executeEvents from './source/handler/managers/executeEvents.js';

// Crea el cliente
const client = new discord.Client({

    intents:  usedIntents,
    partials: usedPartials,

    allowedMentions: { repliedUser: false, parse: []  }
});

// Agrega al cliente informacion sobre el gestor
client.handler = {

    name:       'Dynamoon',
    version:    '0.7.0',
    repository: 'https://github.com/theMarzon/Dynamoon',

    images: {

        banner: 'https://i.ibb.co/wNtKXXw/banner.png',
        icon:   'https://i.ibb.co/sW9cJx4/icon.png',
        logo:   'https://i.ibb.co/CKz4kQQ/logo.png'
    }
};

// Configura las variables de entorno
dotenv.config();

// Ejecuta los eventos
executeEvents(client);

client
    .login(process.env.BOT_TOKEN)
    .then(() => console.log('Bot connected'));
