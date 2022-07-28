export interface ServiceData {

    name: string

    priority: number
    intents:  number
    partials: number[]

    events: {

        [event: PropertyKey]: (options: any) => void
    }
};

export interface ServiceOptions {

    name: string

    priority?: number
    intents?:  number
    partials?: number[]

    events: {

        [event: PropertyKey]: (options: any) => void
    }
};
