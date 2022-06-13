import loadedEvents              from '../loaders/events.js';
import loadedServices            from '../loaders/services.js';
import loadedSlashApplications   from '../loaders/applications/slash.js';
import loadedUserApplications    from '../loaders/applications/user.js';
import loadedMessageApplications from '../loaders/applications/message.js';

const groupedEvents = {};

for (const _loadedEvent of loadedEvents) {

    const serviceFiles = loadedServices.filter((val) => val.events[_loadedEvent.name]);

    const applicationFiles = loadedSlashApplications.concat(loadedUserApplications)
                                                     .concat(loadedMessageApplications)
                                                     .filter((val) => val.events[_loadedEvent.name]);

    const allPackages = serviceFiles.concat(applicationFiles);

    // Omite el evento si no es neceserio
    if (!allPackages.length) continue;

    groupedEvents[_loadedEvent.name] = {

        services:     serviceFiles,
        applications: applicationFiles,
        all:          allPackages
    };
};

export default groupedEvents;
