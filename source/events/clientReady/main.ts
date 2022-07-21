import discord from 'discord.js';

export default {

    priority: 3,

    execute: ({ client, file, loaded, used }) => {

        client.once(discord.Events.ClientReady, () => {

            for (const _loadedFile of used.events[file.name].all) {

                for (const _fileEvent of _loadedFile.events[file.name]) {

                    _fileEvent({

                        client, loaded, used,

                        file: _loadedFile
                    });
                };
            };
        });
    }
};
