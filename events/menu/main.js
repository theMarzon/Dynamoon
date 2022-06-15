export default {

    priority: 1,

    execute: ({ client, me, loaded, grouped, directories }) => {

        client.on('interactionCreate', (event) => {

            // Si no es un menu
            if (!event.isSelectMenu()) return;

            for (const _loadedFile of grouped.events[me.name].all) {

                // Ejecuta los eventos en cadena
                for (const _chainedEvent of _loadedFile.events[me.name]) {

                    _chainedEvent({

                        client, event, loaded, grouped, directories,

                        me: _loadedFile
                    });
                };
            };
        });
    }
};
