export type EventOptions = {

    name: string

    priority?: number
    intents?:  number

    execute?: (options: any) => {}
};
