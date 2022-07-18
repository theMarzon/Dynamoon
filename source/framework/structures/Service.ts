import {

    ServiceData,
    ServiceOptions
} from '../types/Service.js';

export default class implements ServiceData {

    name = 'undefined';

    priority = 0;
    intents  = 0;

    events = {};

    constructor (content: ServiceOptions) {

        this.name = content.name;

        this.priority = content.priority ?? this.priority;
        this.intents  = content.intents  ?? this.intents;

        this.events = content.events ?? this.events;
    };
};
