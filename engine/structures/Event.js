export class EventBuilder {

    constructor (options) {

        this.package = options.package;

        this.priority = options.priority ?? 0;

        this.intents  = options.intents  ?? [];
        this.partials = options.partials ?? [];

        this.execute = options.execute ?? function () {};

        // Elimina los "intents" duplicados
        this.intents = this.intents.filter((val, ind, arr) => arr.indexOf(val) === ind);
        
        // Elimina los "partials" duplicados
        this.partials = this.partials.filter((val, ind, arr) => arr.indexOf(val) === ind);
    };
};