export default class {

    constructor (content) {

        // El nombre del paquete
        content.name ??= 'undefined';

        // La prioridad de carga del paquete
        content.priority ??= 0;

        // Los "intents" y "partials" necesarios del paquete
        content.intents  ??= [];
        content.partials ??= [];

        // Elimina los "intents" y "partials" duplicados
        content.intents  = content.intents.filter((val, ind, arr) => arr.indexOf(val) === ind);
        content.partials = content.partials.filter((val, ind, arr) => arr.indexOf(val) === ind);

        Object.assign(this, content);
    };
};
