module.exports = {

    priority: 3,

    event: function ({ client, loadeds, sources, managers, bases, utils }) {

        for (const _file of sources.events[utils.file.name].all) {

            // Carga el evento
            _file.events[utils.file.name]({

                client,
                loadeds,
                sources,
                managers,
                bases,
                utils: new bases.utils(_file)
            });
        };
    }
};