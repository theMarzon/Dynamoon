import discord from 'discord.js';

export default {

    show: {

        name: {

            default: 'latency',

            [discord.Locale.SpanishES]: 'latencia'
        },

        description: {

            default: 'Show bot latency',

            [discord.Locale.SpanishES]: 'Mostrar la latencia del bot'
        }
    },

    events: {

        application: ({ client, event, file, loaded, used }) => {

            event.reply({ content: `${client.ws.ping} ms`, ephemeral: true });
        }
    }
};
