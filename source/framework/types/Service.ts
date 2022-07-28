export interface ServiceData {

    name: string

    priority: number
    intents:  number
    partials: number[]

    events: {

        [event: string | number | symbol]: (options: any) => void
    }
};

export interface ServiceOptions {

    name: string

    priority?: number
    intents?:  number
    partials?: number[]

    events: {

        [event: string | number | symbol]: (options: any) => void
    }
};
