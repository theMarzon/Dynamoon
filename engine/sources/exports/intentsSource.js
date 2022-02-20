const eventsLoaded = require('../../loadeds/exports/eventsLoaded.js');
const eventsSource = require('./eventsSource.js');

let cache = [];

for (const _event of eventsLoaded) {

    // Si el evento no fue cargado salta al siguiente
    if (!eventsSource[_event.name]) continue;

    // Importa los intentos del evento
    cache = cache.concat(_event.intents);

    // Importa los intentos de los archivos que contiene el evento
    for (const _all of eventsSource[_event.name].all) {

        cache = cache.concat(_all.intents);
    };
};

// Elimina los intentos repetidos
cache = cache.filter((val, ind, arr) => arr.indexOf(val) === ind);

// Exporta los intentos
module.exports = cache;