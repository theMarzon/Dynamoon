import discord from 'discord.js';

export default {

    priority: 1,

    execute: ({ client, me, loaded, grouped, directories }) => {

        client.on(discord.Events.InteractionCreate, (event) => {

            // Si no es un boton
            if (!event.isButton()) return;

            for (const _loadedFile of grouped.events[me.name].all) {

                // Ejecuta los eventos en cadena
                for (const _chainedEvent of _loadedFile.events[me.name]) {

                    _chainedEvent({

                        client, event, loaded, grouped, directories,

                        me: _loadedFile
                    });
                };
            };
        });
    }
};
