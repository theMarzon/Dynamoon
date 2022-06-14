export default class {

    constructor (content) {

        content.name ??= 'undefined';

        content.priority ??= 0;

        content.intents  ??= [];
        content.partials ??= [];

        // Elimina los "intents" y "partials" duplicados
        content.intents  = content.intents.filter((val, ind, arr) => arr.indexOf(val) === ind);
        content.partials = content.partials.filter((val, ind, arr) => arr.indexOf(val) === ind);

        Object.assign(this, content);
    };
};
