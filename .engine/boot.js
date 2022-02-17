const bases   = require('./bases/export.js');
const manager = require('./manager/export.js');
const cache   = require('./cache.js');

module.exports = function (client) {

    for (const _event of manager.files.events) {

        // Si el evento no fue cargado salta al siguiente
        if (!manager.events[_event.name]) continue;
        
        // Carga el evento
        _event.event({
                
            client,
            manager,
            cache,
            bases,
            utils: new bases.utils(_event)
        });
    };
};