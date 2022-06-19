import loadedEvents              from '../loaders/loadedEvents.js';
import loadedServices            from '../loaders/loadedServices.js';
import loadedSlashApplications   from '../loaders/applications/loadedSlashApplications.js';
import loadedUserApplications    from '../loaders/applications/loadedUserApplications.js';
import loadedMessageApplications from '../loaders/applications/loadedMessageApplications.js';

const groupedEvents = {};

for (const _loadedEvent of loadedEvents) {

    const serviceFiles = loadedServices.filter((value) => value.events[_loadedEvent.name]);

    const applicationFiles = loadedSlashApplications
                                                   .concat(loadedUserApplications)
                                                   .concat(loadedMessageApplications)
                                                   .filter((value) => value.events[_loadedEvent.name]);

    const allFiles = serviceFiles.concat(applicationFiles);

    // Omite el evento si no es neceserio
    if (!allFiles.length) continue;

    groupedEvents[_loadedEvent.name] = {

        services:     serviceFiles,
        applications: applicationFiles,
        all:          allFiles
    };
};

export default groupedEvents;
