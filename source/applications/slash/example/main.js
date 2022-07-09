import discord from 'discord.js';

export default {

    display: {

        name: {

            default: 'example',

            [discord.Locale.EnglishUS]: 'example',
            [discord.Locale.SpanishES]: 'ejemplo'
        },

        description: {

            default: 'Comando de ejemplo',

            [discord.Locale.EnglishUS]: 'Example command',
            [discord.Locale.SpanishES]: 'Comando de ejemplo'
        }
    },

    events: {

        application: [

            ({ client, event, file, loaded, used, directories }) => {

                const messageEmbed = new discord.EmbedBuilder({

                    color: discord.Colors.White,

                    description: `👋😃 ${event.user.toString()}`
                });

                event.reply({ ephemeral: true, embeds: [ messageEmbed ] });
            }
        ]
    }
};
