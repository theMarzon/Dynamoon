export type ServiceOptions = {

    name: string

    priority?: number
    intents?:  number

    events?: object
};

export interface ServiceData {

    name: string

    priority: number
    intents:  number

    events: object
};
