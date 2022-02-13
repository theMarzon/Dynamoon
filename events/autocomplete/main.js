const discord = require('discord.js');

module.exports = {

    priority: 1,

    event: function ({ client, manager, bases, utils }) {

        client.on(discord.Events.InteractionCreate, (event) => {

            // Verifica si es un autocompletado
            if (!event.isAutocomplete()) return;

            for (const _file of manager.events[utils.file.name].applications) {

                if (event.commandName === _file.name
                &&  _file.type        === 'command') {

                    try {
                        
                        // Carga el evento del archivo
                        _file.events[utils.file.name]({

                            client,
                            event,
                            manager,
                            bases,
                            utils: new bases.utils(_file)
                        });
                    } catch (err) {

                        // Muestra el error en la consola
                        console.log(`Ejecucion del evento (${utils.file.name}) fallida`, err);
                    };

                    // Detiene el bucle
                    break;
                };
            };
        });
    }
};