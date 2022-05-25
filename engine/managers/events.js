import eventsLoader              from '../loaders/events.js';
import servicesLoader            from '../loaders/services.js';
import slashApplicationsLoader   from '../loaders/applications/slash.js';
import userApplicationsLoader    from '../loaders/applications/user.js';
import messageApplicationsLoader from '../loaders/applications/message.js';
import eventsGroup               from '../groupers/events.js';
import intentsGroup              from '../groupers/intents.js';
import eventsManager             from './events.js';

import * as directoryManager from './directory.js';

import { ToolsBuilder } from '../structures/Tools.js';

export default (client) => {

    // Carga los eventos
    for (const _loadedEvent of eventsLoader) {

        // Si el evento no fue cargado salta al siguiente
        if (!eventsGroup[_loadedEvent.package]) continue;

        _loadedEvent.execute({
                
            client,

            loaders: {

                events:   eventsLoader,
                services: servicesLoader,

                applications: {

                    slash:   slashApplicationsLoader,
                    user:    userApplicationsLoader,
                    message: messageApplicationsLoader
                }
            },

            groupers: {

                events:  eventsGroup,
                intents: intentsGroup
            },

            managers: {

                events:    eventsManager,
                directory: directoryManager
            },

            tools: new ToolsBuilder(_loadedEvent)
        });
    }  
};