import discord from 'discord.js';

export default {

    description: {
        
        default: 'Comando de ejemplo',

        'es-ES': 'Comando de ejemplo',
        'en-US': 'Example command'
    },

    reply: { private: true },

    public: true,

    events: {
        
        application: ({ client, event, me, loaders, groupers, managers }) => {
            
            const messageEmbed = new discord.EmbedBuilder({

                color: discord.Colors.White,

                description: `👋😃 ${event.user.toString()}`
            });
            
            // event.editReply({ embeds: [ messageEmbed ] });
        }
    }
};