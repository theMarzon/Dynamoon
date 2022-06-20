import discord from 'discord.js';

export default {

    priority: 3,

    execute: ({ client, me, loaded, grouped, directories }) => {

        client.on(discord.Events.ClientReady, () => {

            for (const _loadedFile of grouped.events[me.name].all) {

                // Ejecuta los eventos en cadena
                for (const _chainedEvent of _loadedFile.events[me.name]) {

                    _chainedEvent({

                        client, loaded, grouped, directories,

                        me: _loadedFile
                    });
                };
            };
        });
    }
};
