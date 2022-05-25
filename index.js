import discord from 'discord.js';
import dotenv  from 'dotenv';

import intentsGroup  from './engine/groupers/intents.js';
import eventsManager from './engine/managers/events.js';

// Configura las variables de entorno
dotenv.config();

// Crea el cliente
const client = new discord.Client({

    intents: intentsGroup,

    allowedMentions: { parse: [], repliedUser: false }
});

// Ejecuta los eventos
eventsManager(client);

// Conecta el cliente
const clientToken = (process.argv.includes('--dev-mode'))  ? process.env.DEVELOPMENT_TOKEN
                  : (process.argv.includes('--prod-mode')) ? process.env.PRODUCTION_TOKEN
                  :                                          process.env.TOKEN;

client.login(clientToken)
      .then(() => console.log('Connection established'));