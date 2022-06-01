import discord from 'discord.js';

export default {

    description: {
        
        default: 'Comando de ejemplo',

        'es-ES': 'Comando de ejemplo',
        'en-US': 'Example command'
    },

    public: true,

    events: {
        
        application: ({ client, event, me, loadeds, groupeds, managers }) => {

            const messageEmbed = new discord.EmbedBuilder({

                color: discord.Colors.White,

                description: `👋😃 ${event.user.toString()}`
            });
            
            event.reply({ embeds: [ messageEmbed ], ephemeral: true });
        }
    }
};