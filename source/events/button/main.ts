import discord from 'discord.js';

import { EventOptions } from '../../framework/types/Event.js';

export default <Omit<EventOptions, 'name'>> {

    priority: 1,

    execute: ({ client, me, loaded, used }) => {

        client.on(discord.Events.InteractionCreate, (event) => {

            // Si no es un boton
            if (event.type          !== discord.InteractionType.MessageComponent
            ||  event.componentType !== discord.ComponentType.Button) return;

            for (const _loadedFile of used.events.get(me.name)!!.all) {

                _loadedFile.events[me.name]({

                    client, event, loaded, used,

                    me: _loadedFile
                });
            };
        });
    }
};
