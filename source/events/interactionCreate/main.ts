import discord from 'discord.js';

import { EventOptions } from '../../framework/types/Event.js';

export default {

    priority: 1,

    execute: ({ client, me, loaded, used }) => {

        client.on(discord.Events.InteractionCreate, (event) => {

            for (const _loadedFile of used.events.get(me.name)!!.all) {

                _loadedFile.events[me.name]({

                    client, event, loaded, used,

                    me: _loadedFile
                });
            };
        });
    }
} as Omit<EventOptions, 'name'>;
