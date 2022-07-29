import loadedEvents from '../loaders/loadedEvents.js';
import usedEvents   from './usedEvents.js';

let usedIntents = 0;

for (const _loadedEvent of loadedEvents) {

    // Omite el evento si no se esta utilizando
    if (!usedEvents.has(_loadedEvent.name)) continue;

    usedIntents |= _loadedEvent.intents;

    for (const _eventFile of usedEvents.get(_loadedEvent.name)!!.all) {

        usedIntents |= _eventFile.intents;
    };
};

export default usedIntents;
