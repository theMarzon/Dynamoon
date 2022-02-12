module.exports = {

    priority: 3,

    event: function ({ client, manager, bases, utils }) {

        for (const _file of manager.events[utils.file.name].all) {

            try {

                // Carga el evento del archivo
                _file.events[utils.file.name]({

                    client,
                    manager,
                    bases,
                    utils: new bases.utils(_file)
                });
            } catch (err) {

                // Muestra el error en la consola
                console.log(`Ejecucion del evento (${utils.file.name}) fallida`, err);
            };
        };
    }
};