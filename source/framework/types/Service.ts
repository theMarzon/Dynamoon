export interface ServiceData {

    name: string

    priority: number
    intents:  number

    events: object
};

export type ServiceOptions = Partial<ServiceData> & {

    name: string
};
