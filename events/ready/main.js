export default {

    priority: 3,

    execute: function ({ client, me, loadeds, groupeds, managers }) {

        client.on('ready', () => {

            for (const _file of groupeds.events[me.name].all) {

                // Ejecuta los eventos del archivo
                for (const _event of _file.events[me.name]) {

                    _event({

                        client, loadeds, managers, groupeds,

                        me: _file
                    });
                };
            };
        });
    }
};
