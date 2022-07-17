import { EventOptions } from '../types/Event.js';

export default class {

    name = 'undefined';

    priority = 0;
    intents  = 0;

    execute = (options: any) => {};

    constructor (content: EventOptions) {

        this.name = content.name;

        this.priority = content.priority ?? this.priority;
        this.intents  = content.intents  ?? this.intents;

        this.execute = content.execute ?? this.execute;
    };
};
