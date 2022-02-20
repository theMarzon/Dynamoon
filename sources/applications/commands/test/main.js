const discord = require('discord.js');

module.exports = {

    description: 'Comando de prueba',

    servers: true,
    users:   true,

    events: {
        
        application: function ({ client, event, loadeds, sources, managers, bases, utils }) {

            const messageEmbed = new discord.Embed()
            .setDescription(`Hola ${event.user.toString()}`)
            .setColor(discord.Colors.White);

            event.editReply({ embeds: [ messageEmbed ] });
        }
    }
};