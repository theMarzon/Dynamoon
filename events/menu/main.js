export default {

    priority: 1,

    execute: function ({ client, me, loaded, used, directories }) {

        client.on('interactionCreate', (event) => {

            // Si no es un menu
            if (!event.isSelectMenu()) return;

            for (const _loadedFile of used.events[me.name].all) {

                // Ejecuta los eventos del archivo
                for (const _event of _loadedFile.events[me.name]) {

                    _event({

                        client, event, loaded, used, directories,

                        me: _loadedFile
                    });
                };
            };
        });
    }
};
