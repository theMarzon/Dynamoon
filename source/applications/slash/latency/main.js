import discord from 'discord.js';

export default {

    display: {

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

        application: [

            ({ client, event, me, loaded, used, directories }) => {

                event.reply({

                    content: `${client.ws.ping} ms`,

                    ephemeral: true
                });
            }
        ]
    }
};
