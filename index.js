import discord from 'discord.js';
import dotenv  from 'dotenv';

import usedIntents   from './source/framework/groupers/usedIntents.js';
import usedPartials  from './source/framework/groupers/usedPartials.js';
import executeEvents from './source/framework/managers/executeEvents.js';

// Configura las variables de entorno
dotenv.config();

// Crea el cliente
const client = new discord.Client({

    intents:  usedIntents,
    partials: usedPartials,

    allowedMentions: { repliedUser: false, parse: [] }
});

// Configura los eventos maximos del cliente
client.setMaxListeners(1);

// Agrega al cliente informacion sobre el framework
client.framework = {

    name:       'Dynamoon',
    version:    '0.7.0',
    repository: 'https://github.com/theMarzon/Dynamoon',

    images: {

        banner: 'https://i.ibb.co/wNtKXXw/banner.png',
        icon:   'https://i.ibb.co/sW9cJx4/icon.png',
        logo:   'https://i.ibb.co/CKz4kQQ/logo.png'
    }
};

// Ejecuta los eventos
executeEvents(client);

client
    .login(process.env.BOT_TOKEN)
    .then(() => console.log('Bot connected'));
