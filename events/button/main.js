export default {

    priority: 1,

    execute: function ({ client, me, loaded, grouped, directories }) {

        client.on('interactionCreate', async (event) => {

            // Si no es un boton
            if (!event.isButton()) return;

            for (const _loadedFile of grouped.events[me.name].all) {

                // Ejecuta los eventos en cadena
                for (const _chainedEvent of _loadedFile.events[me.name]) {

                    await _chainedEvent({

                        client, event, loaded, grouped, directories,

                        me: _loadedFile
                    });
                };
            };
        });
    }
};
