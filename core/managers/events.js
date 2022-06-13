import loadedEvents              from '../importers/events.js';
import loadedServices            from '../importers/services.js';
import loadedSlashApplications   from '../importers/applications/slash.js';
import loadedUserApplications    from '../importers/applications/user.js';
import loadedMessageApplications from '../importers/applications/message.js';
import usedEvents                from '../groupers/events.js';
import usedIntents               from '../groupers/intents.js';
import usedPartials              from '../groupers/partials.js';

import {

    eventsPath,
    servicesPath,
    applicationsPath,
    slashApplicationsPath,
    userApplicationsPath,
    messageApplicationsPath
} from './directories.js';

export default function (client) {

    for (const _loadedEvent of loadedEvents) {

        // Si el evento no fue cargado salta al siguiente
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

            used: {

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
