import loadedEvents              from '../loaders/loadedEvents.js';
import loadedServices            from '../loaders/loadedServices.js';
import loadedSlashApplications   from '../loaders/loadedSlashApplications.js';
import loadedUserApplications    from '../loaders/loadedUserApplications.js';
import loadedMessageApplications from '../loaders/loadedMessageApplications.js';

const groupedEvents = {};

for (const _loadedEvent of loadedEvents) {

    const serviceFiles = loadedServices.filter((file) => file.events[_loadedEvent.name]);

    const applicationFiles = loadedSlashApplications
        .concat(loadedUserApplications)
        .concat(loadedMessageApplications)
        .filter((file) => file.events[_loadedEvent.name]);

    const allFiles = serviceFiles.concat(applicationFiles);

    // Omite el evento si no se esta utilizando
    if (!allFiles.length) continue;

    groupedEvents[_loadedEvent.name] = {

        services:     serviceFiles,
        applications: applicationFiles,
        all:          allFiles
    };
};

export default groupedEvents;
