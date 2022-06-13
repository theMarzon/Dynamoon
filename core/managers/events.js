import loadedEvents              from '../loaders/events.js';
import loadedServices            from '../loaders/services.js';
import loadedSlashApplications   from '../loaders/slashApplications.js';
import loadedUserApplications    from '../loaders/userApplications.js';
import loadedMessageApplications from '../loaders/messageApplications.js';
import groupedEvents             from '../groupers/events.js';
import groupedIntents            from '../groupers/intents.js';
import groupedPartials           from '../groupers/partials.js';

import {

    eventDirectory,
    serviceDirectory,
    applicationDirectory,
    slashApplicationDirectory,
    userApplicationDirectory,
    messageApplicationDirectory
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

                directories: {

                    event:              eventDirectory,
                    service:            serviceDirectory,
                    application:        applicationDirectory,
                    slashApplication:   slashApplicationDirectory,
                    userApplication:    userApplicationDirectory,
                    messageApplication: messageApplicationDirectory
                }
            }
        });
    }
};
