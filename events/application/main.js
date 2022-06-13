import discord from 'discord.js';

import restrictions from './restrictions.js';

export default {

    priority: 2,

    execute: function ({ client, me, loaded, used, directories }) {

        client.on('interactionCreate', async (event) => {

            // Si no es un comando
            if (!event.isChatInputCommand()
            &&  !event.isUserContextMenuCommand()
            &&  !event.isMessageContextMenuCommand()) return;

            for (const _loadedApplication of used.events[me.name].applications) {

                const fileArguments = {

                    client, event, loaded, used, directories,

                    me: _loadedApplication
                };

                // Si la aplicacion que creo la interaccion no tiene el mismo nombre
                if (event.commandName !== _loadedApplication.name.default) continue;

                // Si la aplicacion que creo la interaccion no tiene el mismo tipo
                if (event.isChatInputCommand()          && _loadedApplication.type !== discord.ApplicationCommandType.ChatInput) continue;
                if (event.isUserContextMenuCommand()    && _loadedApplication.type !== discord.ApplicationCommandType.User)      continue;
                if (event.isMessageContextMenuCommand() && _loadedApplication.type !== discord.ApplicationCommandType.Message)   continue;

                // Si se cumple una restriccion con la interaccion
                if (restrictions(fileArguments)) continue;

                // Ejecuta los eventos de la aplicacion
                for (const _event of _loadedApplication.events[me.name]) {

                    _event(fileArguments);
                };

                // Detiene el bucle
                break;
            };
        });
    }
};
