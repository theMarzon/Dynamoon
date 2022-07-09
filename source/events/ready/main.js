import discord from 'discord.js';

export default {

    priority: 3,

    execute: ({ client, me, loaded, used, directories }) => {

        client.on(discord.Events.ClientReady, () => {

            for (const _loadedFile of used.events[me.name].all) {

                for (const _fileEvent of _loadedFile.events[me.name]) {

                    _fileEvent({

                        client, loaded, used, directories,

                        me: _loadedFile
                    });
                };
            };
        });
    }
};
