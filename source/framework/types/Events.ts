export type EventOptions = {

    name: string

    priority?: number
    intents?:  number

    execute?: () => any
};

export interface EventData {

    name: string

    priority: number
    intents:  number

    execute: () => any
};
