const files  = require('./files.js');
const events = require('./events.js');

let cache = [];

// Carga los parciales de los archivos
for (const _event of files.events) {

    // Salta la carga si el evento no fue cargado
    if (!events[_event.name]) continue;

    // Carga los parciales del evento
    cache = cache.concat(_event.intents);

    // Carga los parciales de los archivos que contiene el evento
    for (const _all of events[_event.name].all) {

        // Carga los parciales del archivo
        cache = cache.concat(_all.intents);
    };
};

// Elimina los parciales repetidos
cache = cache.filter((val, ind, arr) => arr.indexOf(val) === ind);

// Exporta los parciales
module.exports = cache;