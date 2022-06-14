export default {

    priority: 3,

    execute: function ({ client, me, loaded, grouped, directories }) {

        client.on('ready', async () => {

            for (const _loadedFile of grouped.events[me.name].all) {

                // Ejecuta los eventos en cadena
                for (const _chainedEvent of _loadedFile.events[me.name]) {

                    await _chainedEvent({

                        client, loaded, grouped, directories,

                        me: _loadedFile
                    });
                };
            };
        });
    }
};
