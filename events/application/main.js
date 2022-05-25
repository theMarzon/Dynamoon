import discord from 'discord.js';

import channelRestriction from './restrictions/channel.js';
import replyRestriction   from './restrictions/reply.js';

import { ToolsBuilder } from '../../engine/structures/Tools.js';

export default {

    priority: 2,
    
    execute: ({ client, loaders, groupers, managers, tools }) => {

        client.on('interactionCreate', async (event) => {
            
            // Si no es un comando
            if (!event.isCommand()) return;

            for (const _loadedApplication of groupers.events[tools.file.package].applications) {

                if (event.commandName === _loadedApplication.package
                &&    (event.isChatInputCommand()          && _loadedApplication.type === discord.ApplicationCommandType.ChatInput
                    || event.isUserContextMenuCommand()    && _loadedApplication.type === discord.ApplicationCommandType.User
                    || event.isMessageContextMenuCommand() && _loadedApplication.type === discord.ApplicationCommandType.Message)) {

                    const fileArguments = {

                        client, event, loaders, managers, groupers,

                        tools: new ToolsBuilder(_loadedApplication)
                    };

                    if (await channelRestriction(fileArguments)
                    &&  await replyRestriction(fileArguments)) {

                        // Carga el evento 
                        _loadedApplication.events[tools.file.package](fileArguments);
                    };

                    // Detiene el bucle
                    break;
                };
            };
        });
    }
};