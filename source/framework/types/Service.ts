export interface ServiceData {

    name: string

    priority: number
    intents:  number
    partials: number[]

    events: object
};

export interface ServiceOptions {

    name: string

    priority?: number
    intents?:  number
    partials?: number[]

    events: object
};
