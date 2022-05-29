import eventsLoader from '../loaders/events.js';
import eventsGroup  from './events.js';

let groupedIntents = [];

for (const _loadedEvent of eventsLoader) {

    // Si el evento no es utilizado, salta al siguiente
    if (!eventsGroup[_loadedEvent.name]) continue;

    // Importa los "intents" del evento
    groupedIntents = groupedIntents.concat(_loadedEvent.intents);

    for (const _loadedFile of eventsGroup[_loadedEvent.name].all) {

        // Importa los "intents" del archivo que utiliza el evento
        groupedIntents = groupedIntents.concat(_loadedFile.intents);
    };
};

// Elimina los "intents" repetidos
groupedIntents = groupedIntents.filter((v, i, a) => a.indexOf(v) === i);

export default groupedIntents;