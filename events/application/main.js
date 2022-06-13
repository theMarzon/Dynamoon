import discord from 'discord.js';

import restrictions from './restrictions.js';

export default {

    priority: 2,

    execute: function ({ client, me, loadeds, groupeds, managers }) {

        client.on('interactionCreate', async (event) => {

            // Si no es un comando
            if (!event.isChatInputCommand()
            &&  !event.isUserContextMenuCommand()
            &&  !event.isMessageContextMenuCommand()) return;

            for (const _application of groupeds.events[me.name].applications) {

                if (event.commandName === _application.name.default
                &&    (event.isChatInputCommand()          && _application.type === discord.ApplicationCommandType.ChatInput
                    || event.isUserContextMenuCommand()    && _application.type === discord.ApplicationCommandType.User
                    || event.isMessageContextMenuCommand() && _application.type === discord.ApplicationCommandType.Message)) {

                    const fileArguments = {

                        client, event, loadeds, managers, groupeds,

                        me: _application
                    };

                    // Si no hay ninguna restriccion a la interaccion
                    if (!restrictions(fileArguments)) break;

                    // Ejecuta los eventos de la aplicacion
                    for (const _event of _application.events[me.name]) {

                        _event(fileArguments);
                    };

                    // Detiene el bucle
                    break;
                };
            };
        });
    }
};
