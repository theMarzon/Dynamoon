import loadedEvents  from '../loaders/events.js';
import groupedEvents from './events.js';

let groupedIntents = [];

for (const _event of loadedEvents) {

    // Omite el evento si no es neceserio
    if (!groupedEvents[_event.name]) continue;

    groupedIntents = groupedIntents.concat(_event.intents);

    for (const _package of groupedEvents[_event.name].all) {

        groupedIntents = groupedIntents.concat(_package.intents);
    };
};

// Elimina los "intents" repetidos
groupedIntents = groupedIntents.filter((val, ind, arr) => arr.indexOf(val) === ind);

export default groupedIntents;
