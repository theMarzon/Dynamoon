export default {

    priority: 1,

    execute: ({ client, me, loaded, used, directories }) => {

        client.on('interactionCreate', (event) => {

            for (const _loadedFile of used.events[me.name].all) {

                for (const _fileEvent of _loadedFile.events[me.name]) {

                    _fileEvent({

                        client, event, loaded, used, directories,

                        me: _loadedFile
                    });
                };
            };
        });
    }
};
