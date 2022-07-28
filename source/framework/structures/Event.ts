import {

    EventData,
    EventOptions,
    ExecuteOptions
} from '../types/Event.js';

export default class implements EventData {

    name = 'undefined';

    priority = 0;
    intents  = 0;

    partials: number[] = [];

    execute = ({ client, file, loaded, used }: ExecuteOptions) => {};

    constructor (options: EventOptions) {

        this.name    = options.name;
        this.execute = options.execute;

        this.priority = options.priority ?? this.priority;
        this.intents  = options.intents  ?? this.intents;
        this.partials = options.partials ?? this.partials;

        // Elimina los "Partials" duplicados y los organiza
        this.partials = this.partials
            .filter((partial, ind, arr) => arr.indexOf(partial) === ind)
            .sort((a, b) => a - b);
    };
};
