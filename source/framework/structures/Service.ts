import {

    ServiceOptions,
    ServiceData
} from '../types/Service.js';

export default class implements ServiceData {

    name = 'undefined';

    priority = 0;
    intents  = 0;

    events = {};

    partials: number[] = [];

    constructor (options: ServiceOptions) {

        this.name   = options.name;
        this.events = options.events;

        this.priority = options.priority ?? this.priority;
        this.intents  = options.intents  ?? this.intents;

        this.partials = options.partials ?? this.partials;

        this.partials = this.partials.filter((partial, index, array) => array.indexOf(partial) === index);
    };
};
