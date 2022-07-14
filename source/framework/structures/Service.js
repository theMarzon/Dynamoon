export default class {

    name = 'undefined';

    priority = 0;
    intents  = 0;

    partials = [];

    events = {};

    constructor (content) {

        this.name = content.name ?? this.name;

        this.priority = content.priority ?? this.priority;
        this.intents  = content.intents  ?? this.intents;

        this.partials = content.partials ?? this.partials;

        this.events = content.events ?? this.events;

        // Elimina los partials duplicados
        this.partials = this.partials.filter((partial, index, array) => array.indexOf(partial) === index);
    };
};
