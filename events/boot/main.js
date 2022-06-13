export default {

    priority: 4,

    execute: function ({ client, me, loaded, used, directories }) {

        for (const _loadedFile of used.events[me.name].all) {

            // Ejecuta los eventos del archivo
            for (const _event of _loadedFile.events[me.name]) {

                _event({

                    client, loaded, used, directories,

                    me: _loadedFile
                });
            };
        };
    }
};
