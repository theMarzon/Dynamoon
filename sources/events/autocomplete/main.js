const discord = require('discord.js');

module.exports = {

    priority: 2,

    event: function ({ client, manager, cache, bases, utils }) {

        client.on(discord.Events.InteractionCreate, (event) => {

            // Verifica si es un autocompletado
            if (!event.isAutocomplete()) return;

            for (const _file of manager.events[utils.file.name].applications) {

                if (event.commandName === _file.name
                &&  _file.type        === 'command') {
                        
                    // Carga el evento
                    _file.events[utils.file.name]({

                        client,
                        event,
                        manager,
                        cache,
                        bases,
                        utils: new bases.utils(_file)
                    });

                    // Detiene el bucle
                    break;
                };
            };
        });
    }
};