import discord from 'discord.js';

export default {

    events: {

        application: [

            ({ client, event, me, loaded, grouped, directories }) => {

                const messageEmbed = new discord.EmbedBuilder({

                    color: discord.Colors.White,

                    description: `👋😃 ${event.user.toString()}`
                });

                event.reply({ embeds: [ messageEmbed ], ephemeral: true });
            }
        ]
    }
};
