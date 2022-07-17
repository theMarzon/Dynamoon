import discord from 'discord.js';

export default {

    priority: 1,

    execute: ({ client, me, loaded, used, directories }) => {

        client.on(discord.Events.InteractionCreate, (event) => {

            // Si no es un modal
            if (!event.isModalSubmit()) return;

            for (const _loadedFile of used.events[me.name].all) {

                for (const _fileEvent of _loadedFile.events[me.name]) {

                    _fileEvent({

                        client, event, loaded, used, directories,

                        me: _loadedFile
                    });
                };
            };
        });
    }
};
