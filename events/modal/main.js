export default {

    priority: 2,
    
    execute: ({ client, me, loadeds, groupeds, managers }) => {

        client.on('interactionCreate', (event) => {
            
            // Si no es un modal
            if (!event.isModalSubmit()) return;

            for (const _loadedFile of groupeds.events[me.name].all) {

                // Ejecuta el evento del archivo
                _loadedFile.events[me.name]({

                    client, event, loadeds, managers, groupeds,

                    me: _loadedFile
                });
            };
        });
    }
};