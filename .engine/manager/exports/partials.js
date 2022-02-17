const files  = require('./files.js');
const events = require('./events.js');

let partials = [];

for (const _event of files.events) {

    // Si el evento no fue cargado salta al siguiente
    if (!events[_event.name]) continue;

    // Elimina los parciales repetidos
    _event.partials = _event.partials.filter((val, ind, arr) => arr.indexOf(val) === ind);

    // Importa los parciales del evento
    partials = partials.concat(_event.partials);

    // Importa los parciales de los archivos que contiene el evento
    for (const _all of events[_event.name].all) {

        // Elimina los parciales repetidos
        _all.partials = _all.partials.filter((val, ind, arr) => arr.indexOf(val) === ind);

        // Importa los parciales del archivo
        partials = partials.concat(_all.partials);
    };
};

// Elimina los parciales repetidos
// partials = partials.filter((val, ind, arr) => arr.indexOf(val) === ind);

// Exporta los parciales
module.exports = partials;