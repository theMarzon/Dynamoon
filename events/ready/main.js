export default {

    priority: 3,

    execute: function ({ client, me, loadeds, groupeds, managers }) {

        client.on('ready', () => {

            for (const _loadedFile of groupeds.events[me.name].all) {

                // Ejecuta los eventos del archivo
                for (const _event of _loadedFile.events[me.name]) {

                    _event({

                        client, loadeds, managers, groupeds,

                        me: _loadedFile
                    });
                };
            };
        });
    }
};
