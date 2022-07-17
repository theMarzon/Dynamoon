export default {

    priority: 4,

    execute: ({ client, me, loaded, used, directories }) => {

        for (const _loadedFile of used.events[me.name].all) {

            for (const _fileEvent of _loadedFile.events[me.name]) {

                _fileEvent({

                    client, loaded, used, directories,

                    me: _loadedFile
                });
            };
        };
    }
};
