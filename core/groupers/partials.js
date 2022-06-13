import loadedEvents  from '../loaders/events.js';
import groupedEvents from './events.js';

let groupedPartials = [];

for (const _loadedEvent of loadedEvents) {

    // Omite el evento si no es neceserio
    if (!groupedEvents[_loadedEvent.name]) continue;

    groupedPartials = groupedPartials.concat(_loadedEvent.partials);

    for (const _loadedPackage of groupedEvents[_loadedEvent.name].all) {

        groupedPartials = groupedPartials.concat(_loadedPackage.partials);
    };
};

// Elimina los "partials" repetidos
groupedPartials = groupedPartials.filter((val, ind, arr) => arr.indexOf(val) === ind);

export default groupedPartials;
