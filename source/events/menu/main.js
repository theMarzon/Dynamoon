export default {

    priority: 1,

    execute: ({ client, file, loaded, used, directories }) => {

        client.on('interactionCreate', (event) => {

            // Si no es un menu
            if (!event.isSelectMenu()) return;

            for (const _loadedFile of used.events[file.name].all) {

                for (const _fileEvent of _loadedFile.events[file.name]) {

                    _fileEvent({

                        client, event, loaded, used, directories,

                        file: _loadedFile
                    });
                };
            };
        });
    }
};
