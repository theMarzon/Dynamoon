import eventsLoader              from '../loaders/events.js';
import servicesLoader            from '../loaders/services.js';
import slashApplicationsLoader   from '../loaders/applications/slash.js';
import userApplicationsLoader    from '../loaders/applications/user.js';
import messageApplicationsLoader from '../loaders/applications/message.js';

let groupedEvents = {};

for (const _loadedEvent of eventsLoader) {

    const servicesFiles = servicesLoader.filter((v) => v.events[_loadedEvent.name]);

    const applicationsFiles = slashApplicationsLoader.concat(userApplicationsLoader)
                                                     .concat(messageApplicationsLoader)
                                                     .filter((v) => v.events[_loadedEvent.name]);

    const allFiles = servicesFiles.concat(applicationsFiles);

    // Si el evento no es utilizado, salta al siguiente
    if (!allFiles.length) continue;

    // Importa el evento y los archivos que lo utilizan
    groupedEvents[_loadedEvent.name] = { 
        
        services:     servicesFiles, 
        applications: applicationsFiles,
        all:          allFiles
    };
};

export default groupedEvents;