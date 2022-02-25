const discord = require('discord.js');

module.exports = {

    intents: [
        
        discord.IntentsBitField.Flags.Guilds,
        discord.IntentsBitField.Flags.GuildEmojisAndStickers
    ],

    event: function ({ client, loadeds, sources, managers, bases, utils }) {

        client.on(discord.Events.GuildEmojiCreate, (event) => {

            for (const _file of sources.events[utils.file.name].all) {

                // Carga el evento
                _file.events[utils.file.name]({

                    client,
                    event,
                    loadeds,
                    sources,
                    managers,
                    bases,
                    utils: new bases.utils(_file)
                });
            };
        });
    }
};