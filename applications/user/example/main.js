import discord from 'discord.js';

export default {

    events: {

        application: [

            function ({ client, event, me, loaded, used, directories }) {

                const messageEmbed = new discord.EmbedBuilder({

                    color: discord.Colors.White,

                    description: `👋😃 ${event.user.toString()}`
                });

                event.reply({ embeds: [ messageEmbed ] });
            }
        ]
    }
};
