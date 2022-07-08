import discord from 'discord.js';

export default {

    display: {

        name: {

            default: 'Example',

            'es-US': 'Ejemplo',
            'en-US': 'Example'
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
