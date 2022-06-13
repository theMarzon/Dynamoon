import loadedEvents  from '../loaders/events.js';
import groupedEvents from './events.js';

let groupedPartials = [];

for (const _event of loadedEvents) {

    // Omite el evento si no es neceserio
    if (!groupedEvents[_event.name]) continue;

    groupedPartials = groupedPartials.concat(_event.partials);

    for (const _package of groupedEvents[_event.name].all) {

        groupedPartials = groupedPartials.concat(_package.partials);
    };
};

// Elimina los "partials" repetidos
groupedPartials = groupedPartials.filter((val, ind, arr) => arr.indexOf(val) === ind);

export default groupedPartials;
