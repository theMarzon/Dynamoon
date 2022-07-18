import Service            from '../structures/Service.js';
import ChatApplication    from '../structures/Applications/ChatApplication.js';
import UserApplication    from '../structures/Applications/UserApplication.js';
import MessageApplication from '../structures/Applications/MessageApplication.js';

export interface UsedEventsGroup {

    [name: string]: {

        services: Service[]

        applications: ChatApplication[]
                    | UserApplication[]
                    | MessageApplication[]

        all: Service[]
           | ChatApplication[]
           | UserApplication[]
           | MessageApplication[]
    }
};

export type EventOptions = {

    name: string

    priority?: number
    intents?:  number

    execute?: () => {}
};

export interface EventData {

    name: string

    priority: number
    intents:  number

    execute: () => {}
};
