import loadedEvents from '../loaders/loadedEvents.js';
import usedEvents   from './usedEvents.js';

let groupedIntents = 0;

for (const _loadedEvent of loadedEvents) {

    // Omite el evento si no se esta utilizando
    if (!usedEvents[_loadedEvent.name]) continue;

    groupedIntents |= _loadedEvent.intents;

    for (const _loadedFile of usedEvents[_loadedEvent.name].all) {

        groupedIntents |= _loadedFile.intents;
    };
};

export default groupedIntents;
