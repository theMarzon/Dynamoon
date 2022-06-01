export default {

    priority: 3,

    execute: ({ client, me, loadeds, groupeds, managers }) => {

        client.on('ready', () => {

            for (const _loadedFile of groupeds.events[me.name].all) {

                // Ejecuta el evento del archivo
                _loadedFile.events[me.name]({

                    client, loadeds, managers, groupeds,

                    me: _loadedFile
                });
            };
        });
    }
};