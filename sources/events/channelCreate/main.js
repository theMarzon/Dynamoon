const discord = require('discord.js');

module.exports = {

    intents: [
        
        discord.IntentsBitField.Flags.Guilds
    ],

    event: function ({ client, manager, cache, bases, utils }) {

        client.on(discord.Events.ChannelCreate, (event) => {

            for (const _file of manager.events[utils.file.name].all) {

                // Carga el evento
                _file.events[utils.file.name]({

                    client,
                    event,
                    manager,
                    cache,
                    bases,
                    utils: new bases.utils(_file)
                });
            };
        });
    }
};