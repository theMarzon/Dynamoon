export default class {

    constructor (content) {

        content.name ??= 'undefined';

        content.priority ??= 0;

        content.intents  ??= [];
        content.partials ??= [];

        content.events ??= {};

        // Elimina los "intents" y "partials" duplicados
        content.intents  = content.intents.filter((value, index, array) => array.indexOf(value) === index);
        content.partials = content.partials.filter((value, index, array) => array.indexOf(value) === index);

        Object.assign(this, content);
    };
};
