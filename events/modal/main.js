export default {

    priority: 2,
    
    execute: ({ client, me, loaders, groupers, managers }) => {

        client.on('interactionCreate', (event) => {
            
            // Si no es un modal
            if (!event.isModalSubmit()) return;

            for (const _loadedFile of groupers.events[me.name].all) {

                // Ejecuta el evento del archivo
                _loadedFile.events[me.name]({

                    client, event, loaders, managers, groupers,

                    me: _loadedFile
                });
            };
        });
    }
};