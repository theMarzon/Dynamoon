export interface ServiceEvents {

    [event: PropertyKey]: (options: any) => void
};

export interface ServiceData {

    name: string

    priority: number
    intents:  number
    partials: number[]

    events: ServiceEvents
};

export interface ServiceOptions {

    name: string

    priority?: number
    intents?:  number
    partials?: number[]

    events: ServiceEvents
};
