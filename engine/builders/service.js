export default class {

    constructor (options) {

        this.name = options.name;

        this.priority = options.priority ?? 0;

        this.intents  = options.intents  ?? [];
        this.partials = options.partials ?? [];

        this.events = options.events ?? {};

        // Elimina los "intents" duplicados
        this.intents = this.intents.filter((v, i, a) => a.indexOf(v) === i);
        
        // Elimina los "partials" duplicados
        this.partials = this.partials.filter((v, i, a) => a.indexOf(v) === i);
    };
};