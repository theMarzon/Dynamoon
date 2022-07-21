import {

    EventData,
    EventOptions,
    ExecuteOptions
} from '../types/Event.js';

export default class implements EventData {

    name = 'undefined';

    priority = 0;
    intents  = 0;

    execute = ({ client, file, loaded, used }: ExecuteOptions) => {};

    constructor (options: EventOptions) {

        this.name = options.name;

        this.priority = options.priority ?? this.priority;
        this.intents  = options.intents  ?? this.intents;

        this.execute = options.execute ?? this.execute;
    };
};
