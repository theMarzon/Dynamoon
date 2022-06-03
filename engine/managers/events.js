import loadedEvents              from '../loadeds/events.js';
import loadedServices            from '../loadeds/services.js';
import loadedSlashApplications   from '../loadeds/applications/slash.js';
import loadedUserApplications    from '../loadeds/applications/user.js';
import loadedMessageApplications from '../loadeds/applications/message.js';
import groupedEvents             from '../groupeds/events.js';
import groupedIntents            from '../groupeds/intents.js';
import groupedPartials           from '../groupeds/partials.js';
import eventsManager             from './events.js';

import {

    eventsDirectory,
    servicesDirectory,
    applicationsDirectory,
    slashApplicationsDirectory,
    userApplicationsDirectory,
    messageApplicationsDirectory
} from './directory.js';

export default (client) => {

    // Carga los eventos
    for (const _loadedEvent of loadedEvents) {

        // Si el evento no fue cargado salta al siguiente
        if (!groupedEvents[_loadedEvent.name]) continue;

        _loadedEvent.execute({
                
            client,

            me: _loadedEvent,

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