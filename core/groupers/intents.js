import loadedEvents  from '../loaders/events.js';
import groupedEvents from './events.js';

let groupedIntents = [];

for (const _loadedEvent of loadedEvents) {

    // Omite el evento si no es neceserio
    if (!groupedEvents[_loadedEvent.name]) continue;

    groupedIntents = groupedIntents.concat(_loadedEvent.intents);

    for (const _loadedPackage of groupedEvents[_loadedEvent.name].all) {

        groupedIntents = groupedIntents.concat(_loadedPackage.intents);
    };
};

// Elimina los "intents" repetidos
groupedIntents = groupedIntents.filter((val, ind, arr) => arr.indexOf(val) === ind);

export default groupedIntents;
