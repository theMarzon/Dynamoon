/**
 * @REFACTORIZE
 *
 * Cuando sea posible, remplazar el Array de Partials por Bits
 */

import loadedEvents from '../loaders/loadedEvents.js';
import usedEvents   from './usedEvents.js';

let groupedPartials = [];

for (const _loadedEvent of loadedEvents) {

    // Omite el evento si no se esta utilizando
    if (!usedEvents[_loadedEvent.name]) continue;

    groupedPartials.push(_loadedEvent.partials);

    for (const _loadedFile of usedEvents[_loadedEvent.name].all) {

        groupedPartials.push(_loadedFile.partials);
    };
};

// Elimina los Partials duplicados
groupedPartials = groupedPartials.filter((partial, index, array) => array.indexOf(partial) === index);

export default groupedPartials;
