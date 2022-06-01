export default {

    priority: 4,

    execute: ({ client, me, loadeds, groupeds, managers }) => {

        for (const _loadedFile of groupeds.events[me.name].all) {

            // Ejecuta el evento del archivo
            _loadedFile.events[me.name]({

                client, loadeds, managers, groupeds,

                me: _loadedFile
            });
        };
    }
};