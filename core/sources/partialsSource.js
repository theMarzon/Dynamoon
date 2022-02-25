const eventsLoaded = require('../loadeds/eventsLoaded.js');
const eventsSource = require('./eventsSource.js');

let partialSources = [];

for (const _event of eventsLoaded) {

    // Si el evento no fue cargado salta al siguiente
    if (!eventsSource[_event.name]) continue;

    // Importa los parciales del evento
    partialSources = partialSources.concat(_event.partials);

    // Importa los parciales de los archivos que contiene el evento
    for (const _all of eventsSource[_event.name].all) {

        partialSources = partialSources.concat(_all.partials);
    };
};

// Elimina los parciales repetidos
partialSources = partialSources.filter((val, ind, arr) => arr.indexOf(val) === ind);

// Exporta los parciales
module.exports = partialSources;