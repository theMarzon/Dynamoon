import Client             from '../structures/Client.js';
import Event              from '../structures/Event.js';
import Service            from '../structures/Service.js';
import ChatApplication    from '../structures/Applications/ChatApplication.js';
import UserApplication    from '../structures/Applications/UserApplication.js';
import MessageApplication from '../structures/Applications/MessageApplication.js';

export interface EventsGroup {

    [event: string]: {

        applications: (ChatApplication
                    |  UserApplication
                    |  MessageApplication)[]

        services: Service[]

        all: (Service
           |  ChatApplication
           |  UserApplication
           |  MessageApplication)[]
    }
};

export interface ExecuteOptions {

    file: any

    client: Client

    loaded: {

        events:   Event[]
        services: Service[]

        applications: {

            chat:    ChatApplication[]
            user:    UserApplication[]
            message: MessageApplication[]
        }
    }

    used: {

        intents: number

        events: EventsGroup
    }
};

export interface EventData {

    name: string

    priority: number
    intents:  number

    partials: number[]

    execute: ({ client, file, loaded, used }: ExecuteOptions) => void
};

export interface EventOptions {

    name: string

    execute: ({ client, file, loaded, used }: ExecuteOptions) => void

    priority?: number
    intents?:  number

    partials?: number[]
};
