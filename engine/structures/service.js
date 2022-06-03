export class ServiceBuilder {

    constructor (content) {

        content.name ??= 'undefined';

        content.priority ??= 0;

        content.intents  ??= [];
        content.partials ??= [];

        content.events ??= {};

        // Elimina los "intents" y "partials" duplicados
        content.intents  = content.intents.filter((v, i, a) => a.indexOf(v) === i);
        content.partials = content.partials.filter((v, i, a) => a.indexOf(v) === i);

        Object.assign(this, content);
    };
};