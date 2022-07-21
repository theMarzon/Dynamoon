import discord from 'discord.js';

export default {

    priority: 2,

    execute: ({ client, file, loaded, used }) => {

        client.on(discord.Events.InteractionCreate, (event: discord.Interaction) => {

            // Si no es una aplicacion
            if (event.type !== discord.InteractionType.ApplicationCommand) return;

            for (const _loadedApplication of used.events[file.name].applications) {

                // Si la aplicacion que de la interaccion no tiene el mismo tipo
                if (_loadedApplication.type !== event.commandType) continue;

                // Si la aplicacion que de la interaccion no tiene el mismo nombre
                if (event.commandName !== _loadedApplication.display.name.default) continue;

                for (const _fileEvent of _loadedApplication.events[file.name]) {

                    _fileEvent({

                        client, event, loaded, used,

                        file: _loadedApplication
                    });
                };
            };
        });
    }
};
