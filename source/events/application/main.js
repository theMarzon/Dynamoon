import discord from 'discord.js';

export default {

    priority: 2,

    execute: ({ client, file, loaded, used }) => {

        client.on(discord.Events.InteractionCreate, (event) => {

            // Si no es una aplicacion
            if (event.type !== discord.InteractionType.ApplicationCommand) return;

            for (const _loadedFile of used.events[file.name].applications) {

                // Si la aplicacion que de la interaccion no tiene el mismo tipo
                if (_loadedFile.type !== event.commandType) continue;

                // Si la aplicacion que de la interaccion no tiene el mismo nombre
                if (event.commandName !== _loadedFile.show.name.default) continue;

                _loadedFile.events[file.name]({

                    client, event, loaded, used,

                    file: _loadedFile
                });
            };
        });
    }
};
