export default {

    priority: 4,

    execute: ({ client, file, loaded, used }) => {

        for (const _loadedFile of used.events[file.name].all) {

            _loadedFile.events[file.name]({

                client, loaded, used,

                file: _loadedFile
            });
        };
    }
};
