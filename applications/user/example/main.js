import discord from 'discord.js';

export default {

    stable: true,

    events: {
        
        application: ({ client, event, me, loaders, groupers, managers }) => {

            const messageEmbed = new discord.EmbedBuilder({

                color: discord.Colors.White,

                description: `👋😃 ${event.user.toString()}`
            });
            
            event.editReply({ embeds: [ messageEmbed ] });
        }
    }
};