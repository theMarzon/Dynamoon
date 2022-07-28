import discord from 'discord.js';

import { EventOptions } from '../../framework/types/Event.js';

export default <Omit<EventOptions, 'name'>> {

    priority: 1,

    execute: ({ client, file, loaded, used }) => {

        client.on(discord.Events.InteractionCreate, (event) => {

            // Si no es un boton
            if (event.type          !== discord.InteractionType.MessageComponent
            ||  event.componentType !== discord.ComponentType.Button) return;

            for (const _loadedFile of used.events[file.name].all) {

                _loadedFile.events[file.name]({

                    client, event, loaded, used,

                    file: _loadedFile
                });
            };
        });
    }
};
