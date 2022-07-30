import discord from 'discord.js';

import { EventOptions } from '../../framework/types/Event.js';

export default {

    priority: 3,

    execute: ({ client, me, loaded, used }) => {

        client.once(discord.Events.ClientReady, () => {

            for (const _loadedFile of used.events.get(me.name)!!.all) {

                _loadedFile.events[me.name]({

                    client, loaded, used,

                    me: _loadedFile
                });
            };
        });
    }
} as Omit<EventOptions, 'name'>;
