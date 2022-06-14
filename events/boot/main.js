export default {

    priority: 4,

    execute: async function ({ client, me, loaded, grouped, directories }) {

        for (const _loadedFile of grouped.events[me.name].all) {

            // Ejecuta los eventos en cadena
            for (const _chainedEvent of _loadedFile.events[me.name]) {

                await _chainedEvent({

                    client, loaded, grouped, directories,

                    me: _loadedFile
                });
            };
        };
    }
};
