import loadedEvents from '../loaders/loadedEvents.js';
import usedEvents   from './usedEvents.js';

let groupedIntents = [];

for (const _loadedEvent of loadedEvents) {

    // Omite el evento si no es neceserio
    if (!usedEvents[_loadedEvent.name]) continue;

    groupedIntents = groupedIntents.concat(_loadedEvent.intents);

    for (const _loadedFile of usedEvents[_loadedEvent.name].all) {

        groupedIntents = groupedIntents.concat(_loadedFile.intents);
    };
};

// Elimina los "intents" repetidos
groupedIntents = groupedIntents.filter((val, ind, arr) => arr.indexOf(val) === ind);

export default groupedIntents;
