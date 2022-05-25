import { ToolsBuilder } from '../../engine/structures/Tools.js';

export default {

    priority: 4,

    execute: ({ client, loaders, groupers, managers, tools }) => {

        for (const _loadedFile of groupers.events[tools.file.package].all) {

            // Carga el evento
            _loadedFile.events[tools.file.package]({

                client, loaders, managers, groupers,

                tools: new ToolsBuilder(_loadedFile)
            });
        };
    }
};