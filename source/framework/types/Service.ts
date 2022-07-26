export interface ServiceData {

    name: string

    priority: number
    intents:  number

    events: object

    partials: number[]
};

export interface ServiceOptions {

    name: string

    events: object

    priority?: number
    intents?:  number

    partials?: number[]
};
