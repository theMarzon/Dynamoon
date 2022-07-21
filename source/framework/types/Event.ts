import loadedEvents              from '../loaders/loadedEvents.js';
import loadedServices            from '../loaders/loadedServices.js';
import loadedChatApplications    from '../loaders/applications/loadedChatApplications.js';
import loadedUserApplications    from '../loaders/applications/loadedUserApplications.js';
import loadedMessageApplications from '../loaders/applications/loadedMessageApplications.js';
import usedEvents                from '../groupers/usedEvents.js';
import usedIntents               from '../groupers/usedIntents.js';

import Client from '../structures/Client.js';

export type EventsGroup = {

    [name: string]: {

        applications: typeof loadedChatApplications
                    | typeof loadedUserApplications
                    | typeof loadedMessageApplications

        services: typeof loadedServices

        all: typeof loadedServices
           | typeof loadedChatApplications
           | typeof loadedUserApplications
           | typeof loadedMessageApplications
    }
};

export interface ExecuteOptions {

    file: object

    client: Client

    loaded: {

        events:   typeof loadedEvents
        services: typeof loadedServices

        applications: {

            chat:    typeof loadedChatApplications
            user:    typeof loadedUserApplications
            message: typeof loadedMessageApplications
        }
    }

    used: {

        intents: typeof usedIntents
        events:  typeof usedEvents
    }
};

export interface EventData {

    name: string

    priority: number
    intents:  number

    execute: ({ client, file, loaded, used }: ExecuteOptions) => void
};

export interface EventOptions extends Partial<EventData> {

    name: string
};
