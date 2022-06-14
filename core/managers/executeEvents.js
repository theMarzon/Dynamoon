import loadedEvents              from '../loaders/loadedEvents.js';
import loadedServices            from '../loaders/loadedServices.js';
import loadedSlashApplications   from '../loaders/applications/loadedSlashApplications.js';
import loadedUserApplications    from '../loaders/applications/loadedUserApplications.js';
import loadedMessageApplications from '../loaders/applications/loadedMessageApplications.js';
import usedEvents                from '../groupers/usedEvents.js';
import usedIntents               from '../groupers/usedIntents.js';
import usedPartials              from '../groupers/usedPartials.js';

import {

    eventsPath,
    servicesPath,
    applicationsPath,
    slashApplicationsPath,
    userApplicationsPath,
    messageApplicationsPath
} from './directories.js';

export default async function (client) {

    for (const _loadedEvent of loadedEvents) {

        // Si el evento no fue cargado salta al siguiente
        if (!usedEvents[_loadedEvent.name]) continue;

        await _loadedEvent.execute({

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

                events:              eventsPath,
                services:            servicesPath,
                applications:        applicationsPath,
                slashApplications:   slashApplicationsPath,
                userApplications:    userApplicationsPath,
                messageApplications: messageApplicationsPath
            }
        });
    }
};
