export default class {

    name = 'undefined';

    priority = 0;
    intents  = 0;

    partials = [];

    execute = function () {};

    constructor (content) {

        this.name = content.name ?? this.name;

        this.priority = content.priority ?? this.priority;
        this.intents  = content.intents  ?? this.intents;

        this.partials = content.partials ?? this.partials;

        this.execute = content.execute ?? this.execute;

        // Elimina los partials duplicados
        this.partials = this.partials.filter((value, index, array) => array.indexOf(value) === index);
    };
};
