export class EventBuilder {

    constructor (options) {

        this.name = options.name;

        this.priority = options.priority ?? 0;
        
        this.developing = options.developing ?? true;

        this.intents  = options.intents  ?? [];
        this.partials = options.partials ?? [];

        this.execute = options.execute ?? function () {};

        // Elimina los "intents" duplicados
        this.intents = this.intents.filter((val, ind, arr) => arr.indexOf(val) === ind);
        
        // Elimina los "partials" duplicados
        this.partials = this.partials.filter((val, ind, arr) => arr.indexOf(val) === ind);
    };
};