import discord from 'discord.js';

export default {

    priority: 1,

    execute: ({ client, me, loaded, grouped, directories }) => {

        client.on(discord.Events.InteractionCreate, (event) => {

            for (const _loadedFile of grouped.events[me.name].all) {

                for (const _fileEvent of _loadedFile.events[me.name]) {

                    _fileEvent({

                        client, event, loaded, grouped, directories,

                        me: _loadedFile
                    });
                };
            };
        });
    }
};
