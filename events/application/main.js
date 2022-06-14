import discord from 'discord.js';

import isIgnored from './restrictions/isIgnored.js';

export default {

    priority: 2,

    execute: function ({ client, me, loaded, grouped, directories }) {

        client.on('interactionCreate', async (event) => {

            // Si no es un comando
            if (!event.isChatInputCommand()
            &&  !event.isUserContextMenuCommand()
            &&  !event.isMessageContextMenuCommand()) return;

            for (const _loadedApplication of grouped.events[me.name].applications) {

                // Si la aplicacion que creo la interaccion no tiene el mismo nombre
                if (event.commandName !== _loadedApplication.name.default) continue;

                // Si la aplicacion que creo la interaccion no tiene el mismo tipo
                if (event.isChatInputCommand()          && _loadedApplication.type !== discord.ApplicationCommandType.ChatInput) continue;
                if (event.isUserContextMenuCommand()    && _loadedApplication.type !== discord.ApplicationCommandType.User)      continue;
                if (event.isMessageContextMenuCommand() && _loadedApplication.type !== discord.ApplicationCommandType.Message)   continue;

                // Si se tiene que ignorar esta interaccion
                if (isIgnored({

                    event,

                    me: _loadedApplication
                })) break;

                // Ejecuta los eventos en cadena
                for (const _chainedEvent of _loadedApplication.events[me.name]) {

                    await _chainedEvent({

                        client, event, loaded, grouped, directories,

                        me: _loadedApplication
                    });
                };

                // Detiene el bucle
                break;
            };
        });
    }
};
