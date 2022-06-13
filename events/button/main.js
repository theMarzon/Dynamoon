export default {

    priority: 1,

    execute: function ({ client, me, loadeds, groupeds, managers }) {

        client.on('interactionCreate', (event) => {

            // Si no es un boton
            if (!event.isButton()) return;

            for (const _file of groupeds.events[me.name].all) {

                // Ejecuta los eventos del archivo
                for (const _event of _file.events[me.name]) {

                    _event({

                        client, event, loadeds, managers, groupeds,

                        me: _file
                    });
                };
            };
        });
    }
};
