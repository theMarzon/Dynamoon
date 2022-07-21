export interface ServiceData {

    name: string

    priority: number
    intents:  number

    events: object
};

export interface ServiceOptions extends Partial<ServiceData> {

    name: string
};
