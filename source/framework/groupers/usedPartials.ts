import loadedEvents from '../loaders/loadedEvents.js';
import usedEvents   from './usedEvents.js';

let groupedPartials: number[] = [];

for (const _loadedEvent of loadedEvents) {

    // Omite el evento si no se esta utilizando
    if (!usedEvents[_loadedEvent.name]) continue;

    groupedPartials = [ ...groupedPartials, ..._loadedEvent.partials ];

    for (const _loadedFile of usedEvents[_loadedEvent.name].all) {

        groupedPartials = [ ...groupedPartials, ..._loadedFile.partials ];
    };
};

groupedPartials = groupedPartials.filter((partial, index, array) => array.indexOf(partial) === index);

export default groupedPartials;
