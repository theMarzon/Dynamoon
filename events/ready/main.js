export default {

    priority: 3,

    execute: ({ client, me, loaders, groupers, managers }) => {

        client.on('ready', () => {

            for (const _loadedFile of groupers.events[me.name].all) {

                // Carga el evento 
                _loadedFile.events[me.name]({

                    client, loaders, managers, groupers,

                    me: _loadedFile
                });
            };
        });
    }
};