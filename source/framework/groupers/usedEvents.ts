import loadedEvents              from '../loaders/loadedEvents.js';
import loadedServices            from '../loaders/loadedServices.js';
import loadedChatApplications    from '../loaders/applications/loadedChatApplications.js';
import loadedUserApplications    from '../loaders/applications/loadedUserApplications.js';
import loadedMessageApplications from '../loaders/applications/loadedMessageApplications.js';

interface EventsGroup {

    [name: string]: {

        applications: typeof loadedChatApplications
                    | typeof loadedUserApplications
                    | typeof loadedMessageApplications

        services: typeof loadedServices

        all: typeof loadedServices
           | typeof loadedChatApplications
           | typeof loadedUserApplications
           | typeof loadedMessageApplications
    }
};

const groupedEvents: EventsGroup = {};

for (const _loadedEvent of loadedEvents) {

    const serviceFiles = loadedServices.filter((file) => file.events[_loadedEvent.name]);

    const applicationFiles = loadedChatApplications

        // @ts-ignore
        .concat(loadedUserApplications)

        // @ts-ignore
        .concat(loadedMessageApplications)
        .filter((file) => file.events[_loadedEvent.name]);

    const allFiles = applicationFiles;

    // Omite el evento si no se esta utilizando
    if (!allFiles.length) continue;

    groupedEvents[_loadedEvent.name] = {

        services:     serviceFiles,
        applications: applicationFiles,
        all:          allFiles
    };
};

export default groupedEvents;
