import loadedEvents              from '../loaders/events.js';
import loadedServices            from '../loaders/services.js';
import loadedSlashApplications   from '../loaders/applications/slash.js';
import loadedUserApplications    from '../loaders/applications/user.js';
import loadedMessageApplications from '../loaders/applications/message.js';
import groupedEvents             from '../groupers/events.js';
import groupedIntents            from '../groupers/intents.js';
import groupedPartials           from '../groupers/partials.js';
import eventsManager             from './events.js';

import * as directoryManager from './directory.js';

export default (client) => {

    // Carga los eventos
    for (const _loadedEvent of loadedEvents) {

        // Si el evento no fue cargado salta al siguiente
        if (!groupedEvents[_loadedEvent.name]) continue;

        _loadedEvent.execute({
                
            client,

            me: _loadedEvent,

            loaders: {

                events:   loadedEvents,
                services: loadedServices,

                applications: {

                    slash:   loadedSlashApplications,
                    user:    loadedUserApplications,
                    message: loadedMessageApplications
                }
            },

            groupers: {

                events:   groupedEvents,
                intents:  groupedIntents,
                partials: groupedPartials
            },

            managers: {

                events:    eventsManager,
                directory: directoryManager
            }
        });
    }  
};