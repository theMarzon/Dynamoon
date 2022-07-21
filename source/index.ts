import dotenv from 'dotenv';

import Client from './framework/structures/Client.js';

// Configura las variables de entorno
dotenv.config();

// Crea el cliente
const client = new Client({ partials: [], allowedMentions: { repliedUser: false, parse: [] } });

// Ejecuta los eventos
client.openEvents();

// Conecta el cliente
client
    .login(process.env.BOT_TOKEN)
    .then(() => console.log('Bot connected'));
