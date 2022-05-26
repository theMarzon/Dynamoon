import discord from 'discord.js';

import channelRestriction from './restrictions/channel.js';
import replyRestriction   from './restrictions/reply.js';

export default {

    priority: 2,
    
    execute: ({ client, me, loaders, groupers, managers }) => {

        client.on('interactionCreate', async (event) => {
            
            // Si no es un comando
            if (!event.isCommand()) return;

            for (const _loadedApplication of groupers.events[me.name].applications) {

                if (event.commandName === _loadedApplication.name.default
                &&    (event.isChatInputCommand()          && _loadedApplication.type === discord.ApplicationCommandType.ChatInput
                    || event.isUserContextMenuCommand()    && _loadedApplication.type === discord.ApplicationCommandType.User
                    || event.isMessageContextMenuCommand() && _loadedApplication.type === discord.ApplicationCommandType.Message)) {

                    const fileArguments = {

                        client, event, loaders, managers, groupers,

                        me: _loadedApplication
                    };

                    if (await channelRestriction(fileArguments)
                    &&  await replyRestriction(fileArguments)) {

                        // Carga el evento 
                        _loadedApplication.events[me.name](fileArguments);
                    };

                    // Detiene el bucle
                    break;
                };
            };
        });
    }
};