import discord from 'discord.js';

export default {

    priority: 2,

    execute: ({ client, me, loaded, used, directories }) => {

        client.on(discord.Events.InteractionCreate, (event) => {

            // Si no es un comando
            if (!event.isChatInputCommand()
            &&  !event.isUserContextMenuCommand()
            &&  !event.isMessageContextMenuCommand()) return;

            for (const _loadedApplication of used.events[me.name].applications) {

                // Si la aplicacion que creo la interaccion no tiene el mismo nombre
                if (event.commandName !== _loadedApplication.display.name.default) continue;

                // Si la aplicacion que creo la interaccion no tiene el mismo tipo
                if (event.isChatInputCommand()          && _loadedApplication.type !== discord.ApplicationCommandType.ChatInput) continue;
                if (event.isUserContextMenuCommand()    && _loadedApplication.type !== discord.ApplicationCommandType.User)      continue;
                if (event.isMessageContextMenuCommand() && _loadedApplication.type !== discord.ApplicationCommandType.Message)   continue;

                for (const _fileEvent of _loadedApplication.events[me.name]) {

                    _fileEvent({

                        client, event, loaded, used, directories,

                        me: _loadedApplication
                    });
                };
            };
        });
    }
};
