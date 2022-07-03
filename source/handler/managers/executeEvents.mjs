import loadedEvents              from '../loaders/loadedEvents.mjs';
import loadedServices            from '../loaders/loadedServices.mjs';
import loadedSlashApplications   from '../loaders/applications/loadedSlashApplications.mjs';
import loadedUserApplications    from '../loaders/applications/loadedUserApplications.mjs';
import loadedMessageApplications from '../loaders/applications/loadedMessageApplications.mjs';
import usedEvents                from '../groupers/usedEvents.mjs';
import usedIntents               from '../groupers/usedIntents.mjs';
import usedPartials              from '../groupers/usedPartials.mjs';

import {

    eventsDirectory,
    servicesDirectory,
    applicationsDirectory,
    slashApplicationsDirectory,
    userApplicationsDirectory,
    messageApplicationsDirectory
} from './directories.mjs';

export default (client) => {

    for (const _loadedEvent of loadedEvents) {

        // Omite el evento si no es utilizado
        if (!usedEvents[_loadedEvent.name]) continue;

        _loadedEvent.execute({

            client,

            me: _loadedEvent,

            loaded: {

                events:   loadedEvents,
                services: loadedServices,

                applications: {

                    slash:   loadedSlashApplications,
                    user:    loadedUserApplications,
                    message: loadedMessageApplications
                }
            },

            grouped: {

                events:   usedEvents,
                intents:  usedIntents,
                partials: usedPartials
            },

            directories: {

                events:              eventsDirectory,
                services:            servicesDirectory,
                applications:        applicationsDirectory,
                slashApplications:   slashApplicationsDirectory,
                userApplications:    userApplicationsDirectory,
                messageApplications: messageApplicationsDirectory
            }
        });
    }
};
