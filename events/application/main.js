import discord from 'discord.js';

import guildsRestriction   from './restrictions/users.js';
import channelsRestriction from './restrictions/channels.js';
import usersRestriction    from './restrictions/users.js';

export default {

    priority: 2,
    
    execute: ({ client, me, loadeds, groupeds, managers }) => {

        client.on('interactionCreate', async (event) => {
            
            // Si no es un comando
            if (!event.isCommand()) return;

            for (const _loadedApplication of groupeds.events[me.name].applications) {

                if (event.commandName === _loadedApplication.name.default
                &&    (event.isChatInputCommand()          && _loadedApplication.type === discord.ApplicationCommandType.ChatInput
                    || event.isUserContextMenuCommand()    && _loadedApplication.type === discord.ApplicationCommandType.User
                    || event.isMessageContextMenuCommand() && _loadedApplication.type === discord.ApplicationCommandType.Message)) {

                    const fileArguments = {

                        client, event, loadeds, managers, groupeds,

                        me: _loadedApplication
                    };

                    if      (guildsRestriction(fileArguments)
                    && await channelsRestriction(fileArguments)
                    &&       usersRestriction(fileArguments)) {

                        // Ejecuta el evento del archivo
                        _loadedApplication.events[me.name](fileArguments);
                    };

                    // Detiene el bucle
                    break;
                };
            };
        });
    }
};