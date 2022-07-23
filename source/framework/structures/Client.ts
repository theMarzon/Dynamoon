import { Client } from 'discord.js';

import loadedEvents              from '../loaders/loadedEvents.js';
import loadedServices            from '../loaders/loadedServices.js';
import loadedChatApplications    from '../loaders/applications/loadedChatApplications.js';
import loadedUserApplications    from '../loaders/applications/loadedUserApplications.js';
import loadedMessageApplications from '../loaders/applications/loadedMessageApplications.js';
import usedEvents                from '../groupers/usedEvents.js';
import usedIntents               from '../groupers/usedIntents.js';

import { ClientOptions } from '../types/Client.js';

export default class extends Client {

    framework = {

        name:       'Dynamoon',
        version:    '0.9.0',
        repository: 'https://github.com/theMarzon/Dynamoon',

        images: {

            banner: 'https://i.ibb.co/wNtKXXw/banner.png',
            icon:   'https://i.ibb.co/sW9cJx4/icon.png',
            logo:   'https://i.ibb.co/CKz4kQQ/logo.png'
        }
    };

    constructor (options: ClientOptions) {

        super({

            ...options,

            intents: usedIntents
        });

        this.setMaxListeners(1);
    };

    openEvents () {

        for (const _loadedEvent of loadedEvents) {

            // Omite el evento si no se esta utilizando
            if (!usedEvents[_loadedEvent.name]) continue;

            _loadedEvent.execute({

                client: this,

                file: _loadedEvent,

                loaded: {

                    events:   loadedEvents,
                    services: loadedServices,

                    applications: {

                        chat:    loadedChatApplications,
                        user:    loadedUserApplications,
                        message: loadedMessageApplications
                    }
                },

                used: {

                    events:  usedEvents,
                    intents: usedIntents
                }
            });
        }
    };
};
