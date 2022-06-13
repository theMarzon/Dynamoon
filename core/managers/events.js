import loadedEvents              from '../loaders/events.js';
import loadedServices            from '../loaders/services.js';
import loadedSlashApplications   from '../loaders/applications/slash.js';
import loadedUserApplications    from '../loaders/applications/user.js';
import loadedMessageApplications from '../loaders/applications/message.js';
import groupedEvents             from '../groupers/events.js';
import groupedIntents            from '../groupers/intents.js';
import groupedPartials           from '../groupers/partials.js';
import eventsManager             from './events.js';

import {

    eventsDirectory,
    servicesDirectory,
    applicationsDirectory,
    slashApplicationsDirectory,
    userApplicationsDirectory,
    messageApplicationsDirectory
} from './directories.js';

export default function (client) {

    for (const _event of loadedEvents) {

        // Si el evento no fue cargado salta al siguiente
        if (!groupedEvents[_event.name]) continue;

        _event.execute({

            client,

            me: _event,

            loadeds: {

                events:   loadedEvents,
                services: loadedServices,

                applications: {

                    slash:   loadedSlashApplications,
                    user:    loadedUserApplications,
                    message: loadedMessageApplications
                }
            },

            groupeds: {

                events:   groupedEvents,
                intents:  groupedIntents,
                partials: groupedPartials
            },

            managers: {

                events: eventsManager,

                directory: {

                    events:              eventsDirectory,
                    services:            servicesDirectory,
                    applications:        applicationsDirectory,
                    slashApplications:   slashApplicationsDirectory,
                    userApplications:    userApplicationsDirectory,
                    messageApplications: messageApplicationsDirectory
                }
            }
        });
    }
};
