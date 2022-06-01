import loadedEvents  from '../loadeds/events.js';
import groupedEvents from './events.js';

let groupedIntents = [];

for (const _loadedEvent of loadedEvents) {

    // Omite el evento si no es neceserio
    if (!groupedEvents[_loadedEvent.name]) continue;

    groupedIntents = groupedIntents.concat(_loadedEvent.intents);

    for (const _loadedFile of groupedEvents[_loadedEvent.name].all) {

        groupedIntents = groupedIntents.concat(_loadedFile.intents);
    };
};

// Elimina los "intents" repetidos
groupedIntents = groupedIntents.filter((v, i, a) => a.indexOf(v) === i);

export default groupedIntents;