import loadedEvents from '../loaders/loadedEvents.js';
import usedEvents   from './usedEvents.js';

let usedPartials: number[] = [];

for (const _loadedEvent of loadedEvents) {

    // Omite el evento si no se esta utilizando
    if (!usedEvents[_loadedEvent.name]) continue;

    usedPartials = [ ...usedPartials, ..._loadedEvent.partials ];

    for (const _eventFile of usedEvents[_loadedEvent.name].all) {

        usedPartials = [ ...usedPartials, ..._eventFile.partials ];
    };
};

// Elimina los "Partials" duplicados
usedPartials = usedPartials.filter((partial, index, array) => array.indexOf(partial) === index);

export default usedPartials;