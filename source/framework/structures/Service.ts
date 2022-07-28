import {

    ServiceData,
    ServiceOptions
} from '../types/Service.js';

export default class implements ServiceData {

    name = 'undefined';

    priority = 0;
    intents  = 0;

    partials: number[] = [];

    events = {};

    constructor (options: ServiceOptions) {

        this.name   = options.name;
        this.events = options.events;

        this.priority = options.priority ?? this.priority;
        this.intents  = options.intents  ?? this.intents;
        this.partials = options.partials ?? this.partials;

        // Elimina los "Partials" duplicados y los organiza
        this.partials = this.partials
            .filter((partial, ind, arr) => arr.indexOf(partial) === ind)
            .sort((a, b) => a - b);
    };
};
