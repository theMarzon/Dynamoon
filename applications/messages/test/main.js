const discord = require('discord.js');

module.exports = {

    servers: true,
    users:   true,

    events: {
        
        application: function ({ client, event, manager, databases, bases, utils }) {

            const embed = new discord.Embed()
            .setDescription(`Hola ${event.user.toString()}`)
            .setColor(discord.Colors.White);

            event.editReply({ embeds: [ embed ] });
        }
    }
};