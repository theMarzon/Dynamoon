export default {

    priority: 4,

    execute: ({ client, file, loaded, used, directories }) => {

        for (const _loadedFile of used.events[file.name].all) {

            for (const _fileEvent of _loadedFile.events[file.name]) {

                _fileEvent({

                    client, loaded, used, directories,

                    file: _loadedFile
                });
            };
        };
    }
};
