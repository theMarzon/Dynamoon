export default {

    execute: ({ client, file, loaded, used, directories }) => {

        client.on('typingStart', (event) => {

            // Si no es un boton
            if (!event.isButton()) return;

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
