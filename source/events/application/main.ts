import discord from 'discord.js';

import { EventOptions } from '../../framework/types/Event.js';

export default <Omit<EventOptions, 'name'>> {

    priority: 2,

    execute: ({ client, file, loaded, used }) => {

        client.on(discord.Events.InteractionCreate, (event) => {

            // Si no es una aplicacion
            if (event.type !== discord.InteractionType.ApplicationCommand) return;

            for (const _loadedApplication of used.events[file.name].applications) {

                // Si la aplicacion que de la interaccion no tiene el mismo tipo
                if (_loadedApplication.type !== event.commandType) continue;

                // Si la aplicacion que de la interaccion no tiene el mismo nombre
                if (event.commandName !== _loadedApplication.show.name.default) continue;

                _loadedApplication.events[file.name]({

                    client, event, loaded, used,

                    file: _loadedApplication
                });
            };
        });
    }
};
