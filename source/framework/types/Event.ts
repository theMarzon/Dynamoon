import loadedEvents              from '../loaders/loadedEvents.js';
import loadedServices            from '../loaders/loadedServices.js';
import loadedChatApplications    from '../loaders/applications/loadedChatApplications.js';
import loadedUserApplications    from '../loaders/applications/loadedUserApplications.js';
import loadedMessageApplications from '../loaders/applications/loadedMessageApplications.js';
import usedEvents                from '../groupers/usedEvents.js';
import usedIntents               from '../groupers/usedIntents.js';

import {

    eventsPath,
    servicesPath,
    applicationsPath,
    chatApplicationsPath,
    userApplicationsPath,
    messageApplicationsPath
} from '../directoriesPath.js';

import Client from '../structures/Client.js';

export interface EventsGroup {

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

export type ExecuteOptions = {

    me: object

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

    directories: {

        events:              typeof eventsPath
        services:            typeof servicesPath
        applications:        typeof applicationsPath
        chatApplications:    typeof chatApplicationsPath
        userApplications:    typeof userApplicationsPath
        messageApplications: typeof messageApplicationsPath
    }
};

export interface EventData {

    name: string

    priority: number
    intents:  number

    execute: ({ client, me, loaded, used, directories }: ExecuteOptions) => void
};

export type EventOptions = Partial<EventData> & {

    name: string
};
