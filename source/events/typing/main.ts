import discord from 'discord.js';

export default {

    execute: ({ client, file, loaded, used }) => {

        client.on(discord.Events.TypingStart, (event: discord.Typing) => {

            for (const _loadedFile of used.events[file.name].all) {

                for (const _fileEvent of _loadedFile.events[file.name]) {

                    _fileEvent({

                        client, event, loaded, used,

                        file: _loadedFile
                    });
                };
            };
        });
    }
};
