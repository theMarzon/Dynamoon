const bases   = require('./bases/export.js');
const manager = require('./manager/exports.js');

module.exports = function (client) {

    for (const _event of manager.files.events) {

        // Salta el evento si este no fue cargado
        if (!manager.events[_event.name]) continue;

        // Carga el evento
        _event.event({
            
            client,
            manager,
            bases,
            utils: new bases.utils(_event)
        });
    };
};