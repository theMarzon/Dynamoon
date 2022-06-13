import loadedEvents              from '../importers/events.js';
import loadedServices            from '../importers/services.js';
import loadedSlashApplications   from '../importers/applications/slash.js';
import loadedUserApplications    from '../importers/applications/user.js';
import loadedMessageApplications from '../importers/applications/message.js';

const groupedEvents = {};

for (const _loadedEvent of loadedEvents) {

    const serviceFiles = loadedServices.filter((val) => val.events[_loadedEvent.name]);

    const applicationFiles = loadedSlashApplications.concat(loadedUserApplications)
                                                    .concat(loadedMessageApplications)
                                                    .filter((val) => val.events[_loadedEvent.name]);

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
