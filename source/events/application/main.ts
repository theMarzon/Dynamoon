import discord from 'discord.js';

import { EventOptions } from '../../framework/types/Event.js';

export default <Omit<EventOptions, 'name'>> {

    priority: 2,

    execute: ({ client, me, loaded, used }) => {

        client.on(discord.Events.InteractionCreate, (event) => {

            // Si no es una aplicacion
            if (event.type !== discord.InteractionType.ApplicationCommand) return;

            for (const _loadedFile of used.events.get(me.name)!!.applications) {

                // Si la aplicacion que de la interaccion no tiene el mismo tipo
                if (event.commandType !== _loadedFile.type) continue;

                // Si la aplicacion que de la interaccion no tiene el mismo nombre
                if (event.commandName !== _loadedFile.display.name.default) continue;

                _loadedFile.events[me.name]({

                    client, event, loaded, used,

                    me: _loadedFile
                });
            };
        });
    }
};
