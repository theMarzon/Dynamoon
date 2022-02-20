const bases    = require('../../bases/export.js');
const loadeds  = require('../../loadeds/export.js');
const sources  = require('../../sources/export.js');
const managers = require('../../managers/export.js');
const cache    = require('../../cache.js');

module.exports = function (client) {

    // Carga los eventos
    for (const _event of loadeds.events) {

        // Si el evento no fue cargado salta al siguiente
        if (!sources.events[_event.name]) continue;
        
        _event.event({
                
            client,
            loadeds,
            sources,
            managers,
            cache,
            bases,
            utils: new bases.utils(_event)
        });
    };
};