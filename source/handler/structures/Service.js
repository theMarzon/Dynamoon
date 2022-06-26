export default class {

    name = 'undefined';

    priority = 0;

    intents  = [];
    partials = [];

    events = {};

    constructor (content) {

        this.name = content.name ?? this.name;

        this.priority = content.priority ?? this.priority;

        this.intents  = content.intents  ?? this.intents;
        this.partials = content.partials ?? this.partials;

        this.events = content.events ?? this.events;

        // Elimina los "intents" y "partials" duplicados
        this.intents  = this.intents.filter((value, index, array) => array.indexOf(value) === index);
        this.partials = this.partials.filter((value, index, array) => array.indexOf(value) === index);
    };
};
