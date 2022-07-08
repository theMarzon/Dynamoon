export default {

    priority: 3,

    execute: ({ client, file, loaded, used, directories }) => {

        client.on('ready', () => {

            for (const _loadedFile of used.events[file.name].all) {

                for (const _fileEvent of _loadedFile.events[file.name]) {

                    _fileEvent({

                        client, loaded, used, directories,

                        file: _loadedFile
                    });
                };
            };
        });
    }
};
