import loadedEvents from '../loaders/loadedEvents.js';
import usedEvents   from './usedEvents.js';

let groupedPartials = [];

for (const _loadedEvent of loadedEvents) {

    // Omite el evento si no se esta utilizando
    if (!usedEvents[_loadedEvent.name]) continue;

    groupedPartials = groupedPartials.concat(_loadedEvent.partials);

    for (const _loadedFile of usedEvents[_loadedEvent.name].all) {

        groupedPartials = groupedPartials.concat(_loadedFile.partials);
    };
};

// Elimina los "partials" duplicados
groupedPartials = groupedPartials.filter((value, index, array) => array.indexOf(value) === index);

export default groupedPartials;
