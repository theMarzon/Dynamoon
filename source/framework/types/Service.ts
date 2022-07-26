import { ExecuteOptions } from './Event.js';

export interface ServiceData {

    name: string

    priority: number
    intents:  number

    events: object

    partials: number[]
};

export interface ServiceOptions {

    name: string

    priority?: number
    intents?:  number

    partials?: number[]

    events: {

        [event: string]: ({ client, event, loaded, used }: ExecuteOptions & { event?: any }) => void
    }
};
