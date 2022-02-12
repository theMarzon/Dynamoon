const files  = require('./files.js');
const events = require('./events.js');

let cache = [];

for (const _event of files.events) {

    // Salta la carga si el evento no fue cargado
    if (!events[_event.name]) continue;

    // Carga los intentos del evento
    for (const _intent of _event.intents) {

        // Salta si el intento ya fue cargado
        if (cache.includes(_intent)) continue;

        // Carga el intento
        cache.push(_intent);
    };

    // Carga los intentos de los archivos que contiene el evento
    for (const _all of events[_event.name].all) {

        // Carga los intentos del archivo
        for (const _intent of _all.intents) {

            // Salta si el intent ya fue cargado
            if (cache.includes(_intent)) continue;

            // Carga el intento
            cache.push(_intent);
        };
    };
};

// Exporta los intentos
module.exports = cache;