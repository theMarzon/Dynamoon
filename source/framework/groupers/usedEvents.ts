import loadedEvents              from '../loaders/loadedEvents.js';
import loadedServices            from '../loaders/loadedServices.js';
import loadedChatApplications    from '../loaders/applications/loadedChatApplications.js';
import loadedUserApplications    from '../loaders/applications/loadedUserApplications.js';
import loadedMessageApplications from '../loaders/applications/loadedMessageApplications.js';

import { EventsGroup } from '../types/Event.js';

const groupedEvents: EventsGroup = {};

for (const _loadedEvent of loadedEvents) {

    const serviceFiles = loadedServices.filter((file) => file.events[_loadedEvent.name]);

    const applicationFiles = [

        ...loadedChatApplications,
        ...loadedUserApplications,
        ...loadedMessageApplications
    ]
        .filter((file) => file.events[_loadedEvent.name]);

    const allFiles = [

        ...serviceFiles,
        ...applicationFiles
    ];

    // Omite el evento si no se esta utilizando
    if (!allFiles.length) continue;

    groupedEvents[_loadedEvent.name] = {

        services:     serviceFiles,
        applications: applicationFiles,
        all:          allFiles
    };
};

export default groupedEvents;
