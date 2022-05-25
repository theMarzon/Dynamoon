import eventsLoader from '../loaders/events.js';
import eventsGroup  from './events.js';

let groupedIntents = [];

for (const _loadedEvent of eventsLoader) {

    // Si el evento no es utilizado, salta al siguiente
    if (!eventsGroup[_loadedEvent.package]) continue;

    // Importa los "intents" del evento
    groupedIntents = groupedIntents.concat(_loadedEvent.intents);

    for (const _loadedFile of eventsGroup[_loadedEvent.package].all) {

        // Importa los "intents" del archivo que utiliza el evento
        groupedIntents = groupedIntents.concat(_loadedFile.intents);
    };
};

// Elimina los "intents" repetidos
groupedIntents = groupedIntents.filter((val, ind, arr) => arr.indexOf(val) === ind);

export default groupedIntents;