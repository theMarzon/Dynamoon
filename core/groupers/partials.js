import loadedEvents from '../loaders/events.js';
import usedEvents   from './events.js';

let groupedPartials = [];

for (const _loadedEvent of loadedEvents) {

    // Omite el evento si no es neceserio
    if (!usedEvents[_loadedEvent.name]) continue;

    groupedPartials = groupedPartials.concat(_loadedEvent.partials);

    for (const _loadedFile of usedEvents[_loadedEvent.name].all) {

        groupedPartials = groupedPartials.concat(_loadedFile.partials);
    };
};

// Elimina los "partials" repetidos
groupedPartials = groupedPartials.filter((val, ind, arr) => arr.indexOf(val) === ind);

export default groupedPartials;
