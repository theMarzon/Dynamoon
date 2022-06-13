import Package from './Package.js';

export default class extends Package {

    constructor (content) {

        super(content);

        // La funcion que se ejecutara al cargarse el evento
        content.execute ??= function () {};

        Object.assign(this, content);
    };
};
