import { ToolsBuilder } from '../../engine/structures/Tools.js';

export default {

    priority: 2,
    
    execute: ({ client, loaders, groupers, managers, tools }) => {

        client.on('interactionCreate', async (event) => {
            
            // Si no es un menu
            if (!event.isSelectMenu()) return;

            for (const _loadedFile of groupers.events[tools.file.name].all) {

                const fileArguments = {

                    client, event, loaders, managers, groupers,

                    tools: new ToolsBuilder(_loadedFile)
                };

                // Carga el evento 
                _loadedFile.events[tools.file.name](fileArguments);
            };
        });
    }
};