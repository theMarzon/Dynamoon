const files  = require('./files.js');
const events = require('./events.js');

let intents = [];

for (const _event of files.events) {

    // Si el evento no fue cargado salta al siguiente
    if (!events[_event.name]) continue;

    // Elimina los intentos repetidos
    _event.intents = _event.intents.filter((val, ind, arr) => arr.indexOf(val) === ind);

    // Importa los intentos del evento
    intents = intents.concat(_event.intents);

    // Importa los intentos de los archivos que contiene el evento
    for (const _all of events[_event.name].all) {

        // Elimina los intentos repetidos
        _all.intents = _all.intents.filter((val, ind, arr) => arr.indexOf(val) === ind);

        // Importa los intentos del archivo
        intents = intents.concat(_all.intents);
    };
};

// Exporta los intentos
module.exports = intents;