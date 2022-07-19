import {

    EventData,
    EventOptions,
    ExecuteOptions
} from '../types/Event.js';

export default class implements EventData {

    name = 'undefined';

    priority = 0;
    intents  = 0;

    execute = (options: ExecuteOptions) => {};

    constructor (content: EventOptions) {

        this.name = content.name;

        this.priority = content.priority ?? this.priority;
        this.intents  = content.intents  ?? this.intents;

        this.execute = content.execute ?? this.execute;
    };
};
