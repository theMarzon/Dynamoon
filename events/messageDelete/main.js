const discord = require('discord.js');

module.exports = {

    intents: [

        discord.IntentsBitField.Flags.Guilds,
        discord.IntentsBitField.Flags.GuildMessages
    ],

    event: function ({ client, manager, bases, utils }) {

        client.on(discord.Events.GuildDelete, (event) => {

            for (const _file of manager.events[utils.file.name].all) {

                try {

                    // Carga el evento del archivo
                    _file.events[utils.file.name]({

                        client,
                        event,
                        manager,
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