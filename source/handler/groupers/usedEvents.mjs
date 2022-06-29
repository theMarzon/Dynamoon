import loadedEvents              from '../loaders/loadedEvents.mjs';
import loadedServices            from '../loaders/loadedServices.mjs';
import loadedSlashApplications   from '../loaders/applications/loadedSlashApplications.mjs';
import loadedUserApplications    from '../loaders/applications/loadedUserApplications.mjs';
import loadedMessageApplications from '../loaders/applications/loadedMessageApplications.mjs';

const groupedEvents = {};

for (const _loadedEvent of loadedEvents) {

    const serviceFiles = loadedServices.filter((value) => value.events[_loadedEvent.name]);

    const applicationFiles = loadedSlashApplications
                                                   .concat(loadedUserApplications)
                                                   .concat(loadedMessageApplications)
                                                   .filter((value) => value.events[_loadedEvent.name]);

    const allFiles = serviceFiles.concat(applicationFiles);

    // Omite el evento si no es utilizado
    if (!allFiles.length) continue;

    groupedEvents[_loadedEvent.name] = {

        services:     serviceFiles,
        applications: applicationFiles,
        all:          allFiles
    };
};

export default groupedEvents;
