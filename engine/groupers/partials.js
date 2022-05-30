import loadedEvents  from '../loaders/events.js';
import groupedEvents from './events.js';

let groupedPartials = [];

for (const _loadedEvent of loadedEvents) {

    // Omite el evento si no es neceserio
    if (!groupedEvents[_loadedEvent.name]) continue;

    groupedPartials = groupedPartials.concat(_loadedEvent.partials);

    for (const _loadedFile of groupedEvents[_loadedEvent.name].all) {

        groupedPartials = groupedPartials.concat(_loadedFile.partials);
    };
};

// Elimina los "partials" repetidos
groupedPartials = groupedPartials.filter((v, i, a) => a.indexOf(v) === i);

export default groupedPartials;