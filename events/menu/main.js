export default {

    priority: 2,
    
    execute: ({ client, me, loaders, groupers, managers }) => {

        client.on('interactionCreate', (event) => {
            
            // Si no es un menu
            if (!event.isSelectMenu()) return;

            for (const _loadedFile of groupers.events[me.name].all) {

                // Carga el evento 
                _loadedFile.events[me.name]({

                    client, event, loaders, managers, groupers,

                    me: _loadedFile
                });
            };
        });
    }
};