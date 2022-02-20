const eventsLoaded = require('../../loadeds/exports/eventsLoaded.js');
const eventsSource = require('./eventsSource.js');

let cache = [];

for (const _event of eventsLoaded) {

    // Si el evento no fue cargado salta al siguiente
    if (!eventsSource[_event.name]) continue;

    // Importa los parciales del evento
    cache = cache.concat(_event.partials);

    // Importa los parciales de los archivos que contiene el evento
    for (const _all of eventsSource[_event.name].all) {

        cache = cache.concat(_all.partials);
    };
};

// Elimina los parciales repetidos
cache = cache.filter((val, ind, arr) => arr.indexOf(val) === ind);

// Exporta los parciales
module.exports = cache;