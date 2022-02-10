const discord = require('discord.js');

module.exports = {

    intents: [
        
        discord.IntentsBitField.Flags.Guilds,
        discord.IntentsBitField.Flags.GuildBans
    ],

    event: function ({ client, manager, databases, bases, utils }) {

        client.on(discord.Events.GuildBanAdd, (event) => {

            for (const _file of manager.events[utils.file.name].all) {

                try {

                    // Carga el evento del archivo
                    _file.events[utils.file.name]({

                        client,
                        event,
                        manager,
                        databases,
                        bases,
                        utils: new bases.utils(_file)
                    });
                } catch (err) {

                    // Muestra el error en la consola
                    console.log(`Ejecucion del evento (${utils.file.name}) fallida`, err);
                };
            };
        });
    }
};