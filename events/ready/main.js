const discord = require('discord.js');

module.exports = {

    priority: 2,

    event: function ({ client, manager, databases, bases, utils }) {

        client.on(discord.Events.ClientReady, () => {

            for (const _file of manager.events[utils.file.name].all) {

                try {

                    // Carga el evento del archivo
                    _file.events[utils.file.name]({

                        client,
                        manager,
                        databases,
                        bases,
                        utils: new bases.utils(_file)
                    });
                } catch (err) {

                    // Muestra el error en la consola
                    console.log(`Ejecucion del evento (${utils.file.name}) fallida`, err);
                };
            };
        });
    }
};