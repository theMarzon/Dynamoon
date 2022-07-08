export default {

    priority: 4,

    execute: ({ client, me, loaded, grouped, directories }) => {

        for (const _loadedFile of grouped.events[me.name].all) {

            for (const _fileEvent of _loadedFile.events[me.name]) {

                _fileEvent({

                    client, loaded, grouped, directories,

                    me: _loadedFile
                });
            };
        };
    }
};
