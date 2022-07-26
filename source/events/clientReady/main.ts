import discord from 'discord.js';

import { EventOptions } from '../../framework/types/Event.js';

export default <Omit<EventOptions, 'name'>> {

    priority: 3,

    execute: ({ client, file, loaded, used }) => {

        client.once(discord.Events.ClientReady, () => {

            for (const _loadedFile of used.events[file.name].all) {

                _loadedFile.events[file.name]({

                    client, loaded, used,

                    file: _loadedFile
                });
            };
        });
    }
};
