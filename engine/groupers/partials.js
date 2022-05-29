import eventsLoader from '../loaders/events.js';
import eventsGroup  from './events.js';

let groupedPartials = [];

for (const _loadedEvent of eventsLoader) {

    // Si el evento no es utilizado, salta al siguiente
    if (!eventsGroup[_loadedEvent.name]) continue;

    // Importa los "partials" del evento
    groupedPartials = groupedPartials.concat(_loadedEvent.partials);

    for (const _loadedFile of eventsGroup[_loadedEvent.name].all) {

        // Importa los "partials" del archivo que utiliza el evento
        groupedPartials = groupedPartials.concat(_loadedFile.partials);
    };
};

// Elimina los "partials" repetidos
groupedPartials = groupedPartials.filter((v, i, a) => a.indexOf(v) === i);

export default groupedPartials;