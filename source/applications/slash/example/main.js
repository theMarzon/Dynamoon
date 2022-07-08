import discord from 'discord.js';

export default {

    display: {

        name: {

            default: 'example',

            'es-US': 'ejemplo',
            'en-US': 'example'
        },

        description: {

            default: 'Comando de ejemplo',

            'es-ES': 'Comando de ejemplo',
            'en-US': 'Example command'
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
