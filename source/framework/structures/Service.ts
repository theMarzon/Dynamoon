import {

    ServiceOptions,
    ServiceData
} from '../types/Service.js';

export default class implements ServiceData {

    name = 'undefined';

    priority = 0;
    intents  = 0;

    events = {};

    constructor (options: ServiceOptions) {

        this.name   = options.name;
        this.events = options.events;

        this.priority = options.priority ?? this.priority;
        this.intents  = options.intents  ?? this.intents;
    };
};
