import discord from 'discord.js';

export default {

    execute: ({ client, me, loaded, used, directories }) => {

        client.on(discord.Events.TypingStart, (event) => {

            // Si no es un boton
            if (!event.isButton()) return;

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
