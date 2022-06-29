import loadedEvents from '../loaders/loadedEvents.mjs';
import usedEvents   from './usedEvents.mjs';

let groupedIntents = [];

for (const _loadedEvent of loadedEvents) {

    // Omite el evento si no es utilizado
    if (!usedEvents[_loadedEvent.name]) continue;

    groupedIntents = groupedIntents.concat(_loadedEvent.intents);

    for (const _loadedFile of usedEvents[_loadedEvent.name].all) {

        groupedIntents = groupedIntents.concat(_loadedFile.intents);
    };
};

// Elimina los "intents" duplicados
groupedIntents = groupedIntents.filter((value, index, array) => array.indexOf(value) === index);

export default groupedIntents;
